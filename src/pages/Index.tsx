import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
    </Layout>
  );
};

export default Index;
