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
  { name: "Start Free Trial", href: "/signup", variant: "ghost" },
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
    <header className="sticky top-0 z-50 w-full border-b border-green-800 bg-green-900 backdrop-blur supports-[backdrop-filter]:bg-green-900/90">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-center gap-x-12 p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-white">
              Gen Goodwill.ai
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-green-800"
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
            <TabsList className="rounded-full p-1 text-gray-300 bg-transparent">
              {tabs.map((tab, index) => (
                <TabsTrigger key={tab.name} value={String(index)} asChild>
                  <Button
                    variant={tab.variant || "ghost"}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                      activeTab === index
                        ? "bg-green-700 text-white shadow-lg"
                        : "text-gray-200 hover:bg-green-800 hover:text-white"
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
          <Button
            variant="ghost"
            className="text-white hover:bg-green-800"
            asChild
          >
            <Link to="/login">Log in</Link>
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-green-800"
            asChild
          >
            <Link to="/signup">Start Free Trial</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-green-800"
            asChild
          >
            <Link to="/demo">Get a demo</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-green-900">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors",
                  location.pathname.startsWith(tab.href)
                    ? "bg-green-700 text-white"
                    : "text-gray-200 hover:bg-green-800 hover:text-white"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {tab.name}
              </Link>
            ))}
            <div className="mt-6 space-y-3">
              <Button
                variant="ghost"
                className="w-full text-white hover:bg-green-800"
                asChild
              >
                <Link to="/login">Log in</Link>
              </Button>
              <Button
                variant="ghost"
                className="w-full text-white hover:bg-green-800"
                asChild
              >
                <Link to="/signup">Start Free Trial</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-green-800"
                asChild
              >
                <Link to="/demo">Get a demo</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
