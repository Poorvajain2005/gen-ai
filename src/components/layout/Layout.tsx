import { ReactNode } from "react";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
