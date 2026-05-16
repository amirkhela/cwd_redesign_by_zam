"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SiteShell({ children, awards }: { children: React.ReactNode; awards: React.ReactNode }) {
  const pathname = usePathname();
  const isLp = pathname?.startsWith("/lp");

  if (isLp) {
    return <main className="flex-1 min-h-screen">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-header-h">{children}</main>
      {awards}
      <Footer />
    </>
  );
}
