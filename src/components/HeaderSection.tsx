"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CopyButton from "./copied";

const HeaderSection = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="header" className="relative">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center  gap-80 py-4">
            <a href="/" className="text-cyan-400 font-bold text-2xl flex-shrink-0">
              WebGen
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("header")}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => router.push("/docs")}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Docs
              </button>
              <button
                onClick={() => scrollToSection("wizard")}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("footer")}
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-2"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-neutral-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </button>
              <button
                onClick={() => router.push("/docs")}
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
              >
                Docs
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
      <CopyButton></CopyButton>
    </section>
  );
};

export default HeaderSection;
