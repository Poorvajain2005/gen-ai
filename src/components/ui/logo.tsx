import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10", 
    lg: "h-12 w-12",
    xl: "h-16 w-16"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl", 
    xl: "text-3xl"
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Modular Squares Logo SVG */}
      <div className={cn("relative", sizeClasses[size])}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          
          {/* Top-Left Square */}
          <rect x="10" y="10" width="35" height="35" rx="8" fill="url(#logoGradient)" />
          {/* Three dots */}
          <circle cx="20" cy="20" r="2" fill="white" />
          <circle cx="25" cy="20" r="2" fill="white" />
          <circle cx="30" cy="20" r="2" fill="white" />
          
          {/* Top-Right Square */}
          <rect x="55" y="10" width="35" height="35" rx="8" fill="url(#logoGradient)" />
          {/* Three dots */}
          <circle cx="65" cy="20" r="2" fill="white" />
          <circle cx="70" cy="20" r="2" fill="white" />
          <circle cx="75" cy="20" r="2" fill="white" />
          
          {/* Bottom-Left Square */}
          <rect x="10" y="55" width="35" height="35" rx="8" fill="url(#logoGradient)" />
          
          {/* Bottom-Right Square */}
          <rect x="55" y="55" width="35" height="35" rx="8" fill="url(#logoGradient)" />
          {/* Curved white line */}
          <path
            d="M75 75 Q85 65 80 55"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Connecting line between top squares */}
          <path
            d="M45 25 Q50 20 55 25"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <div className={cn("font-bold", textSizes[size])}>
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Gen Goodwill.ai
          </span>
        </div>
      )}
    </div>
  );
} 