"use client";

import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed w-full z-50 bg-neutral-900/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-cyan-400 font-bold text-2xl">
          WebGen
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Features
          </Link>
          <Link href="/docs" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Docs
          </Link>
          <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="p-2 text-gray-300 hover:text-cyan-400 transition-colors" aria-label="Toggle theme">
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Mobile menu button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none p-2" aria-label="Open menu">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-sm px-4 py-3 space-y-2">
          <Link href="#" className="block text-gray-300 hover:text-cyan-400">Home</Link>
          <Link href="#" className="block text-gray-300 hover:text-cyan-400">Features</Link>
          <Link href="#" className="block text-gray-300 hover:text-cyan-400">About</Link>
          <Link href="#" className="block text-gray-300 hover:text-cyan-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="min-h-[70vh] bg-neutral-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Web Development <span className="text-cyan-400">Starter Kit</span> Generator
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Generate your perfect web development stack in seconds. Choose your frameworks, tools, and features with our intuitive wizard interface.
        </p>
        <button className="bg-cyan-400 hover:bg-cyan-500 text-neutral-900 font-bold py-3 px-8 rounded-lg transition-colors animate-pulse">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
