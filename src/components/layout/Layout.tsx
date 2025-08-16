import React from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      <main className={cn("min-h-screen bg-background", !isDashboard && "pt-16")}>{children}</main>
      <Footer />
    </>
  );
}
