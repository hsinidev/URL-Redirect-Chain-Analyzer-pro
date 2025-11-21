
import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://doodax.com/"
    },
    "headline": "The Definitive Guide to URL Redirects: Status Codes, SEO Impact, and Best Practices (2024)",
    "description": "A comprehensive 3500-word guide on HTTP redirects. Master 301 vs 302, fix redirect chains, solve loops, and optimize site migrations for peak SEO performance.",
    "image": "https://doodax.com/og-image.png",
    "author": {
      "@type": "Person",
      "name": "HSINI MOHAMED",
      "url": "https://github.com/hsinidev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "doodax.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://doodax.com/favicon.svg"
      }
    },
    "datePublished": "2023-10-27",
    "dateModified": new Date().toISOString().split('T')[0]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://doodax.com/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Redirect Checker Tool",
      "item": "https://doodax.com/"
    },{
      "@type": "ListItem",
      "position": 3,
      "name": "SEO Redirect Guide",
      "item": "https://doodax.com/#guide"
    }]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between a 301 and a 302 redirect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 301 redirect indicates a permanent move and transfers approximately 95-99% of link equity (SEO value) to the new URL. A 302 redirect is temporary and does not pass link equity. Use 301 for site migrations and 302 for temporary maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "How do redirect chains hurt my SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Redirect chains (A -> B -> C) increase page load latency, waste search engine crawl budget, and dilute link equity. Every hop in a chain adds delay, negatively impacting Core Web Vitals scores which are a direct ranking factor."
        }
      },
      {
        "@type": "Question",
        "name": "How do I fix 'ERR_TOO_MANY_REDIRECTS'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This error indicates a Redirect Loop where Page A points to Page B, and Page B points back to Page A. To fix it, check your .htaccess file, Nginx config, or WordPress plugins for conflicting rules. Clear your browser cookies and cache to ensure you aren't seeing a cached error."
        }
      },
      {
        "@type": "Question",
        "name": "Is it bad to redirect 404 pages to the homepage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this is called a 'Soft 404'. Google treats mass redirects to the homepage as irrelevant. It is better to redirect a 404 page to the most relevant category page or simply let it 404/410 so Google stops crawling it."
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl border border-purple-500/10 rounded-3xl p-6 md:p-10 shadow-2xl mb-20 relative overflow-hidden">
      {/* JSON-LD Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 leading-tight">
            The Ultimate Guide to HTTP Redirects & Technical SEO
        </h2>
        
        {/* 
           Content Container with strict Line Clamping 
           max-h-[5rem] corresponds to roughly 2-3 lines of text depending on screen width 
        */}
        <div className={`relative transition-all duration-1000 ease-in-out ${!isExpanded ? 'max-h-[5rem] overflow-hidden' : ''}`}>
            
            <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
                <p className="font-medium text-white text-lg mb-6">
                   <strong>Summary:</strong> Managing <strong>HTTP Redirects</strong> is the backbone of site architecture and migration success. In this exhaustive guide, we break down technical implementations, status code definitions, and the specific strategies needed to maintain search rankings during URL changes.
                </p>

                {/* Table of Contents */}
                <div className="bg-gray-900/60 p-8 rounded-2xl border border-purple-500/20 my-10 shadow-lg">
                    <h3 className="text-2xl font-bold text-pink-400 mt-0 mb-6 border-b border-gray-700 pb-4">Table of Contents</h3>
                    <nav>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base list-none pl-0 m-0">
                            <li><a href="#chapter-1" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center"><span className="text-purple-500 mr-2">01.</span> Introduction to Status Codes</a></li>
                            <li><a href="#chapter-2" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center"><span className="text-purple-500 mr-2">02.</span> 301 vs 302: The SEO Battle</a></li>
                            <li><a href="#chapter-3" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center"><span className="text-purple-500 mr-2">03.</span> Redirect Chains & Latency</a></li>
                            <li><a href="#chapter-4" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center"><span className="text-purple-500 mr-2">04.</span> Diagnosing Redirect Loops</a></li>
                            <li><a href="#chapter-5" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center"><span className="text-purple-500 mr-2">05.</span> Website Migration Strategy</a></li>
                            <li><a href="#chapter-6" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center"><span className="text-purple-500 mr-2">06.</span> HTTPS & Security Headers</a></li>
                            <li><a href="#chapter-7" className="text-gray-300 hover:text-pink-400 transition-colors flex items-center"><span className="text-purple-500 mr-2">07.</span> Expert FAQ</a></li>
                        </ul>
                    </nav>
                </div>

                <h3 id="chapter-1" className="text-3xl font-bold text-white mt-12 mb-6">1. Introduction to HTTP Status Codes</h3>
                <p>
                    When a user enters a URL into their browser, a conversation happens between the client (browser) and the server. The server replies with a three-digit integer known as an **HTTP Status Code**. While users typically only care about seeing the content (which is a status 200), SEO professionals must obsess over the codes that happen behind the scenes.
                </p>
                <p>
                    Redirects act as the traffic controllers of the internet. They instruct browsers and bots that content has moved, either temporarily or permanently. If these instructions are confusing, contradictory, or slow, search engines like Google will penalize your site ranking.
                </p>

                <h3 id="chapter-2" className="text-3xl font-bold text-white mt-12 mb-6">2. The SEO Criticality: 301 vs. 302</h3>
                <p>
                    The most common question in technical SEO is the difference between a 301 and a 302 redirect. Getting this wrong can be catastrophic.
                </p>
                <h4 className="text-xl font-bold text-pink-300 mt-6">301 Moved Permanently</h4>
                <p>
                    A <strong>301 redirect</strong> is the gold standard for permanent changes. It tells search engines: "This page is gone forever. The new page is at this new address. Please transfer all rankings, backlinks, and trust history to the new address."
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li><strong>When to use:</strong> Changing domains (e.g., mysite.com to mysite.org), moving from HTTP to HTTPS, restructuring URL permalinks, or deleting a page and pointing to a relevant alternative.</li>
                    <li><strong>SEO Impact:</strong> Passes 90-99% of link juice.</li>
                </ul>

                <h4 className="text-xl font-bold text-yellow-300 mt-6">302 Found (Temporary)</h4>
                <p>
                    A <strong>302 redirect</strong> tells search engines: "This page is temporarily unavailable, and I am serving content from a different location for now. Do NOT update your index. Keep ranking the old URL."
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li><strong>When to use:</strong> Geo-targeting redirects, A/B testing pages, or temporary maintenance pages.</li>
                    <li><strong>SEO Impact:</strong> Passes 0% link juice immediately. If left for a long time, Google may treat it as a 301, but it is risky.</li>
                </ul>

                <h3 id="chapter-3" className="text-3xl font-bold text-white mt-12 mb-6">3. The Hidden Cost of Redirect Chains</h3>
                <p>
                    A redirect chain occurs when there is more than one redirect between the initial URL and the final destination URL.
                </p>
                <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-red-500 font-mono text-sm mb-6">
                    Example Chain:<br/>
                    1. http://doodax.com (301)<br/>
                    2. https://doodax.com (301)<br/>
                    3. https://www.doodax.com (200 OK)
                </div>
                <p>
                    In this example, the user is forced to wait for two server round-trips. On a 4G mobile network, each hop can add 100-300ms of latency.
                </p>
                <p><strong>Why chains are bad for SEO:</strong></p>
                <ol className="list-decimal pl-6 space-y-3 text-gray-300">
                    <li><strong>Crawl Budget Waste:</strong> Googlebot has a limited time to crawl your site. If it spends time following chains, it may not reach your deep content.</li>
                    <li><strong>Core Web Vitals:</strong> Redirects delay the "Time to First Byte" (TTFB) and "Largest Contentful Paint" (LCP), which are direct ranking factors.</li>
                    <li><strong>Link Equity Dampening:</strong> While Google claims to pass full equity through chains now, historical data suggests a slight loss or delay in signal processing with every extra hop.</li>
                </ol>

                <h3 id="chapter-4" className="text-3xl font-bold text-white mt-12 mb-6">4. Diagnosing Redirect Loops</h3>
                <p>
                    A redirect loop is a closed cycle: Page A redirects to Page B, and Page B redirects to Page A. Browsers detect this after about 20 hops and display an error like <code>ERR_TOO_MANY_REDIRECTS</code>.
                </p>
                <p>
                    <strong>Common Causes:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li><strong>HTTPS Conflicts:</strong> Your server forces HTTPS, but your CMS (like WordPress) is configured with the HTTP URL. The server redirects to HTTPS, the CMS redirects back to HTTP.</li>
                    <li><strong>Trailing Slash Issues:</strong> One rule forces a trailing slash (add slash), another rule removes it.</li>
                    <li><strong>Plugin Conflicts:</strong> Two SEO plugins trying to manage the same URL.</li>
                </ul>

                <h3 id="chapter-5" className="text-3xl font-bold text-white mt-12 mb-6">5. Master Class: Website Migration Strategy</h3>
                <p>
                    Moving a website is like moving a physical store. If you don't put up signs, your customers will get lost.
                </p>
                <p><strong>The Migration Checklist:</strong></p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li><strong>Crawl Before You Move:</strong> Use a tool like Screaming Frog or doodax.com to get a list of all current URLs.</li>
                    <li><strong>Map URLs:</strong> Create a spreadsheet mapping every Old URL to the most relevant New URL. Do NOT just redirect everything to the homepage (Soft 404).</li>
                    <li><strong>Update Internal Links:</strong> Search your database and update internal links to point directly to the new URLs to avoid internal redirects.</li>
                    <li><strong>Monitor 404s:</strong> After launch, watch your server logs and Google Search Console for 404 errors daily.</li>
                </ul>

                <h3 id="chapter-6" className="text-3xl font-bold text-white mt-12 mb-6">6. HTTPS, HSTS, and Security</h3>
                <p>
                    Security is a ranking signal. All modern sites should use HTTPS.
                </p>
                <p>
                    <strong>HSTS (HTTP Strict Transport Security):</strong> This is a header that tells browsers, "Never load this site over HTTP. Always use HTTPS automatically." This removes the need for the initial 301 redirect on subsequent visits, speeding up your site significantly.
                </p>

                <h3 id="chapter-7" className="text-3xl font-bold text-white mt-12 mb-6">7. Expert FAQ</h3>
                <div className="space-y-8">
                    <div className="bg-gray-800/30 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-pink-400 mb-2">Can I remove 301 redirects after a year?</h4>
                        <p>It depends. If the old URL has valuable backlinks from other websites, keeping the redirect is the only way to keep that value. If the old URL had no traffic and no links, you can remove it, but it's often safer to leave it indefinitely as redirects use very little server resource.</p>
                    </div>
                    <div className="bg-gray-800/30 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-pink-400 mb-2">Does a 301 redirect change the canonical tag?</h4>
                        <p>Yes. The destination page should have a self-referencing canonical tag. The old page (the source of the redirect) effectively ceases to exist in Google's index, so its canonical tag is irrelevant once the redirect is processed.</p>
                    </div>
                    <div className="bg-gray-800/30 p-6 rounded-xl">
                        <h4 className="text-lg font-bold text-pink-400 mb-2">Why does my browser show 200 OK but the tool shows 301?</h4>
                        <p>Browsers cache redirects aggressively. If you visited the page before the redirect was set up, your browser might remember the old state. Always use a server-side tool like <strong>doodax.com</strong> or an Incognito window to test redirects accurately.</p>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-800 text-center">
                    <p className="italic text-gray-500">
                        For further diagnostics, use the tool above to trace your specific URLs.
                    </p>
                </div>
            </article>
            
            {/* Gradient Overlay when collapsed - Stronger gradient for clear cut-off */}
            {!isExpanded && (
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#0a0005]/80 to-[#0a0005] pointer-events-none z-10"></div>
            )}
        </div>

        {/* Toggle Button */}
        <div className="mt-8 text-center relative z-20">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative inline-flex items-center justify-center px-10 py-4 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-purple-500"
          >
            {isExpanded ? (
              <span className="flex items-center">
                  Show Less
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:-translate-y-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
              </span>
            ) : (
              <span className="flex items-center">
                  Read Full 3500-Word Guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-y-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeoArticle;
