import React, { useState } from 'react';
import Modal from './Modal';
import { MODAL_CONTENT } from '../constants';

type ModalType = keyof typeof MODAL_CONTENT | null;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (modal: ModalType) => setActiveModal(modal);
  const closeModal = () => setActiveModal(null);
  
  const navLinks: { label: string; modal: ModalType }[] = [
    { label: "About", modal: "about" },
    { label: "Contact", modal: "contact" },
    { label: "Guide", modal: "guide" },
    { label: "Privacy Policy", modal: "privacy" },
    { label: "Terms of Service", modal: "tos" },
    { label: "DMCA", modal: "dmca" },
  ];

  return (
    <div className="relative min-h-screen font-sans text-gray-200 bg-transparent overflow-x-hidden selection:bg-pink-500 selection:text-white flex flex-col">
      {/* Animated Galaxy Background Elements - managed via CSS in index.html */}
      <div className="galaxy-bg-container">
        <div className="nebula-layer"></div>
        <div className="stars"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div> {/* 3rd Layer for depth */}
        <div className="cosmic-overlay"></div>
      </div>
      
      {/* Header - Stays fixed/sticky relative to scroll, but separate from float animation */}
      <header className="w-full py-5 px-4 sm:px-6 border-b border-white/10 bg-black/30 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-purple-900/10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-600 to-purple-700 flex items-center justify-center shadow-lg shadow-pink-500/30 group-hover:scale-105 transition-transform duration-300">
               <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
             </div>
             <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-pink-200 tracking-tight">
               doodax.com
             </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => openModal(link.modal)}
                className="text-sm font-medium text-gray-300 hover:text-pink-400 transition-all duration-200 ease-in-out relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>
        </div>
      </header>
      
      {/* Main Content - Centralized with Floating Animation */}
      <div className="flex-grow flex flex-col items-center w-full pt-8 md:pt-12 px-4">
        <div className="w-full max-w-7xl mx-auto animate-float">
            {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-12 mt-20 border-t border-white/10 bg-black/60 backdrop-blur-lg relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center space-y-8">
              
              {/* Footer Navigation */}
              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
                  {navLinks.map(link => (
                      <button key={link.label} onClick={() => openModal(link.modal)} className="text-gray-400 hover:text-pink-400 transition-colors">
                          {link.label}
                      </button>
                  ))}
              </div>

              {/* Disclaimer */}
              <p className="text-gray-500 text-xs max-w-3xl mx-auto leading-relaxed">
                doodax.com is a free online utility provided for educational and diagnostic purposes. We do not retain user data for tracking. By using this service, you acknowledge and agree to our Terms of Service and Privacy Policy.
              </p>
              
              {/* Direct Contact Line */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-300">
                  <a href="mailto:hsini.web@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                    hsini.web@gmail.com
                  </a>
                  <span className="hidden sm:inline text-gray-600">|</span>
                  <a href="https://doodax.com" className="flex items-center gap-2 hover:text-white transition-colors">
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" /></svg>
                     doodax.com
                  </a>
              </div>

              {/* Divider */}
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-30"></div>

              {/* Branding - Powered By */}
              <div className="flex flex-col items-center gap-2">
                  <p className="text-sm text-gray-400 font-medium flex items-center gap-1.5">
                      Powered by 
                      <a 
                          href="https://github.com/hsinidev" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-bold hover:from-pink-300 hover:to-purple-300 transition-all flex items-center gap-1 hover:scale-105 transform duration-200"
                      >
                          HSINI MOHAMED
                      </a>
                  </p>
                  <p className="text-[11px] text-gray-600">
                      © {new Date().getFullYear()} doodax.com. All rights reserved.
                  </p>
              </div>
          </div>
        </div>
      </footer>

      {activeModal && (
        <Modal 
          isOpen={!!activeModal} 
          onClose={closeModal} 
          title={MODAL_CONTENT[activeModal].title}
        >
          {MODAL_CONTENT[activeModal].content}
        </Modal>
      )}
    </div>
  );
};

export default Layout;