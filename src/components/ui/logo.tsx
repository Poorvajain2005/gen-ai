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
    xl: "h-16 w-16",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* New Image Logo */}
      <div className={cn("relative", sizeClasses[size])}>
        <img
          src="/assets/logo-gg-handshake.jpg" // <-- updated to new logo image with .jpg extension in public/assets
          alt="Gen Goodwill.ai Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Optional Text */}
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
