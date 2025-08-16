import React from "react";
import { FullWidthLayout } from "@/components/layout/FullWidthLayout";
import { FullWidthHero } from "@/components/sections/FullWidthHero";

const FullWidthLanding: React.FC = () => {
  return (
    <FullWidthLayout>
      <FullWidthHero
        title="Welcome to Our Full Width Experience"
        subtitle="Explore the edge-to-edge design that enhances your journey."
        primaryAction={{ text: "Get Started" }}
        secondaryAction={{ text: "Learn More" }}
      />
    </FullWidthLayout>
  );
};

export default FullWidthLanding;
