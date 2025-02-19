"use client";

import React, { useState } from "react";

// A simple array describing total steps for the wizard
const TOTAL_STEPS = 4;

export default function WizardSection() {
  // Track the current step with React state
  const [step, setStep] = useState<number>(1);

  // Update progress fraction (0..100)
  const progress = (step / TOTAL_STEPS) * 100;

  function handleNext() {
    if (step < TOTAL_STEPS) {
      setStep(step + 1);
    } else {
      // TODO: If this is the final step, maybe trigger a 'Generate Project' action here
      console.log("Generate Project or next action!");
    }
  }

  function handlePrev() {
    if (step > 1) {
      setStep(step - 1);
    }
  }

  // Conditional rendering for each slide’s content
  function renderSlideContent() {
    switch (step) {
      case 1:
        return (
          <div className="wizard-step active" data-step="1">
            <h3 className="text-2xl font-bold text-white mb-8">
              Select Your Frontend Framework
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Next.js Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚛️</div>
                  <h4 className="text-xl font-bold text-white mb-2">Next.js</h4>
                  <p className="text-gray-400 text-sm">
                    The React Framework for Production (SSR + SSG)
                  </p>
                </div>
              </div>
              {/* React Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚛️</div>
                  <h4 className="text-xl font-bold text-white mb-2">React</h4>
                  <p className="text-gray-400 text-sm">
                    Classic single-page approach using Vite or CRA
                  </p>
                </div>
              </div>
              {/* Angular Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🅰️</div>
                  <h4 className="text-xl font-bold text-white mb-2">Angular</h4>
                  <p className="text-gray-400 text-sm">
                    A TypeScript-based framework from Google
                  </p>
                </div>
              </div>
              {/* Vue Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">💚</div>
                  <h4 className="text-xl font-bold text-white mb-2">Vue.js</h4>
                  <p className="text-gray-400 text-sm">
                    The progressive JavaScript framework
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="wizard-step active" data-step="2">
            <h3 className="text-2xl font-bold text-white mb-8">
              Select Your Database/ORM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prisma Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="text-xl font-bold text-white mb-2">Prisma</h4>
                  <p className="text-gray-400 text-sm">
                    Next-generation Node.js & TS ORM (SQL, Mongo)
                  </p>
                </div>
              </div>
              {/* Mongoose Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🍃</div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Mongoose
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Schema-based solution for MongoDB
                  </p>
                </div>
              </div>
              {/* Drizzle Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🌧️</div>
                  <h4 className="text-xl font-bold text-white mb-2">Drizzle</h4>
                  <p className="text-gray-400 text-sm">
                    TypeScript ORM for SQL DBs with maximum type safety
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="wizard-step active" data-step="3">
            <h3 className="text-2xl font-bold text-white mb-8">
              Select Authentication
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* nextauth */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔑</div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    NextAuth.js
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Flexible auth for Next.js (OAuth, Credentials)
                  </p>
                </div>
              </div>
              {/* betterauth */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔒</div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    BetterAuth
                  </h4>
                  <p className="text-gray-400 text-sm">
                    A simple token-based approach for any Node stack
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="wizard-step active" data-step="4">
            <h3 className="text-2xl font-bold text-white mb-8">
              Select Components/UI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tailwind Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    TailwindCSS
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Utility-first CSS with incredible flexibility
                  </p>
                </div>
              </div>
              {/* ShadCN Card */}
              <div className="glassmorphism p-6 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-4">💎</div>
                  <h4 className="text-xl font-bold text-white mb-2">ShadCN</h4>
                  <p className="text-gray-400 text-sm">
                    React component library built on top of Radix
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <section id="wizard" className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-cyan-400">
              Step {step} of {TOTAL_STEPS}
            </span>
            <span className="text-gray-400">
              Progress: {progress}% 
            </span>
          </div>
          <div className="h-2 bg-neutral-800 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Wizard Container */}
        <div className="wizard-container overflow-hidden relative min-h-[600px]">
          {renderSlideContent()}
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <button
              className="px-8 py-3 rounded-lg bg-neutral-800 text-gray-400 hover:bg-neutral-700 transition-colors disabled:opacity-50"
              onClick={handlePrev}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-bold hover:opacity-90 transition-colors"
              onClick={handleNext}
            >
              {step === TOTAL_STEPS ? "Generate Project" : "Next Step"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
