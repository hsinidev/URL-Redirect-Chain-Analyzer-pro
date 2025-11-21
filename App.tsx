
import React from 'react';
import Layout from './components/Layout';
import RedirectTesterTool from './components/RedirectTesterTool';
import SeoArticle from './components/SeoArticle';

const App: React.FC = () => {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8 md:py-16 text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          URL Redirect Chain Analyzer
        </h1>
        <p className="text-center text-lg text-gray-300 mb-10 md:mb-14 max-w-3xl mx-auto">
          Instantly trace the entire path of a URL. Our tool reveals every step, status code, and the final destination to help you debug and optimize for SEO.
        </p>
        <RedirectTesterTool />
        <div className="mt-20">
          <SeoArticle />
        </div>
      </main>
    </Layout>
  );
};

export default App;
