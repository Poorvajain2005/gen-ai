import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/responsive-tabs";

const tabs = [
  { name: "Product", href: "/product" },
  { name: "Customers", href: "/customers" },
  { name: "API", href: "/api" },
  { name: "Resources", href: "/resources" },
  { name: "Pricing", href: "/pricing" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine the active tab based on current path
  const activeTab = tabs.findIndex((tab) =>
    location.pathname.startsWith(tab.href)
  );

  const [tabValue, setTabValue] = useState(
    activeTab >= 0 ? String(activeTab) : "0"
  );

  useEffect(() => {
    const newActiveTab = tabs.findIndex((tab) =>
      location.pathname.startsWith(tab.href)
    );
    setTabValue(newActiveTab >= 0 ? String(newActiveTab) : "0");
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-center gap-x-12 p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Gen Goodwill.ai
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Centered Desktop navigation */}
        <div className="hidden lg:flex items-center">
          <Tabs
            value={tabValue}
            onValueChange={(value) => {
              setTabValue(value);
              const tab = tabs[parseInt(value, 10)];
              if (tab) {
                navigate(tab.href);
              }
            }}
            className="rounded-full px-1 py-1"
          >
            <TabsList className="rounded-full p-1 text-gray-400 bg-transparent">
              {tabs.map((tab, index) => (
                <TabsTrigger
                  key={tab.name}
                  value={String(index)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                    tabValue === String(index)
                      ? "bg-white text-black shadow-lg"
                      : "text-gray-700 hover:bg-gray-900 hover:text-white"
                  )}
                  asChild
                >
                  <button type="button">{tab.name}</button>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Desktop CTA buttons */}
        <div className="hidden lg:flex items-center lg:gap-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Log in</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/demo">Get a demo</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/signup">Try for Free</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {tabs.map((tab, index) => (
              <Link
                key={tab.name}
                to={tab.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors",
                  location.pathname.startsWith(tab.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {tab.name}
              </Link>
            ))}
            <div className="mt-6 space-y-3">
              <Button variant="ghost" className="w-full" asChild>
                <Link to="/login">Log in</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/demo">Get a demo</Link>
              </Button>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/signup">Try for Free</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
