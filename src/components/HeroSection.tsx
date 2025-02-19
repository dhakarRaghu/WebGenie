// components/HeroSection.js
"use client"
import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="bg-neutral-900 min-h-screen relative overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-10">
        <div className="h-full w-full border-r border-cyan-400/20"></div>
        <div className="h-full w-full border-r border-cyan-400/20"></div>
        <div className="h-full w-full border-r border-cyan-400/20"></div>
        <div className="h-full w-full border-r border-cyan-400/20"></div>
        <div className="h-full w-full border-r border-cyan-400/20"></div>
        <div className="h-full w-full border-r border-cyan-400/20"></div>
        <div className="h-full w-full border-r border-cyan-400/20"></div>
        <div className="h-full w-full border-r border-cyan-400/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center space-y-8 animate__animated animate__fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            Build Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Web Stack
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Generate a custom web development starter kit in minutes. Choose your framework, database, and tools with our interactive wizard.
          </p>
          {/* Wizard Steps Indicator */}
          <div className="flex justify-center gap-4 py-8">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
          </div>
          {/* CTA Button */}
          <div className="flex justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 animate__animated animate__pulse animate__infinite">
              Start Building
            </button>
            <button className="bg-neutral-800 text-gray-300 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-neutral-700 transition-all duration-300">
              Learn More
            </button>
          </div>
          {/* Tech Stack Icons */}
          <div className="pt-16 flex justify-center gap-8 flex-wrap">
            <div className="glassmorphism p-4 rounded-lg animate__animated animate__fadeInUp">
              <span className="text-2xl text-cyan-400">Next.js</span>
            </div>
            <div className="glassmorphism p-4 rounded-lg animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
              <span className="text-2xl text-purple-400">React</span>
            </div>
            <div className="glassmorphism p-4 rounded-lg animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
              <span className="text-2xl text-blue-400">TypeScript</span>
            </div>
            <div className="glassmorphism p-4 rounded-lg animate__animated animate__fadeInUp" style={{ animationDelay: "0.6s" }}>
              <span className="text-2xl text-teal-400">Tailwind</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        .glassmorphism:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
