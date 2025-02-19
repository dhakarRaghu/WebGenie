
import React from 'react';
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";


export default function HomePage() {
  return (
    <main id="main-content" className="flex-1 relative h-full">
      <HeaderSection />
      <HeroSection />
    
    </main>
  );
}
