import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "Gen Goodwill.ai", href: "/" },
  { name: "Customers", href: "/customers" },
  { name: "API", href: "/api" },
  { name: "Log in", href: "/login" },
  { name: "Get a demo", href: "/demo" },
  { name: "Try for Free", href: "/signup" },
];

export function LandingTabs() {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(() => {
    const idx = tabs.findIndex(tab => location.pathname.startsWith(tab.href));
    return idx >= 0 ? idx : 0;
  });

  return (
    <nav className="flex justify-center rounded-full p-1 max-w-full overflow-x-auto no-scrollbar">
      {tabs.map((tab, index) => {
        const isActive = index === activeIndex;
        return (
          <Link
            key={tab.name}
            to={tab.href}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200",
              isActive
                ? "bg-white text-black shadow-sm"
                : "text-gray-500 hover:bg-gray-900 hover:text-white"
            )}
          >
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
}
