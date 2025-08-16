import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
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
    features: [
      { name: "Influencer Discovery", description: "AI-powered search with 10M+ profiles", href: "/discovery", color: "sage-600" },
      { name: "Campaign Management", description: "Track and manage all your campaigns", href: "/campaigns", color: "amber-600" },
      { name: "Analytics & Reporting", description: "Real-time insights and ROI tracking", href: "/analytics", color: "teal-600" },
      { name: "Payment Processing", description: "Secure payouts in multiple currencies", href: "/payments", color: "emerald-600" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    features: [
      { name: "E-commerce Brands", description: "Scale your Shopify business", href: "/ecommerce" },
      { name: "SaaS Companies", description: "B2B influencer marketing", href: "/saas" },
      { name: "Agencies", description: "Manage multiple client campaigns", href: "/agencies" },
      { name: "Enterprise", description: "Custom solutions for large teams", href: "/enterprise" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    features: [
      { name: "Blog", description: "Latest insights and strategies", href: "/blog" },
      { name: "Case Studies", description: "Success stories from top brands", href: "/case-studies" },
      { name: "Webinars", description: "Live sessions with experts", href: "/webinars" },
      { name: "Help Center", description: "Documentation and support", href: "/help" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
];

export function ModernHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <header className={cn("fixed top-0 z-50 w-full bg-white", scrolled && "shadow-sm")}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo size="md" />
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-8">
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.features ? (
                    <>
                      <NavigationMenuTrigger className="h-auto p-0 text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[500px] p-6">
                          <div className="grid grid-cols-2 gap-4">
                            {item.features.map((feature) => (
                              <NavigationMenuLink asChild key={feature.name}>
                                <Link
                                  to={feature.href}
                                  className="block space-y-1 rounded-lg p-3 hover:bg-slate-50 border-l-4 border-transparent hover:border-slate-300"
                                >
                                  <div className="text-sm font-medium text-slate-800">{feature.name}</div>
                                  <p className="text-sm text-slate-600">{feature.description}</p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        to={item.href}
                        className="text-sm font-medium text-gray-700 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild className="bg-green-600 hover:bg-green-700">
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="space-y-1 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Log in</Link>
              </Button>
              <Button size="sm" className="w-full bg-green-600 hover:bg-green-700" asChild>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}