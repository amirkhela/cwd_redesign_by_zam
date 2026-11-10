"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getConfig, type ClientNavItem } from "@/lib/client-config";
import LanguageToggle from "./LanguageToggle";
import { megaMenu, type MegaPanel } from "@/lib/mega-menu";

const config = getConfig();

const MEGA_BG = "#0c1d29";
const MEGA_HEADING = "#33C2E8";

function MegaIcon({ name }: { name: MegaPanel["promo"]["icon"] }) {
  const common = {
    className: "w-[90px] h-auto",
    viewBox: "0 0 120 90",
    fill: "none",
    stroke: MEGA_HEADING,
    strokeWidth: 2.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "star") {
    return (
      <svg {...common}>
        <path d="M60 8l8 16 18 3-13 12 3 18-16-8-16 8 3-18-13-12 18-3z" />
        <path d="M30 70h60M40 82h40" />
      </svg>
    );
  }
  if (name === "tag") {
    return (
      <svg {...common}>
        <path d="M20 20h40l40 40-30 22-50-42z" />
        <circle cx="36" cy="34" r="6" />
        <path d="M60 50l14 14M52 58l14 14" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="10" y="10" width="100" height="64" rx="6" />
      <path d="M10 24h100" />
      <circle cx="20" cy="17" r="1.5" />
      <circle cx="27" cy="17" r="1.5" />
      <circle cx="34" cy="17" r="1.5" />
      <path d="M24 36h40M24 46h28M24 56h34" />
      <path d="M78 40l14 30 5-11 11-5z" fill={MEGA_BG} />
    </svg>
  );
}

function MegaDropdown({ item, panel }: { item: ClientNavItem; panel: MegaPanel }) {
  // Hide right after a link click so the panel doesn't stay open over the
  // next page while the cursor is still on it; hover re-arms it.
  const [hidden, setHidden] = useState(false);
  const wide = panel.size === "wide";
  return (
    <div className="group flex items-center h-full" onMouseLeave={() => setHidden(false)}>
      <Link
        href={item.href}
        className="flex items-center gap-1 text-sm font-semibold text-dark hover:text-primary group-hover:text-primary transition-colors duration-200 relative py-1"
      >
        {item.label}
        <svg
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
      </Link>
      <div className={`absolute left-0 right-0 top-full pt-1.5 px-4 lg:px-8 z-50 hidden ${hidden ? "" : "group-hover:block"}`}>
        <div
          className={`mx-auto grid overflow-hidden rounded-2xl ${wide ? "max-w-[1248px] grid-cols-[minmax(0,1fr)_250px]" : "max-w-[820px] grid-cols-[minmax(0,1fr)_280px]"}`}
          style={{ background: MEGA_BG, boxShadow: "0 30px 60px rgba(8,25,38,0.35)" }}
        >
          <div className={`grid gap-7 px-8 pt-7 pb-8 ${wide ? "grid-cols-4" : "grid-cols-2"}`}>
            {panel.columns.map((col) => (
              <div key={col.heading} className="min-w-0">
                <p className="mb-2.5 text-[17px] font-extrabold tracking-tight" style={{ color: MEGA_HEADING }}>
                  {col.href ? (
                    <Link href={col.href} onClick={() => setHidden(true)} className="hover:underline underline-offset-4">
                      {col.heading}
                    </Link>
                  ) : (
                    col.heading
                  )}
                </p>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href + l.label} className="border-b border-white/10 last:border-0">
                      <Link
                        href={l.href}
                        onClick={() => setHidden(true)}
                        className={`block py-2 text-sm transition-all duration-150 hover:pl-1.5 hover:text-white ${l.all ? "font-semibold" : ""}`}
                        style={{ color: l.all ? MEGA_HEADING : "#dbe9f0" }}
                      >
                        {l.label}
                        {l.all ? " →" : ""}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col items-center justify-center gap-3.5 border-l border-white/10 px-7 py-7 text-center"
            style={{ background: `linear-gradient(160deg, #12293a, ${MEGA_BG})` }}
          >
            <MegaIcon name={panel.promo.icon} />
            <p className="text-[17px] font-extrabold leading-tight text-white text-balance">{panel.promo.text}</p>
            <Link
              href={panel.promo.cta.href}
              onClick={() => setHidden(true)}
              className="inline-flex items-center gap-1.5 rounded-btn px-3.5 py-[7px] text-[12.5px] font-semibold text-white transition-colors duration-200 bg-primary hover:bg-primary-dark"
            >
              {panel.promo.cta.label}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function DesktopDropdown({ item }: { item: ClientNavItem }) {
  const [openSub, setOpenSub] = useState<string | null>(null);
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-sm font-semibold text-dark hover:text-primary transition-colors duration-200 relative py-1"
      >
        {item.label}
        <svg
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
        {/* Underline animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
      </Link>
      <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
        <div
          className="bg-white rounded-2xl py-2 min-w-[260px] border border-gray-100"
          style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
        >
          {item.children!.map((child) =>
            child.children ? (
              <div
                key={child.href}
                onMouseEnter={() => setOpenSub(child.href)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <Link
                  href={child.href}
                  className="flex items-center justify-between gap-3 w-full px-5 py-2.5 text-sm text-dark hover:bg-primary-50 hover:text-primary transition-all duration-150 font-medium whitespace-nowrap"
                >
                  {child.label}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${openSub === child.href ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className={openSub === child.href ? "block" : "hidden"}>
                  {child.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="flex items-center gap-2 pl-9 pr-5 py-2 text-[13px] text-dark-light hover:bg-primary-50 hover:text-primary transition-all duration-150 font-medium whitespace-nowrap"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={child.href}
                href={child.href}
                className="block px-5 py-2.5 text-sm text-dark hover:bg-primary-50 hover:text-primary transition-all duration-150 font-medium whitespace-nowrap"
              >
                {child.label}
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [expandedSub, setExpandedSub] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <nav
        className="fixed top-header-h left-0 right-0 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
        style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
      >
        <div className="py-2">
          {config.navigation.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-6 py-3.5 text-base font-semibold text-dark border-b border-gray-100 hover:bg-primary-50 transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${expandedItem === item.label ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedItem === item.label && megaMenu[item.label] && (
                    <div className="bg-primary-50/60 px-4 py-3">
                      <div className="rounded-xl px-5 py-2" style={{ background: MEGA_BG }}>
                        {megaMenu[item.label].columns.map((col) => (
                          <div key={col.heading}>
                            <p className="mt-3 mb-1 text-sm font-bold" style={{ color: MEGA_HEADING }}>
                              {col.heading}
                            </p>
                            {col.links.map((l) => (
                              <Link
                                key={l.href + l.label}
                                href={l.href}
                                onClick={onClose}
                                className={`block py-2.5 text-sm border-b border-white/10 last:border-0 ${l.all ? "font-semibold" : ""}`}
                                style={{ color: l.all ? MEGA_HEADING : "#dbe9f0" }}
                              >
                                {l.label}
                                {l.all ? " →" : ""}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {expandedItem === item.label && !megaMenu[item.label] && (
                    <div className="bg-primary-50/60">
                      {item.children.map((child) =>
                        child.children ? (
                          <div key={child.href}>
                            <button
                              onClick={() => setExpandedSub(expandedSub === child.href ? null : child.href)}
                              className="flex items-center justify-between w-full px-10 py-2.5 text-sm font-medium text-dark-light hover:text-primary transition-colors"
                            >
                              {child.label}
                              <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedSub === child.href ? "rotate-180" : ""}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                            <div className={expandedSub === child.href ? "block" : "hidden"}>
                              <Link
                                href={child.href}
                                onClick={onClose}
                                className="flex items-center gap-2 pl-14 pr-10 py-2 text-[13px] font-medium text-dark-light hover:text-primary transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                                All {child.label}
                              </Link>
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={onClose}
                                  className="flex items-center gap-2 pl-14 pr-10 py-2 text-[13px] font-medium text-dark-light hover:text-primary transition-colors"
                                >
                                  <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className="block px-10 py-2.5 text-sm font-medium text-dark-light hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-6 py-3.5 text-base font-semibold text-dark border-b border-gray-100 hover:bg-primary-50 transition-colors"
                >
                  {item.href === "/contact" ? "Contact" : item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-6 py-4 space-y-3">
            <a
              href={`tel:${config.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-dark"
            >
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {config.phone}
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="btn-shimmer block w-full text-center px-6 py-3.5 text-white font-bold rounded-btn transition-all duration-200 min-h-[44px]"
              style={{ background: "#00AADF", boxShadow: "0 4px 16px rgba(0,170,223,0.4)" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-40 h-header-h transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(255,255,255,0.96)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 2px 20px rgba(0,0,0,0.08)" }
          : { background: "#ffffff", boxShadow: "0 1px 0 rgba(0,0,0,0.06)" }
      }
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between h-full">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/logos/logo.png"
            alt={config.businessName}
            style={{ height: "36px", width: "auto" }}
            width={150}
            height={36}
            priority
            className="transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 self-stretch" aria-label="Main navigation">
          {config.navigation.map((item) =>
            item.children && megaMenu[item.label] ? (
              <MegaDropdown key={item.href} item={item} panel={megaMenu[item.label]} />
            ) : item.children ? (
              <DesktopDropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-dark hover:text-primary transition-colors duration-200 py-1 group"
              >
                {item.href === "/contact" ? "Contact" : item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${config.phone}`}
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-dark hover:text-primary transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {config.phone}
          </a>
          <LanguageToggle />
          <Link
            href="/contact"
            className="btn-shimmer hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-white font-bold rounded-btn text-sm transition-all duration-200 min-h-[44px]"
            style={{ background: "#00AADF", boxShadow: "0 4px 16px rgba(0,170,223,0.35)" }}
          >
            Get In Touch
          </Link>
          <button
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-dark hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
