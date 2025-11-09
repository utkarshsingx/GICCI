'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/policy", label: "Policy Advocacy" },
  { href: "/sectors", label: "Sector Councils" },
  { href: "/events", label: "Events & Delegations" },
  { href: "/alliances", label: "Global Alliances" },
  { href: "/knowledge", label: "Knowledge" },
  { href: "/market", label: "Market Intelligence" },
  { href: "/contact", label: "Contact" },
];

export const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="border-b border-white/40 bg-white/70 shadow-glow">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-blue/20 bg-brand-linear text-base font-semibold text-white shadow-card">
              IE
            </span>
            <span className="flex flex-col gap-1">
              <span className="font-display text-xl font-semibold leading-tight text-brand-navy">
                Import–Export Community
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-brand-teal">
                FICCI · CII · ASSOCHAM ALIGNED
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-glow lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClassName(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="inline-flex items-center rounded-full border border-brand-blue/40 bg-white px-6 py-2 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10"
            >
              Trade Login
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-linear px-6 py-2 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
            >
              Join Network
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-border/70 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            Menu
            <span className="text-xs font-medium text-brand-blue/70">▼</span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="border-b border-neutral-border/60 bg-white/85 shadow-card backdrop-blur">
          <nav className="container flex flex-col gap-3 py-6 text-sm font-semibold text-brand-navy">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkClassName(
                  link.href,
                )} rounded-xl border border-transparent px-4 py-2 ${
                  isActiveLink(link.href) ? "border-brand-blue/40" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-xl border border-brand-blue/60 px-4 py-3 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue/10"
              >
                Trade Login
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center justify-center rounded-xl bg-brand-linear px-4 py-3 text-sm font-semibold text-white shadow-card transition hover:brightness-110"
              >
                Join Network
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

