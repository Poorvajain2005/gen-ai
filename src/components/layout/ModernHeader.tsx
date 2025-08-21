import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Phone, Mail, Search, Users, BarChart3, CreditCard, BookOpen, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { EnhancedHoverCard, EnhancedHoverCardContent, EnhancedHoverCardTrigger } from "@/components/ui/enhanced-hover-card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/enhanced-navigation-menu";

const navigation = [
  {
    name: "Product",
    href: "/features",
    description: "Find the perfect influencers",
    icon: Search,
    features: [
      {
        name: "Influencer Discovery",
        description: "AI-powered search with 10M+ profiles",
        href: "/discovery",
      },
      {
        name: "Campaign Management",
        description: "Track and manage all your campaigns",
        href: "/campaigns",
      },
      {
        name: "Analytics & Reporting",
        description: "Real-time insights and ROI tracking",
        href: "/analytics",
      },
      {
        name: "Payment Processing",
        description: "Secure payouts in multiple currencies",
        href: "/payments",
      },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    description: "Industry-specific solutions",
    icon: Users,
    features: [
      {
        name: "E-commerce Brands",
        description: "Scale your Shopify business",
        href: "/ecommerce",
      },
      {
        name: "SaaS Companies",
        description: "B2B influencer marketing",
        href: "/saas",
      },
      {
        name: "Agencies",
        description: "Manage multiple client campaigns",
        href: "/agencies",
      },
      {
        name: "Enterprise",
        description: "Custom solutions for large teams",
        href: "/enterprise",
      },
    ],
  },
  {
    name: " Resources",
    href: "/resources",
    description: "Guides & best practices",
    icon: BookOpen,
    features: [
      {
        name: "📝 Blog",
        description:
          "Long-form written content on B2C influencer programs including original research, how-tos and more",
        href: "/blog",
      },
      {
        name: "📧 Newsletter",
        description:
          "Subscribe for short, regular, thought provoking emails on influencer marketing topics. Written by Eleni Zoe",
        href: "/newsletter",
      },
      {
        name: "🎥 Webinars",
        description:
          "Live & on-demand webinars with influencer marketing pros. Join the discussion and learn new strategies for your program",
        href: "/webinars",
      },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
    description: "Transparent pricing plans",
    icon: CreditCard,
    variant: "outline" as const,
  },
];

const ctaButtons = [
  { name: "Log in", href: "/login", variant: "outline" as const },
  { name: "Start Free Trial", href: "/signup", variant: "default" as const },
  { name: "Schedule Demo", href: "/demo", variant: "outline" as const },
  { name: "Pricing", href: "/pricing", variant: "ghost" },
];

export function ModernHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conditionally render header only on landing page(s)
  // Exclude dashboard pages and pricing page
  if (
    location.pathname !== "/" &&
    location.pathname !== "/modernlanding" &&
    !location.pathname.startsWith("/dashboard")
  ) {
    return null;
  }

  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        "bg-white",
        scrolled ? "backdrop-blur-md shadow-lg" : ""
      )}
    >
      <nav
        className="flex items-center justify-between p-4 lg:p-6"
        aria-label="Global"
      >
        <div className="flex-shrink-0">
          <Link to="/" className="p-0">
            <Logo size="lg" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-6 lg:items-center lg:ml-12">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.features ? (
                    <>
                      <NavigationMenuTrigger className="text-base font-medium px-4 py-3">
                        {item.name}
                        <span className="ml-2 text-xs transition-transform duration-300 group-data-[state=open]:rotate-180">
                          ▼
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        {item.name.includes("Resources") ? (
                          <div className="flex w-[650px] p-6">
                            <div className="flex-1 space-y-3">
                              {item.features.map((feature) => (
                                <NavigationMenuLink asChild key={feature.name}>
                                  <Link
                                    to={feature.href}
                                    className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                  >
                                    <div className="text-base font-medium leading-none text-gray-900">
                                      {feature.name}
                                    </div>
                                    <p className="text-sm leading-relaxed text-gray-600">
                                      {feature.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                            <div className="w-48 ml-6">
                              <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=400&fit=crop&crop=center"
                                alt="Resources"
                                className="w-full h-full rounded-xl object-cover shadow-lg min-h-[280px]"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {item.features.map((feature) => (
                              <NavigationMenuLink asChild key={feature.name}>
                                <Link
                                  to={feature.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                >
                                  <div className="text-sm font-medium leading-none text-gray-900">
                                    {feature.name}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                                    {feature.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        )}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className={cn(
                          "text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md hover:bg-gray-50",
                          location.pathname === item.href ||
                            (item.name === "Pricing" &&
                              location.pathname === "/pricing")
                            ? "text-green-600 bg-green-50"
                            : "text-gray-700 hover:text-green-600"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {ctaButtons.map((button) => (
            <Link
              key={button.name}
              to={button.href}
              className="text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md text-green-600 bg-green-50 hover:bg-green-100"
            >
              {button.name}
            </Link>
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
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white/95 backdrop-blur-md z-40">
          <div className="space-y-1 px-6 pb-6 pt-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-green-50 text-green-600"
                    : "text-gray-700 hover:bg-gray-50"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-gray-600">{item.description}</div>
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
                  <Link
                    to={button.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {button.name}
                  </Link>
                </Button>
              ))}
            </div>
            <div className="pt-6 border-t border-gray-200">
              <div className="flex flex-col space-y-2 text-sm text-gray-600">
                <a
                  href="tel:+910000000000"
                  className="flex items-center space-x-2 hover:text-green-600 py-2"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 78697 12770</span>
                </a>
                <a
                  href="mailto:contact@gen-goodwill.ai"
                  className="flex items-center space-x-2 hover:text-green-600 py-2"
                >
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
