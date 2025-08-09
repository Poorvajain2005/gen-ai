import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Discover", href: "/features", description: "Find the perfect influencers" },
  { name: "Campaigns", href: "/dashboard", description: "Manage your campaigns" },
  { name: "Influencers", href: "/influencers", description: "Browse 10M+ profiles" },
  { name: "Payments", href: "/payments", description: "Secure payouts & tracking" },
  { name: "Resources", href: "/resources", description: "Guides & best practices" },
  { name: "Customers", href: "/customers", description: "Success stories" },
];

const ctaButtons = [
  { name: "Start Free Trial", href: "/signup", variant: "hero" as const },
  { name: "Schedule Demo", href: "/demo", variant: "outline" as const },
];

export function ModernHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Gen Goodwill.ai
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  location.pathname === item.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                {item.name}
              </Link>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>
        
        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          {ctaButtons.map((button) => (
            <Button
              key={button.name}
              variant={button.variant}
              size="sm"
              asChild
              className={cn(
                button.variant === "hero" && "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                "transition-all duration-200"
              )}
            >
              <Link to={button.href}>{button.name}</Link>
            </Button>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md">
          <div className="space-y-1 px-6 pb-6 pt-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </Link>
            ))}
            <div className="pt-6 space-y-3">
              {ctaButtons.map((button) => (
                <Button
                  key={button.name}
                  variant={button.variant}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to={button.href} onClick={() => setMobileMenuOpen(false)}>
                    {button.name}
                  </Link>
                </Button>
              ))}
            </div>
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <a href="tel:+917869712770" className="flex items-center space-x-2 hover:text-blue-600">
                  <Phone className="h-4 w-4" />
                  <span>+91 78697 12770</span>
                </a>
                <a href="mailto:contact@gen-goodwill.ai" className="flex items-center space-x-2 hover:text-blue-600">
                  <Mail className="h-4 w-4" />
                  <span>contact@gen-goodwill.ai</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
