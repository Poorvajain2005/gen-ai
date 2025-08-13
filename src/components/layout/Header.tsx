import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/responsive-tabs";

const tabs = [
  { name: "Product", href: "/product", variant: "ghost" },
  { name: "Customers", href: "/customers", variant: "ghost" },
  { name: "API", href: "/api", variant: "ghost" },
  { name: "Resources", href: "/resources", variant: "ghost" },
  { name: "Pricing", href: "/pricing", variant: "ghost" },
  { name: "Start Free Trial", href: "/signup", variant: "ghost" }, // changed variant to ghost to remove glow
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Determine active tab
  const activeTab = tabs.findIndex((tab) =>
    location.pathname.startsWith(tab.href)
  );

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
            value={String(activeTab >= 0 ? activeTab : 0)}
            onValueChange={(value) => {
              const tab = tabs[parseInt(value, 10)];
              if (tab) {
                navigate(tab.href);
              }
            }}
            className="rounded-full px-1 py-1"
          >
            <TabsList className="rounded-full p-1 text-gray-400 bg-transparent">
              {tabs.map((tab, index) => (
                <TabsTrigger key={tab.name} value={String(index)} asChild>
                  <Button
                    variant={tab.variant || "ghost"}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                      activeTab === index
                        ? (tab.name === "Start Free Trial"
                            ? "bg-white text-black shadow-none"
                            : "bg-white text-black shadow-lg")
                        : "text-gray-700 hover:bg-gray-900 hover:text-white"
                    )}
                  >
                    {tab.name}
                  </Button>
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
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {tabs.map((tab) => (
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
              <Button variant="outline" className="w-full" asChild>
                {" "}
                {/* ✅ same style as log in */}
                <Link to="/signup">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
