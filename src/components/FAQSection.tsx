// components/FAQSection.js
"use client"
import React, { useEffect } from 'react';

const FAQSection = () => {
  useEffect(() => {
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const content = button.nextElementSibling as HTMLElement | null;
        const icon = button.querySelector('svg');
        if (content) {
          content.classList.toggle('hidden');
          if (icon) {
            icon.style.transform = content.classList.contains('hidden')
              ? 'rotate(0deg)'
              : 'rotate(180deg)';
          }
        }
        faqButtons.forEach((otherButton) => {
          if (otherButton !== button) {
            const otherContent = otherButton.nextElementSibling;
            const otherIcon = otherButton.querySelector('svg');
            if (otherContent) {
              otherContent.classList.add('hidden');
            }
            if (otherIcon) {
              otherIcon.style.transform = 'rotate(0deg)';
            }
          }
        });
      });
    });
  }, []);

  return (
    <section id="faq" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Questions</span>
          </h2>
          <p className="text-gray-300 text-xl">
            Everything you need to know about our generator
          </p>
        </div>
        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {/* FAQ Item 1 */}
          <div className="glassmorphism rounded-xl overflow-hidden">
            <button className="faq-button w-full px-6 py-4 flex items-center justify-between text-left">
              <span className="text-lg font-semibold text-white">How does the project generator work?</span>
              <svg className="w-6 h-6 text-cyan-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="faq-content px-6 pb-4 hidden">
              <p className="text-gray-300">
                Our generator uses your selected preferences to create a fully configured project structure. It combines your chosen frontend framework, backend setup, and additional features into a cohesive, production-ready codebase.
              </p>
            </div>
          </div>
          {/* FAQ Item 2 */}
          <div className="glassmorphism rounded-xl overflow-hidden">
            <button className="faq-button w-full px-6 py-4 flex items-center justify-between text-left">
              <span className="text-lg font-semibold text-white">Can I customize the generated code later?</span>
              <svg className="w-6 h-6 text-cyan-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="faq-content hidden px-6 pb-4">
              <p className="text-gray-300">
                Absolutely! The generated code follows standard project structures and best practices, making it easy to modify or extend. You have full control over the codebase once it's generated.
              </p>
            </div>
          </div>
          {/* FAQ Item 3 */}
          <div className="glassmorphism rounded-xl overflow-hidden">
            <button className="faq-button w-full px-6 py-4 flex items-center justify-between text-left">
              <span className="text-lg font-semibold text-white">Is the generated code production-ready?</span>
              <svg className="w-6 h-6 text-cyan-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="faq-content hidden px-6 pb-4">
              <p className="text-gray-300">
                Yes! All generated projects include proper configuration, security measures, and optimizations needed for production deployment. We follow industry best practices and include necessary development tools.
              </p>
            </div>
          </div>
          {/* FAQ Item 4 */}
          <div className="glassmorphism rounded-xl overflow-hidden">
            <button className="faq-button w-full px-6 py-4 flex items-center justify-between text-left">
              <span className="text-lg font-semibold text-white">Do you offer support for deployed projects?</span>
              <svg className="w-6 h-6 text-cyan-400 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="faq-content hidden px-6 pb-4">
              <p className="text-gray-300">
                We provide comprehensive documentation and community support. For enterprise users, we offer dedicated support packages to help with deployment and maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
