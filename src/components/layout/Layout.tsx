import React from "react";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-background">{children}</main>
      <Footer />
    </>
  );
}
