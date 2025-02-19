"use client";

import Link from "next/link";
import React, { useState } from "react";

const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npx  @raghvendra_04/create-my-project")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };

  return (
    <div id="header"  className="min-h-[70vh] bg-neutral-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate__animated animate__fadeIn">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Web Development <span className="text-cyan-400">Starter Kit</span> Generator
          </h1>
          {/* Subtitle */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Generate your perfect web development stack in seconds. Choose your frameworks, tools, and features with our intuitive wizard interface.
          </p>
          <div className="mt-16"></div>
          <div className="mt-8 bg-gray-800 text-white p-4 rounded-lg flex items-center justify-between max-w-xl mx-auto border border-gray-700">
            <code className="gap-4 text-cyan-300 font-mono text-sm sm:text-base truncate">
              npx @raghvendra_04/create-my-project 
            </code>
            <button
              onClick={copyToClipboard}
              className="ml-3 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <Link href={'/docs'} >
          <button className=" mt-6 bg-cyan-400 hover:bg-cyan-500 text-neutral-900 font-bold py-3 px-8 rounded-lg transition-colors animate__animated animate__pulse animate__infinite">
            Learn More
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CopyButton;
