import { useLocation } from "react-router-dom";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApiSection } from "@/components/sections/ApiSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection"; 
import FaqSection from "@/components/sections/FaqSection";
const Index = () => {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      {location.pathname === "/api" ? (
        <ApiSection />
      ) : (
        <>
          <StatsSection />
          <FeaturesSection />
          <TestimonialsSection />
          {/* <PricingSection /> */}
          <FaqSection />
          <ContactSection />
        </>
      )}
    </div>
  );
};

export default Index;
