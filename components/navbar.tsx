"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Track scroll position for background blur intensity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-6 py-4 transition-all duration-300",
          scrolled
            ? "backdrop-blur-md bg-background/60 border-b border-gray-200 dark:border-white/10 shadow-sm"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <a href="#" className="text-lg font-semibold tracking-tight">
          diah<span className="text-blue-400">.</span>dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "text-sm transition-colors relative pb-0.5",
                  activeSection === l.href.slice(1)
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-blue-400"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full border border-gray-200 dark:border-white/15 bg-gray-50/80 dark:bg-white/5 p-2 hover:bg-gray-100 dark:hover:bg-white/15 transition-all"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          )}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/20 bg-gray-50/80 dark:bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-white/20 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="rounded-full border border-gray-200 dark:border-white/15 bg-gray-50/80 dark:bg-white/5 p-2 hover:bg-gray-100 dark:hover:bg-white/15 transition-all"
            >
              {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 backdrop-blur-md bg-background/90 border-b border-gray-200 dark:border-white/10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm transition-colors",
                  activeSection === l.href.slice(1)
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/20 bg-gray-50/80 dark:bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-white/20 transition-all"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
