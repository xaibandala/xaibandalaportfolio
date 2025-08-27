"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import GooeyNav from "./GooeyNav";
import { useRouter } from "next/navigation";

export type NavItem = { label: string; href: string };

type ResponsiveNavProps = {
  items: NavItem[];
  initialActiveIndex?: number;
  className?: string;
};

export default function ResponsiveNav({ items, initialActiveIndex = 0, className = "" }: ResponsiveNavProps) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const scrollToSection = (href: string): void => {
    // If we're not on the home page, navigate there first
    if (window.location.pathname !== '/') {
      router.push(`/${href}`);
      return;
    }

    // Extract section ID from href (e.g., "/about" -> "about")
    const sectionId = href.replace('/', '');
    
    // Handle special cases
    const sectionMap: Record<string, string> = {
      'about': 'about-section',
      'projects': 'projects-section', 
      'certificates': 'certificates-section',
      'contacts': 'contact-section'
    };

    const targetId = sectionMap[sectionId] || sectionId;
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Prefetch all routes on mount for snappier transitions
  useEffect(() => {
    items.forEach((it) => {
      try {
        router.prefetch(it.href);
      } catch {}
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // ESC to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Slightly tune gooey animation for users preferring reduced motion
  const gooeyPerf = useMemo(() => {
    if (typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return {
        particleCount: 10,
        particleDistances: [80, 8] as [number, number],
        particleR: 90,
        animationTime: 500,
        timeVariance: 220,
      };
    }
    return {
      particleCount: 15,
      particleDistances: [90, 10] as [number, number],
      particleR: 100,
      animationTime: 600,
      timeVariance: 300,
    };
  }, []);

  return (
    <div className={`absolute top-4 right-4 z-20 ${className}`}>
      {/* Mobile hamburger (sm:hidden) */}
      <div className="sm:hidden">
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/20 bg-black/40 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
        {open && (
          <div
            id="mobile-nav-panel"
            ref={panelRef}
            className="absolute right-0 mt-3 w-56 rounded-lg border border-white/15 bg-black/90 shadow-xl backdrop-blur-sm"
            role="menu"
          >
            <nav className="py-2">
              {items.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 cursor-pointer"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    
                    // Handle Home navigation normally, others scroll to sections
                    if (it.href === '/') {
                      router.push('/');
                    } else {
                      scrollToSection(it.href);
                    }
                  }}
                >
                  {it.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop GooeyNav (hidden on small screens) */}
      <div className="hidden sm:block">
        <GooeyNav
          items={items}
          particleCount={gooeyPerf.particleCount}
          particleDistances={gooeyPerf.particleDistances}
          particleR={gooeyPerf.particleR}
          initialActiveIndex={initialActiveIndex}
          animationTime={gooeyPerf.animationTime}
          timeVariance={gooeyPerf.timeVariance}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>
    </div>
  );
}
