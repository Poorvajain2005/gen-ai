import React from "react";
import { Button } from "@/components/ui/button";

interface FullWidthHeroProps {
  title: string;
  subtitle: string;
  primaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function FullWidthHero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  backgroundImage,
  backgroundColor = "bg-gradient-to-r from-blue-600 to-purple-600",
  textColor = "text-white",
}: FullWidthHeroProps) {
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section
      className={`relative w-full min-h-[70vh] flex items-center justify-center ${backgroundColor} ${textColor}`}
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryAction && (
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={primaryAction.onClick}
            >
              {primaryAction.text}
            </Button>
          )}
          {secondaryAction && (
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={secondaryAction.onClick}
            >
              {secondaryAction.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
