'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-float" style={{ top: '10%', left: '10%', animationDelay: '0s' }} />
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-float" style={{ top: '60%', right: '10%', animationDelay: '2s' }} />
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full opacity-10 blur-3xl animate-float" style={{ bottom: '10%', left: '50%', animationDelay: '4s' }} />
      </div>

      <div className={`relative z-10 container mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="text-8xl font-bold text-white animate-pulse-slow">S10</div>
            <div className="absolute -inset-4 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-blue-400 rounded-full animate-spin-slow opacity-30" />
            </div>
            <div className="absolute -inset-8 flex items-center justify-center">
              <div className="w-40 h-40 border-4 border-purple-400 rounded-full animate-spin-reverse opacity-20" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transform Your Digital Presence<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            with AI-Powered Creativity
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
          From stunning designs to smart automation — S10 Digital Solutions helps you grow, impress, and save time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            See Our Work
          </button>
        </div>

        {/* Floating Service Icons */}
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
          {['🎨', '📱', '📄', '🤖', '💻'].map((icon, index) => (
            <div
              key={index}
              className="text-4xl animate-float"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
