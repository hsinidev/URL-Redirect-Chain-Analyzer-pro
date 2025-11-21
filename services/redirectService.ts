
import { RedirectResult, UserAgentType } from '../types';

export const traceRedirects = async (url: string, userAgent: UserAgentType = 'Googlebot Smartphone'): Promise<RedirectResult> => {
  const startTime = Date.now();
  
  // Simulate variable network conditions based on User Agent
  const baseLatency = userAgent.includes('Googlebot') ? 150 : 300;
  
  // Simulate network negotiation
  await new Promise(res => setTimeout(res, baseLatency + Math.random() * 200));

  const id = Math.random().toString(36).substring(7);
  const timestamp = Date.now();

  try {
    // Basic URL validation
    if (!url || (!url.startsWith('http://') && !url.startsWith('https://'))) {
      throw new Error('Invalid URL. Please include http:// or https://');
    }
    const urlObj = new URL(url);

    // Helper to calculate total time so far
    const getDuration = () => Date.now() - startTime;

    // MOCK LOGIC:
    // Example 1: Standard Google/Youtube structure
    if (urlObj.hostname.includes('google.com') || urlObj.hostname.includes('youtube.com')) {
      const initialProtocolUrl = `http://${urlObj.hostname}${urlObj.pathname}`;
      const httpsUrl = `https://${urlObj.hostname}${urlObj.pathname}`;
      const wwwUrl = `https://www.${urlObj.hostname.replace('www.','')}${urlObj.pathname}`;

      return {
        id,
        timestamp,
        inputUrl: url,
        userAgent,
        steps: [
          { url: initialProtocolUrl, statusCode: 301, statusText: 'Moved Permanently', location: httpsUrl, latency: 120 },
          { url: httpsUrl, statusCode: 302, statusText: 'Found', location: wwwUrl, latency: 85 },
          { url: wwwUrl, statusCode: 200, statusText: 'OK', latency: 210 }
        ],
        finalUrl: wwwUrl,
        finalStatusCode: 200,
        totalTime: getDuration(),
      };
    }

    // Example 2: Loop detection
    if (urlObj.hostname.includes('loop.com')) {
      return {
        id,
        timestamp,
        inputUrl: url,
        userAgent,
        steps: [
          { url: 'https://loop.com/page-a', statusCode: 302, statusText: 'Found', location: 'https://loop.com/page-b', latency: 100 },
          { url: 'https://loop.com/page-b', statusCode: 302, statusText: 'Found', location: 'https://loop.com/page-c', latency: 110 },
          { url: 'https://loop.com/page-c', statusCode: 301, statusText: 'Moved Permanently', location: 'https://loop.com/page-a', latency: 95 },
        ],
        error: 'Redirect loop detected (ERR_TOO_MANY_REDIRECTS). Tracing stopped to prevent crash.',
        finalUrl: 'https://loop.com/page-a',
        finalStatusCode: 301,
        totalTime: getDuration(),
      };
    }

    // Example 3: 404 Not Found
     if (urlObj.hostname.includes('notfound.com') || urlObj.pathname.includes('broken-link')) {
      return {
        id,
        timestamp,
        inputUrl: url,
        userAgent,
        steps: [
          { url: url, statusCode: 404, statusText: 'Not Found', latency: 180 }
        ],
        finalUrl: url,
        finalStatusCode: 404,
        totalTime: getDuration(),
      };
    }
    
    // Example 4: 500 Server Error
    if (urlObj.hostname.includes('server-error.com')) {
      return {
        id,
        timestamp,
        inputUrl: url,
        userAgent,
        steps: [
          { url: url, statusCode: 500, statusText: 'Internal Server Error', latency: 400 }
        ],
        finalUrl: url,
        finalStatusCode: 500,
        totalTime: getDuration(),
        error: 'The remote server returned a 500 Internal Server Error.'
      };
    }

    // Default case: 200 OK
    return {
      id,
      timestamp,
      inputUrl: url,
      userAgent,
      steps: [{ url: url, statusCode: 200, statusText: 'OK', latency: 150 }],
      finalUrl: url,
      finalStatusCode: 200,
      totalTime: getDuration(),
    };

  } catch (e) {
    const endTime = Date.now();
    const error = e instanceof Error ? e.message : 'An unknown error occurred.';
    return {
      id,
      timestamp,
      inputUrl: url,
      userAgent,
      steps: [],
      finalUrl: url,
      finalStatusCode: 0,
      error: error,
      totalTime: endTime - startTime,
    };
  }
};
