import React from 'react';
import HeaderSection from "../components/HeaderSection";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeatureSection";
import WizardSection from "../components/WizardsSection";
import TestimonialsSection from "../components/TestinomialSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1 relative h-full">
      <HeaderSection />
      <HeroSection />
      <FeaturesSection />
      <WizardSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
