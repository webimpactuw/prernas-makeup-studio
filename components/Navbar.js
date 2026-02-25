"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
  { href: "/#services", label: "Pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/about") return pathname === "/about";
    if (href === "/") return pathname === "/";
    return false;
  };

  const linkClasses = (href) =>
    `text-sm font-medium transition-colors hover:text-amber-200 ${
      isActive(href) ? "text-amber-300" : ""
    }`;

  return (
    <nav aria-label="Main navigation" className="bg-gradient-to-r from-brand-purple-dark to-brand-purple text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Prerna's Makeup Studio — Home" className="flex flex-col">
            <span className="font-script text-2xl leading-tight">Paddu's</span>
            <span className="text-[8px] tracking-[0.25em] uppercase -mt-1 opacity-80">
              Glam Haven
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {mainLinks.map((link, i) => (
              <Link key={i} href={link.href} className={linkClasses(link.href)}>
                {link.label}
              </Link>
            ))}
            <span className="text-white/30">|</span>
            <Link href="/about" className={linkClasses("/about")}>
              About Us
            </Link>
          </div>

          <button
            className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 space-y-3">
          {[...mainLinks, { href: "/about", label: "About Us" }].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="block text-sm py-1.5 hover:text-amber-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
