import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
