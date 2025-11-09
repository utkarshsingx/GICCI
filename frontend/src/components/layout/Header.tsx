'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/policy", label: "Policy" },
  { href: "/sectors", label: "Sectors" },
  { href: "/events", label: "Events" },
  { href: "/alliances", label: "Alliances" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/market", label: "Reports" },
  { href: "/contact", label: "Contact" },
];

const utilityLinks = [
  { href: "/contact", label: "Helpdesk" },
  { href: "/policy", label: "Policy Cell" },
  { href: "/join", label: "Prime Membership" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const linkClassName = (href: string) => {
    const base =
      "relative inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200";
    if (isActiveLink(href)) {
      return `${base} bg-brand-blue text-white shadow-card`;
    }
    return `${base} text-brand-navy hover:text-brand-blue hover:bg-brand-blue/10`;
  };

  const closeMenu = () => setIsMenuOpen(false);

  const overlayClass = isMenuOpen
    ? "pointer-events-auto translate-y-0 opacity-100"
    : "pointer-events-none -translate-y-4 opacity-0";

  return (
    <header className="sticky top-0 z-50">
      {/* Utility ribbon */}
      <div className="hidden border-b border-white/40 bg-white/80 shadow-glow md:block">
        <div className="container flex items-center justify-between py-2 text-xs font-semibold">
          <div className="flex items-center gap-2 text-brand-teal">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-gold" />
            <span className="uppercase tracking-[0.3em]">
              Government of India · RAMP Initiative
            </span>
          </div>
          <div className="flex items-center gap-4 text-brand-blue">
            {utilityLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brand-gold">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-white/40 bg-white/90 shadow-glow backdrop-blur-xl">
        <div className="container flex flex-wrap items-center justify-between gap-3 py-3 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:py-4">
          <Link
            href="/"
            className="flex items-center gap-3 pr-2 md:gap-4 md:pr-4"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-linear text-base font-semibold text-white shadow-card md:h-11 md:w-11 md:text-sm">
              IE
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="font-display text-base font-semibold leading-tight text-brand-navy md:text-base">
                <span className="block whitespace-nowrap md:inline">Import–Export</span>
                <span className="hidden md:inline"> </span>
                <span className="block whitespace-nowrap md:inline">Community</span>
              </span>
              <span className="text-[8px] font-medium uppercase tracking-[0.28em] text-brand-teal md:text-[9px]">
                FICCI · CII · ASSOCHAM Aligned
              </span>
            </span>
          </Link>

          <nav className="hidden w-full max-w-3xl items-center justify-center gap-1 rounded-full border border-white/70 bg-white/95 px-3 py-2 shadow-glow md:mx-auto md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClassName(link.href)}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center justify-end gap-2 rounded-full border border-white/70 bg-white/90 px-2 py-1 pl-4 shadow-glow md:flex">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl border border-brand-blue/40 bg-white px-4 py-2 text-sm font-semibold text-brand-blue shadow-glow transition hover:border-brand-blue hover:bg-brand-blue/10"
            >
              <span className="h-2 w-2 rounded-full bg-brand-blue" />
              Trade Login
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-linear px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
            >
              <span className="h-2 w-2 rounded-full bg-brand-gold" />
              Join Network
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-3 rounded-full border border-brand-blue/30 bg-white px-3 py-2 text-sm font-semibold text-brand-navy shadow-glow transition hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-blue/30 bg-white/70">
              <span className="relative flex h-3 w-4 flex-col justify-between">
                <span
                  className={`h-[2px] w-full rounded-full bg-brand-blue transition-transform ${
                    isMenuOpen ? "translate-y-[4px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-brand-blue transition-opacity ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-brand-blue transition-transform ${
                    isMenuOpen ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.3em]">Menu</span>
          </button>
        </div>

        {isMenuOpen ? (
          <div
            className={`fixed inset-0 z-[9999] bg-brand-navy/95 backdrop-blur-md transition-all duration-300 ease-out lg:hidden ${overlayClass}`}
          >
            <div
              className={`flex h-full flex-col overflow-y-auto pt-20 pb-10 transition-transform duration-300 ease-out ${
                isMenuOpen ? "translate-y-0" : "translate-y-6"
              }`}
            >
              <div className="flex items-center justify-between px-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold">
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white hover:border-white hover:bg-white/10"
                >
                  Close
                </button>
              </div>
              <nav className="mt-6 flex flex-col gap-4 px-6 text-white">
                <div className="grid gap-2 text-xs uppercase tracking-[0.3em] text-brand-gold">
                  {utilityLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className="rounded-full border border-white/30 px-4 py-2 text-center font-semibold hover:border-white hover:bg-white/10"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="my-4 h-px bg-white/30" />
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`w-full rounded-2xl border border-white/20 px-5 py-3 text-lg font-semibold tracking-wide ${
                      isActiveLink(link.href) ? "bg-white text-brand-navy" : "bg-white/10"
                    } transition hover:border-white hover:bg-white/20`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mb-10 mt-6 flex flex-col gap-3 px-6">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                  Trade Login
                </Link>
                <Link
                  href="/join"
                  onClick={closeMenu}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-navy shadow-card transition hover:bg-white"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-navy" />
                  Join Network
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

