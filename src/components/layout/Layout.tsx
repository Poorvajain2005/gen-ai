import React from "react";
import { Footer } from "./Footer";

import { ModernHeader } from "./ModernHeader"; // Import the ModernHeader

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
    </>
  );
}
