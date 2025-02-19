// components/FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-neutral-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful <span className="text-cyan-400">Features</span>
          </h2>
          <p className="text-gray-300 text-xl">
            Everything you need to kickstart your web development project
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="glassmorphism p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="text-cyan-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Modern Framework Selection</h3>
            <p className="text-gray-300">Choose from popular frameworks like Next.js, React, Angular, and Vue.js for your project foundation.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="glassmorphism p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
            <div className="text-purple-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Database &amp; ORM Integration</h3>
            <p className="text-gray-300">Seamlessly integrate with Prisma, Mongoose, or Drizzle for robust database management.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="glassmorphism p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.4s" }}>
            <div className="text-teal-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Styling Options</h3>
            <p className="text-gray-300">Choose between TailwindCSS, ShadCN, or custom UI frameworks with live preview.</p>
          </div>
          {/* Feature Card 4 */}
          <div className="glassmorphism p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.6s" }}>
            <div className="text-blue-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Advanced Configuration</h3>
            <p className="text-gray-300">Fine-tune your project with TypeScript, ESLint, Prettier, and other development tools.</p>
          </div>
          {/* Feature Card 5 */}
          <div className="glassmorphism p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "0.8s" }}>
            <div className="text-pink-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Generation</h3>
            <p className="text-gray-300">Generate and download your project in seconds with our automated build system.</p>
          </div>
          {/* Feature Card 6 */}
          <div className="glassmorphism p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 animate__animated animate__fadeInUp" style={{ animationDelay: "1s" }}>
            <div className="text-yellow-400 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Additional Integrations</h3>
            <p className="text-gray-300">Add Stripe payments, AI chatbot, and other powerful integrations with a single click.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
