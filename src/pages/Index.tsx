import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApiSection } from "@/components/sections/ApiSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
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
          <ContactSection />
        </>
      )}
    </div>
  );
};

export default Index;
