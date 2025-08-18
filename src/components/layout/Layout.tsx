import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

import { ModernHeader } from "./ModernHeader"; // Import the ModernHeader

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const excludedPages = [
    "/discovery", "/api", "/customers", "/campaigns", "/analytics", "/payments",
    "/blog", "/help", "/ecommerce", "/agencies", "/saas", "/brands",
    "/resources", "/case-studies", "/enterprise", "/webinars", "/careers",
    "/our-data", "/book-call", "/academy", "/updates", "/support",
    "/helpdesk", "/ask-question", "/newsletter", "/management", "/inbox",
    "/shopify-integration", "/login", "/signup", "/demo"
  ];
  const isExcludedPage = excludedPages.includes(location.pathname);

  return (
    <>
      <main className={cn("min-h-screen bg-background", !isDashboard && !isExcludedPage && "pt-16")}>{children}</main>
      <Footer />
    </>
  );
}
