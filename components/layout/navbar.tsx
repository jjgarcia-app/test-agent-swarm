"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Producto",    href: "#features"     },
  { label: "Demo",        href: "#demo"          },
  { label: "Casos de uso",href: "#use-cases"     },
  { label: "Precios",     href: "#pricing"       },
];

export function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "glass-strong border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              "bg-brand-600 shadow-glow group-hover:shadow-glow-lg transition-all duration-300"
            )}>
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-white">
              Agent<span className="text-gradient">Swarm</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Ingresar
            </a>
            <a
              href="#"
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-semibold",
                "bg-brand-600 text-white shadow-glow",
                "hover:bg-brand-500 hover:shadow-glow-lg transition-all duration-300"
              )}
            >
              Empieza gratis
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden rounded-lg p-2 text-white/60 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-4 right-4 z-40 glass-strong rounded-2xl border border-white/10 p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
              <a href="#" className="block text-center rounded-lg px-4 py-2.5 text-sm text-white/60 hover:text-white transition-colors">
                Ingresar
              </a>
              <a href="#" className="block text-center rounded-lg px-4 py-2.5 text-sm font-semibold bg-brand-600 text-white">
                Empieza gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}