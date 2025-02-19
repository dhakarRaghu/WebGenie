"use client"
import React from "react";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section id="cta" className="bg-neutral-800 py-20 relative overflow-hidden">
      {/* Background Grid Animation */}
      <div className="absolute inset-0 grid grid-cols-8 gap-4 opacity-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="h-full w-full border-r border-cyan-400/20"></div>
        ))}
      </div>

      {/* CTA Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glassmorphism rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              Supercharge
            </span>{" "}
            Your Development?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Generate your perfect web development stack in minutes. Start building faster with our automated project generator.
          </p>

          {/* Features List */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            {[
              { text: "Modern Stack", color: "text-cyan-400" },
              { text: "Best Practices", color: "text-purple-400" },
              { text: "Production Ready", color: "text-teal-400" },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <svg className={`w-6 h-6 ${feature.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="#header">
              <button className="px-8 py-4 bg-neutral-900 text-gray-300 font-bold rounded-lg hover:bg-neutral-700 transition-all duration-300">
                Start Generating Now
              </button>
            </Link>
            <Link href="/docs">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-400/20 transition-all duration-300">
              View Documentation
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }
      `}</style>
    </section>
  );
};

export default CtaSection;
