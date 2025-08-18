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
    <header className="sticky top-0 z-50 w-full bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:p-6"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <Logo size="md" />
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center">
            <Tabs
              value={String(activeTab >= 0 ? activeTab : 0)}
              onValueChange={(value) => {
                const tab = tabs[parseInt(value, 10)];
                if (tab) navigate(tab.href);
              }}
              className="rounded-full px-2 py-1"
            >
              <TabsList className="rounded-full bg-transparent p-1">
                {tabs.map((tab, index) =>
                  tab.name === "Product" ? (
                    <DropdownMenu key={tab.name}>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={cn(
                            "rounded-full px-3 py-2 text-sm font-medium transition-all duration-200",
                            location.pathname.startsWith("/blog") ||
                              location.pathname.startsWith("/resources") ||
                              location.pathname.startsWith("/webinars") ||
                              location.pathname.startsWith("/case-studies")
                              ? "bg-green-500 text-white border-2 border-green-500"
                              : "text-gray-700 hover:bg-green-500 hover:text-white border-transparent"
                          )}
                        >
                          Resources <ChevronDown className="h-4 w-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                          <Link to="/blog">Blog</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/resources">Resources</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/webinars">Webinars</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link to="/case-studies">Case Studies</Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <TabsTrigger key={tab.name} value={String(index)} asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "rounded-full px-3 py-2 text-sm font-medium transition-all duration-200",
                          activeTab === index
                            ? "bg-green-500 text-white border-2 border-green-500"
                            : "text-gray-700 hover:bg-green-500 hover:text-white border-transparent"
                        )}
                      >
                        {tab.name}
                      </Button>
                    </TabsTrigger>
                  )
                )}
              </TabsList>
            </Tabs>
          </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4"
            asChild
          >
            <Link to="/login">Log in</Link>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4"
            asChild
          >
            <Link to="/demo">Get a demo</Link>
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
                    Resources
                  </div>
                  <div className="ml-4 space-y-1">
                    <Link to="/blog" onClick={() => setMobileMenuOpen(false)}>
                      Blog
                    </Link>
                    <Link
                      to="/resources"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Resources
                    </Link>
                    <Link
                      to="/webinars"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Webinars
                    </Link>
                    <Link
                      to="/case-studies"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Case Studies
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
