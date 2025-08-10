import { Layout } from "@/components/layout/Layout";
import { UnifiedHero } from "@/components/sections/UnifiedHero";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <UnifiedHero />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </>
  );
};

export default Index;
