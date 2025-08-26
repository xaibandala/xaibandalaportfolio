"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ClickSpark from "../../components/ClickSpark";
import SplitText from "../../components/SplitText";
import AnimatedContent from "../AnimatedContent";
import ResponsiveNav from "../../components/ResponsiveNav";
import Threads from "../../components/Threads";
import TargetCursor from "../../components/TargetCursor";


// Lightweight project catalog (extend as needed)
const projects = [
  {
    title: "AI Portfolio Site",
    description:
      "A high-performance Next.js portfolio with motion, dark aesthetics, and custom WebGL threads.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    links: {
      live: "/",
      code: "https://github.com/xaibandala/xaibandalaportfolio",
    },
    accent: "from-violet-500/30 via-fuchsia-500/20 to-cyan-500/20",
    image: "/xai.jpeg",
    alt: "Screenshot of AI Portfolio homepage",
  },
  {
    title: "Interactive Canvas",
    description:
      "Generative visuals with OGL and GPU-accelerated effects, optimized for smooth interactions.",
    tech: ["OGL", "WebGL", "Vite", "Shaders"],
    links: {
      live: "#",
      code: "#",
    },
    accent: "from-cyan-500/30 via-sky-500/20 to-emerald-500/20",
    image: "/globe.svg",
    alt: "Stylized globe vector representing canvas visuals",
  },
  {
    title: "Design System Kit",
    description:
      "Accessible component primitives with tokens, theming, and motion-ready interactions.",
    tech: ["Radix UI", "Tailwind", "Storybook", "ARIA"],
    links: {
      live: "#",
      code: "#",
    },
    accent: "from-amber-500/30 via-rose-500/20 to-violet-500/20",
    image: "/window.svg",
    alt: "Window UI icon symbolizing components",
  },
  {
    title: "Realtime Chat",
    description:
      "Latency-conscious chat app with optimistic UI, presence, and message reactions.",
    tech: ["Next.js", "tRPC", "Prisma", "WebSockets"],
    links: {
      live: "#",
      code: "#",
    },
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
    image: "/vercel.svg",
    alt: "Minimal lightning logo representing realtime",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Responsive, themeable dashboards with charts, filters, and keyboard-first navigation.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    links: {
      live: "#",
      code: "#",
    },
    accent: "from-rose-500/30 via-fuchsia-500/20 to-indigo-500/20",
    image: "/file.svg",
    alt: "Document icon representing reports and analytics",
  },
  {
    title: "Docs Engine",
    description:
      "MDX-powered documentation with search, code previews, and semantic theming.",
    tech: ["Next.js", "MDX", "Algolia", "Zustand"],
    links: {
      live: "#",
      code: "#",
    },
    accent: "from-indigo-500/30 via-blue-500/20 to-cyan-500/20",
    image: "/next.svg",
    alt: "Next.js logo representing docs engine",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative isolate min-h-screen w-full overflow-x-hidden bg-black text-white">
      <TargetCursor spinDuration={2} hideDefaultCursor />
      {/* Threads background (consistent with Home hero) */}
      <div className="absolute inset-0 -z-10">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      {/* Top-right responsive nav */}
      <ResponsiveNav
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Projects", href: "/projects" },
          { label: "Certificates", href: "/certificates" },
          { label: "Contact", href: "/contacts" },
        ]}
        initialActiveIndex={2}
      />
      <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <div className="relative z-10 flex flex-col items-center px-4 text-center pt-24 md:pt-28 pb-16 md:pb-20">
          <SplitText
            text="My Projects"
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            delay={150}
            duration={1.2}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            useScrollTrigger={false}
          />
          {/* Subtitle under title */}
          <AnimatedContent distance={20} duration={0.6} ease="power3.out" threshold={0.1}>
            <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-6 md:leading-7">
              Selected work and case studies focusing on performance, accessibility, and motion.
            </p>
          </AnimatedContent>
          {/* Projects content section (animated) */}
          <AnimatedContent distance={80} duration={0.9} ease="power3.out" threshold={0.15}>
            <section className="w-full max-w-5xl mx-auto text-left mt-10 md:mt-16">
              {/* Responsive grid of project cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {projects.map((p) => (
                  <AnimatedContent key={p.title} distance={40} duration={0.7} ease="power3.out" threshold={0.15}>
                    <motion.div
                      className="cursor-target group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]"
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    >
                      {/* Glow gradient */}
                      <div
                        className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${p.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                        aria-hidden="true"
                      />
                      {/* Thumbnail */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          priority={p.title === "AI Portfolio Site"}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      <div className="relative h-full p-5 md:p-6">
                        <div className="mb-3 flex items-start justify-between gap-3">
                          <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
                            {p.title}
                          </h3>
                          <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] leading-5 text-white/70">
                            {p.tech[0]}
                          </span>
                        </div>
                        <p className="text-sm md:text-[15px] leading-6 text-white/75 line-clamp-3">
                          {p.description}
                        </p>
                        {/* Tech badges */}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-white/10 bg-white/[0.025] px-2 py-1 text-[11px] text-white/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {/* Actions */}
                        <div className="mt-5 flex items-center gap-2.5">
                          <motion.a
                            href={p.links.live}
                            target={p.links.live?.startsWith("http") ? "_blank" : undefined}
                            rel={p.links.live?.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="cursor-target inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                            aria-label={`Open live demo for ${p.title}`}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                          >
                            <span>Live</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="h-4 w-4 opacity-80"
                            >
                              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </motion.a>
                          <motion.a
                            href={p.links.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-target inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                            aria-label={`View source code for ${p.title}`}
                            whileHover={{ y: -1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              className="h-4 w-4 opacity-80"
                            >
                              <path d="M16 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Code</span>
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedContent>
                ))}
              </div>
            </section>
          </AnimatedContent>
        </div>
      </ClickSpark>
    </div>
  );
}
