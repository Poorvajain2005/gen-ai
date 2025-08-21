import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/responsive-tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const tabs = [
  { name: "Product", href: "/product", variant: "ghost" },
  { name: "Customers", href: "/customers", variant: "ghost" },
  { name: "API", href: "/api", variant: "ghost" },
  { name: "Pricing", href: "/pricing", variant: "ghost" },
  { name: "Start Free Trial", href: "/signup", variant: "ghost" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const activeTab = tabs.findIndex((tab) =>
    location.pathname.startsWith(tab.href)
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-white border-b border-gray-200">
      <nav
        className="flex items-center p-4 lg:p-6"
        aria-label="Global"
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="p-0">
            <Logo size="lg" />
          </Link>
        </div>

        {/* Left: Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-2 lg:items-center lg:ml-12">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md hover:bg-gray-50 justify-start",
                  location.pathname.startsWith("/blog") ||
                    location.pathname.startsWith("/resources") ||
                    location.pathname.startsWith("/webinars") ||
                    location.pathname.startsWith("/newsletter")
                    ? "text-gay-600 bg-white-50"
                    : "text-gray-700 hover:text-green-600"
                )}
              >
                Resources <span className="ml-1 text-sm">▼</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[650px] p-0">
              <div className="flex p-6">
                <div className="flex-1 space-y-3">
                  <Link
                    to="/blog"
                    className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                  >
                    <div className="text-base font-medium leading-none text-gray-900">
                      📝 Blog
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Long-form written content on B2C influencer programs including original research, how-tos and more
                    </p>
                  </Link>
                  <Link
                    to="/newsletter"
                    className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                  >
                    <div className="text-base font-medium leading-none text-gray-900">
                      📧 Newsletter
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Subscribe for short, regular, thought provoking emails on influencer marketing topics. Written by Eleni Zoe
                    </p>
                  </Link>
                  <Link
                    to="/webinars"
                    className="block select-none space-y-2 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                  >
                    <div className="text-base font-medium leading-none text-gray-900">
                      🎥 Webinars
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">
                      Live & on-demand webinars with influencer marketing pros. Join the discussion and learn new strategies for your program
                    </p>
                  </Link>
                </div>
                <div className="w-48 ml-6">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=400&fit=crop&crop=center" 
                    alt="Resources" 
                    className="w-full h-full rounded-xl object-cover shadow-lg min-h-[280px]"
                  />
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/customers"
            className={cn(
              "text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md hover:bg-gray-50 text-left",
              location.pathname === "/customers"
                ? "text-green-600 bg-green-50"
                : "text-gray-700 hover:text-green-600"
            )}
          >
            Customers
          </Link>

          <Link
            to="/api"
            className={cn(
              "text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md hover:bg-gray-50 text-left",
              location.pathname === "/api"
                ? "text-green-600 bg-green-50"
                : "text-gray-700 hover:text-green-600"
            )}
          >
            API
          </Link>

          <Link
            to="/pricing"
            className={cn(
              "text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md hover:bg-gray-50 text-left",
              location.pathname === "/pricing"
                ? "text-green-600 bg-green-50"
                : "text-gray-700 hover:text-green-600"
            )}
          >
            Pricing
          </Link>
        </div>

        {/* Right: Desktop CTA Buttons */}
        <div className="hidden lg:flex lg:flex-shrink-0 lg:gap-x-4 lg:ml-auto">
          <Link
            to="/login"
            className="text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md text-green-600 bg-green-50 hover:bg-green-100"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md text-green-600 bg-green-50 hover:bg-green-100"
          >
            Start Free Trial
          </Link>
          <Link
            to="/demo"
            className="text-base font-medium transition-colors duration-200 px-4 py-3 rounded-md text-green-600 bg-green-50 hover:bg-green-100"
          >
            Schedule Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
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
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pb-6 pt-2 space-y-3">
          {tabs.map((tab) =>
            tab.name === "Product" ? (
              <div key={tab.name} className="space-y-2">
                <div className="font-semibold text-gray-400 px-2">
                  📚 Resources
                </div>
                <div className="ml-4 space-y-1">
                  <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
                    📝 Blog
                  </Link>
                  <Link
                    to="/newsletter"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    📧 Newsletter
                  </Link>
                  <Link to="/webinars" onClick={() => setMobileMenuOpen(false)}>
                    🎥 Webinars
                  </Link>
                </div>
              </div>
            ) : (
              <Link
                key={tab.name}
                to={tab.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg font-semibold"
              >
                {tab.name}
              </Link>
            )
          )}

          <div className="mt-6 space-y-3">
            <Button variant="ghost" className="w-full" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/demo">Get a demo</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link to="/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}