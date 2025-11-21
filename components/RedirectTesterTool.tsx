
import React, { useState, useCallback, useEffect } from 'react';
import { traceRedirects } from '../services/redirectService';
import { RedirectResult, RedirectStep, UserAgentType } from '../types';

const USER_AGENTS: UserAgentType[] = [
  'Googlebot Smartphone',
  'Googlebot Desktop',
  'Chrome Desktop',
  'iPhone Safari'
];

const getStatusColor = (status: number): string => {
  if (status >= 200 && status < 300) return 'text-emerald-400';
  if (status >= 300 && status < 400) {
      if (status === 301) return 'text-blue-400'; // 301 Blue for Permanent
      return 'text-amber-400'; // 302 Amber for Temporary
  }
  if (status >= 400) return 'text-rose-500';
  return 'text-gray-400';
};

const getStatusBadgeColor = (status: number): string => {
    if (status >= 200 && status < 300) return 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300';
    if (status >= 300 && status < 400) {
        if (status === 301) return 'bg-blue-500/20 border-blue-500/50 text-blue-300';
        return 'bg-amber-500/20 border-amber-500/50 text-amber-300';
    }
    if (status >= 400) return 'bg-rose-500/20 border-rose-500/50 text-rose-300';
    return 'bg-gray-500/20 border-gray-500/50 text-gray-300';
};

const getStatusDescription = (status: number): string => {
    switch(status) {
        case 200: return "Success. The page loaded successfully.";
        case 301: return "Permanent Redirect. SEO equity is passed to the new URL.";
        case 302: return "Temporary Redirect. SEO equity is NOT passed.";
        case 307: return "Temporary Redirect (HSTS). Browser cached redirect.";
        case 404: return "Not Found. The page does not exist.";
        case 500: return "Server Error. The web server failed.";
        default: return "HTTP Status Code";
    }
};

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500/30 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-purple-500 rounded-full animate-spin"></div>
    </div>
    <span className="mt-4 text-gray-300 font-medium animate-pulse">Tracing Redirect Chain...</span>
  </div>
);

const ResultItem: React.FC<{ step: RedirectStep; index: number; totalSteps: number }> = ({ step, index, totalSteps }) => (
    <div className="relative pl-8 pb-8 last:pb-0">
        {/* Connecting Line */}
        {index !== totalSteps - 1 && (
            <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-gray-600 to-gray-800"></div>
        )}
        
        {/* Step Node Icon */}
        <div className={`absolute left-0 top-1 w-8 h-8 rounded-full flex items-center justify-center border-2 bg-gray-900 z-10 ${getStatusBadgeColor(step.statusCode).replace('bg-', 'border-').split(' ')[1]}`}>
            <span className="text-xs font-bold text-gray-300">{index + 1}</span>
        </div>

        <div className="bg-gray-800/40 border border-gray-700/50 rounded-lg p-5 hover:bg-gray-800/60 transition-colors duration-300 group">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                 <div className="group relative">
                    <span className={`px-3 py-1 rounded text-xs font-bold border ${getStatusBadgeColor(step.statusCode)} cursor-help`}>
                        {step.statusCode} {step.statusText}
                    </span>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-0 mb-2 w-48 p-2 bg-black border border-gray-700 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-xl">
                        {getStatusDescription(step.statusCode)}
                    </div>
                 </div>
                 {step.latency && (
                     <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                         <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         {Math.round(step.latency)}ms
                     </span>
                 )}
            </div>

            <div className="font-mono text-sm break-all text-gray-300 mb-1">
                <span className="text-gray-500 select-none">URL: </span> 
                <a href={step.url} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400">{step.url}</a>
            </div>
            
            {step.location && (
                 <div className="font-mono text-sm break-all text-purple-300/80 mt-2 pl-4 border-l-2 border-purple-500/20">
                    <span className="text-gray-500 select-none">Redirects to: </span>
                    {step.location}
                </div>
            )}
        </div>
    </div>
);

const RedirectTesterTool: React.FC = () => {
  const [url, setUrl] = useState<string>('https://google.com');
  const [userAgent, setUserAgent] = useState<UserAgentType>('Googlebot Smartphone');
  const [result, setResult] = useState<RedirectResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<RedirectResult[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Load history from local storage
  useEffect(() => {
      const saved = localStorage.getItem('redirect_history');
      if (saved) {
          try {
              setHistory(JSON.parse(saved));
          } catch (e) { console.error("Failed to parse history", e); }
      }
  }, []);

  const saveToHistory = (newResult: RedirectResult) => {
      const updated = [newResult, ...history].slice(0, 10); // Keep last 10
      setHistory(updated);
      localStorage.setItem('redirect_history', JSON.stringify(updated));
  };

  const handleHistoryClick = (item: RedirectResult) => {
      setResult(item);
      setUrl(item.inputUrl);
      setUserAgent(item.userAgent as UserAgentType);
      setShowHistory(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearHistory = () => {
      setHistory([]);
      localStorage.removeItem('redirect_history');
  };

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    if (!url) {
      setError('Please enter a URL to test.');
      return;
    }
    setIsLoading(true);
    setResult(null);
    setError(null);
    
    const traceResult = await traceRedirects(url, userAgent);

    if(traceResult.error) {
        setError(traceResult.error);
    } else {
        saveToHistory(traceResult);
    }
    
    setResult(traceResult);
    setIsLoading(false);
  }, [url, userAgent, history]);

  const copyReport = () => {
      if (!result) return;
      const report = `Redirect Report for ${result.inputUrl}\nUser Agent: ${result.userAgent}\nDate: ${new Date(result.timestamp).toLocaleString()}\n\nChain:\n${result.steps.map((s, i) => `${i+1}. ${s.statusCode} -> ${s.url}`).join('\n')}\n\nFinal: ${result.finalStatusCode} - ${result.finalUrl}`;
      navigator.clipboard.writeText(report);
      alert("Report copied to clipboard!");
  };

  return (
    <section className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
      
      {/* Main Analysis Panel */}
      <div className="flex-grow">
        <div className="p-[1px] rounded-2xl bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 shadow-2xl shadow-purple-900/30">
            <div className="bg-[#0f0510]/95 backdrop-blur-xl rounded-2xl p-6 md:p-8">
                
                {/* Controls */}
                <form onSubmit={handleSubmit} className="space-y-4">
                
                  <div className="flex flex-col md:flex-row gap-4 justify-between items-end md:items-center mb-2">
                      <label className="text-lg font-medium text-gray-200 flex items-center gap-2">
                          <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                          Target URL
                      </label>
                      
                      <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Simulator:</span>
                          <select 
                              value={userAgent} 
                              onChange={(e) => setUserAgent(e.target.value as UserAgentType)}
                              className="bg-gray-800 border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block p-1.5"
                          >
                              {USER_AGENTS.map(ua => <option key={ua} value={ua}>{ua}</option>)}
                          </select>
                      </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative flex flex-col sm:flex-row gap-0 sm:gap-0">
                        <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter website URL (e.g., https://doodax.com)"
                        className="flex-grow bg-gray-900 border border-gray-700 rounded-t-lg sm:rounded-l-lg sm:rounded-r-none py-4 px-5 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition duration-200 text-lg font-mono shadow-inner"
                        disabled={isLoading}
                        />
                        <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-500 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-b-lg sm:rounded-r-lg sm:rounded-l-none transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-purple-500/25 whitespace-nowrap text-lg flex items-center justify-center gap-2"
                        disabled={isLoading}
                        >
                          {isLoading ? 'Analyzing...' : 'Trace Redirects'} 
                          {!isLoading && <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>}
                        </button>
                    </div>
                  </div>
                </form>

                {/* Results Area */}
                <div className="mt-10 min-h-[150px]">
                  {isLoading && <LoadingSpinner />}
                  
                  {error && !isLoading && (
                    <div className="flex items-start gap-3 p-4 rounded-lg bg-rose-900/20 border border-rose-500/50 text-rose-200 animate-fade-in">
                       <svg className="w-6 h-6 text-rose-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                       <div>
                           <h3 className="font-bold">Analysis Failed</h3>
                           <p className="text-sm opacity-90">{error}</p>
                       </div>
                    </div>
                  )}

                  {result && !isLoading && (
                    <div className="space-y-8 animate-fade-in">
                      {/* Summary Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-800/40 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center text-center hover:bg-gray-800/60 transition-colors">
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Status Code</span>
                            <span className={`text-3xl font-bold ${getStatusColor(result.finalStatusCode)}`}>{result.finalStatusCode}</span>
                        </div>
                        <div className="p-4 bg-gray-800/40 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center text-center hover:bg-gray-800/60 transition-colors">
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Redirect Hops</span>
                            <span className={`text-3xl font-bold ${result.steps.length > 2 ? 'text-amber-400' : 'text-white'}`}>{result.steps.length}</span>
                        </div>
                         <div className="p-4 bg-gray-800/40 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center text-center hover:bg-gray-800/60 transition-colors">
                            <span className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Total Time</span>
                            <span className="text-3xl font-bold text-purple-300">{result.totalTime}ms</span>
                        </div>
                      </div>

                      {/* Tool Actions */}
                      <div className="flex justify-end gap-3">
                          <button onClick={copyReport} className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700 text-gray-300 transition-colors border border-gray-700">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
                              Copy Report
                          </button>
                      </div>

                      {/* Chain Visualization */}
                      <div>
                        <h2 className="text-lg font-bold text-gray-200 mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                            Redirect Path
                        </h2>
                        <div className="bg-[#0a0005]/50 p-6 rounded-xl border border-gray-800">
                            {result.steps.map((step, index) => (
                            <ResultItem key={index} step={step} index={index} totalSteps={result.steps.length} />
                            ))}
                        </div>
                      </div>
                      
                      {/* Final Destination Info */}
                      <div className="p-5 rounded-xl bg-emerald-900/10 border border-emerald-500/20 flex items-start gap-4">
                          <div className="p-2 bg-emerald-500/20 rounded-lg">
                             <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          </div>
                          <div className="overflow-hidden">
                              <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wide mb-1">Final Destination Reached</h3>
                              <p className="text-emerald-100/80 font-mono text-sm truncate">{result.finalUrl}</p>
                          </div>
                      </div>

                    </div>
                  )}
                </div>
            </div>
        </div>
      </div>

      {/* History Sidebar (Desktop: Right, Mobile: Toggle) */}
      <div className="lg:w-80 flex-shrink-0">
          <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden flex flex-col h-full max-h-[800px]">
              <div className="p-4 border-b border-gray-700/50 flex justify-between items-center bg-gray-800/50">
                  <h3 className="font-bold text-gray-200 flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Recent Scans
                  </h3>
                  {history.length > 0 && (
                      <button onClick={clearHistory} className="text-xs text-red-400 hover:text-red-300 hover:underline">Clear</button>
                  )}
              </div>
              
              <div className="overflow-y-auto p-2 space-y-2 custom-scrollbar flex-grow">
                  {history.length === 0 ? (
                      <div className="text-center py-10 text-gray-500 text-sm">
                          No recent history.
                      </div>
                  ) : (
                      history.map((item) => (
                          <button 
                              key={item.id} 
                              onClick={() => handleHistoryClick(item)}
                              className="w-full text-left p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 border border-transparent hover:border-purple-500/30 transition-all group"
                          >
                              <div className="flex justify-between items-start mb-1">
                                  <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${getStatusBadgeColor(item.finalStatusCode)}`}>
                                      {item.finalStatusCode}
                                  </span>
                                  <span className="text-[10px] text-gray-500">{new Date(item.timestamp).toLocaleTimeString()}</span>
                              </div>
                              <div className="text-sm font-mono text-gray-300 truncate w-full mb-1 group-hover:text-white">
                                  {item.inputUrl}
                              </div>
                              <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                  <span>{item.steps.length} hops</span>
                                  <span>•</span>
                                  <span>{item.totalTime}ms</span>
                              </div>
                          </button>
                      ))
                  )}
              </div>
          </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
      `}</style>
    </section>
  );
};

export default RedirectTesterTool;
