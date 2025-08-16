import React from "react";
import { Footer } from "./Footer";

export function FullWidthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-screen bg-background w-full">{children}</main>
      <Footer />
    </>
  );
}
