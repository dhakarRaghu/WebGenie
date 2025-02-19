import React from 'react';
import HeaderSection from "../components/HeaderSection";
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
      <WizardSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
