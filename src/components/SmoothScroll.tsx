"use client";

import { useEffect } from "react";

/**
 * SmoothScroll installs a minimal, accessible smooth-scrolling enhancer for
 * same-page hash links. It respects prefers-reduced-motion and defers to the
 * browser if unsupported.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return; // Respect user preference

    const isSamePage = (anchor: HTMLAnchorElement) => {
      try {
        const url = new URL(anchor.href, window.location.href);
        return (
          url.pathname === window.location.pathname &&
          url.search === window.location.search &&
          !!url.hash
        );
      } catch {
        return anchor.getAttribute("href")?.startsWith("#") ?? false;
      }
    };

    const scrollToHashTarget = (hash: string) => {
      const id = hash.replace(/^#/, "");
      if (!id) return;
      const target = document.getElementById(id) || document.querySelector(`[name="${CSS.escape(id)}"]`);
      if (target && "scrollIntoView" in target) {
        try {
          target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        } catch {
          // Fallback
          target.scrollIntoView(true);
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as Element)?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (!isSamePage(anchor)) return;
      const hash = new URL(anchor.href, window.location.href).hash;
      if (!hash) return;
      // Allow modifier/middle clicks to behave normally
      if ((e as MouseEvent).button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      // Update hash without layout jump, then smooth scroll
      if (history.pushState) history.pushState(null, "", hash);
      else window.location.hash = hash;
      // Next frame to ensure hash is in URL
      requestAnimationFrame(() => scrollToHashTarget(hash));
    };

    const onHashChange = () => {
      scrollToHashTarget(window.location.hash);
    };

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);

    // If page loads with a hash, smooth scroll to it after paint
    if (window.location.hash) {
      requestAnimationFrame(() => scrollToHashTarget(window.location.hash));
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return null;
}
