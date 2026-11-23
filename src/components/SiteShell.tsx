"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import MobileCallBar from "@/components/MobileCallBar";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";

export default function SiteShell({ children, awards }: { children: React.ReactNode; awards: React.ReactNode }) {
  const pathname = usePathname();
  const isLp = pathname?.startsWith("/lp");

  if (isLp) {
    return (
      <>
        <main className="flex-1 min-h-screen">{children}</main>
        <CallButton hasCallBar={false} />
        <WhatsAppButton hasCallBar={false} />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-header-h">{children}</main>
      {awards}
      {pathname !== "/contact" && <ServiceAreasSection />}
      <Footer />
      {pathname !== "/contact" && <MobileCallBar quoteHref={pathname === "/" ? "#quote" : "/contact"} />}
      <CallButton hasCallBar={pathname !== "/contact"} />
      <WhatsAppButton hasCallBar={pathname !== "/contact"} />
    </>
  );
}
