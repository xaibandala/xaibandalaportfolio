"use client";
import SplitText from "../components/SplitText";
import AnimatedContent from "./AnimatedContent";
import Image from "next/image";
import Threads from "../components/Threads";
import ResponsiveNav from "../components/ResponsiveNav";
import ClickSpark from "../components/ClickSpark";
import { motion } from "framer-motion";

 

export default function Home() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Certificates", href: "/certificates" },
    { label: "Contact", href: "/contacts" },
  ];

  const techs = [
              {
                name: "Next.js",
                desc: "App Router, server components, image optimization.",
                logo: "/next.svg",
                accent: "from-white/20 via-white/10 to-transparent",
              },
              {
                name: "TypeScript",
                desc: "Type-safe components and APIs for reliability.",
                logo: "/tech/typescript.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M3 5h18v14H3z" />
                    <path d="M10 9h4M12 9v6" />
                  </svg>
                ),
                accent: "from-sky-500/30 via-blue-500/20 to-cyan-500/10",
              },
              {
                name: "Tailwind CSS",
                desc: "Utility-first styling with responsive design.",
                logo: "/tech/tailwind.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M4 12c2-5 6-5 8 0s6 5 8 0" />
                  </svg>
                ),
                accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/10",
              },
              {
                name: "GSAP",
                desc: "High-performance animations and scroll effects.",
                logo: "/tech/gsap.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M4 4l16 16" />
                    <path d="M20 4L4 20" />
                  </svg>
                ),
                accent: "from-violet-500/30 via-fuchsia-500/20 to-rose-500/10",
              },
              {
                name: "OGL / WebGL",
                desc: "Lightweight 3D and shader-driven visuals.",
                logo: "/tech/ogl.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v18M3 12h18" />
                  </svg>
                ),
                accent: "from-cyan-500/30 via-sky-500/20 to-indigo-500/10",
              },
              {
                name: "Vercel",
                desc: "Fast, reliable deployments and previews.",
                logo: "/vercel.svg",
                accent: "from-white/20 via-white/10 to-transparent",
              },
              {
                name: "Prisma",
                desc: "Type-safe ORM for robust data access.",
                logo: "/tech/prisma.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M6 3l12 6v6l-12 6V3z" />
                  </svg>
                ),
                accent: "from-indigo-500/30 via-blue-500/20 to-cyan-500/10",
              },
              {
                name: "tRPC",
                desc: "End-to-end typesafe APIs without schemas.",
                logo: "/tech/trpc.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M4 12h16" />
                    <path d="M12 4v16" />
                  </svg>
                ),
                accent: "from-teal-500/30 via-emerald-500/20 to-cyan-500/10",
              },
              {
                name: "PostgreSQL",
                desc: "Reliable relational database with advanced features.",
                logo: "/tech/postgresql.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <ellipse cx="12" cy="6" rx="8" ry="3" />
                    <path d="M4 6v8c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
                  </svg>
                ),
                accent: "from-sky-500/30 via-blue-500/20 to-indigo-500/10",
              },
              {
                name: "Supabase",
                desc: "Open-source Firebase alternative on Postgres.",
                logo: "/tech/supabase.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M4 20l8-16 8 16H4z" />
                  </svg>
                ),
                accent: "from-emerald-500/30 via-green-500/20 to-teal-500/10",
              },
              {
                name: "Chart.js",
                desc: "Beautiful charts for dashboards and insights.",
                logo: "/tech/chartjs.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M4 20V10" />
                    <path d="M10 20V4" />
                    <path d="M16 20v-6" />
                    <path d="M2 20h20" />
                  </svg>
                ),
                accent: "from-amber-500/30 via-rose-500/20 to-violet-500/10",
              },
              {
                name: "Framer Motion",
                desc: "Delightful motion primitives for React.",
                logo: "/tech/framer-motion.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M4 4h10v8H4z" />
                    <path d="M14 12l6 8H4z" />
                  </svg>
                ),
                accent: "from-fuchsia-500/30 via-pink-500/20 to-rose-500/10",
              },
              {
                name: "Zod",
                desc: "Type-safe validation and parsing.",
                logo: "/tech/zod.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <path d="M6 6h12v12H6z" />
                    <path d="M9 9h6v6H9z" />
                  </svg>
                ),
                accent: "from-purple-500/30 via-indigo-500/20 to-blue-500/10",
              },
              {
                name: "Zustand",
                desc: "Small, fast state-management for React.",
                logo: "/tech/zustand.svg",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
                  </svg>
                ),
                accent: "from-orange-500/30 via-amber-500/20 to-yellow-500/10",
              },
            ];
  return (
    <div className="relative isolate w-full min-h-0 bg-black text-white">
      <div className="relative z-20">
        <ClickSpark className="block" contentSized>
          <div>
          {/* Hero section with Threads background only here */}
          <section className="relative min-h-screen flex items-center justify-center">
            {/* Threads background, scoped to hero only */}
            <div className="absolute inset-0 -z-10">
              <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
            </div>
            {/* Top-right responsive nav (desktop gooey, mobile hamburger) */}
            <ResponsiveNav items={navItems} initialActiveIndex={0} />
            <div className="relative flex flex-col items-center justify-center w-full px-4 text-center">
              <div className="w-full max-w-6xl mx-auto">
              <div className="w-full flex justify-center">
              <SplitText
                text="Xai Bandala"
                className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center md:whitespace-nowrap"
                delay={150}
                duration={1.05}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.18}
                rootMargin="-100px"
                textAlign="center"
                useScrollTrigger={false}
              />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 w-full">
              {/* TODO: Replace the href values with your actual profile links */}
              <motion.a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className="group px-5 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition-colors inline-flex items-center justify-center motion-safe:transform transition-transform duration-200 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 motion-safe:transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                  <path d="M12 2C6.477 2 2 6.486 2 12.021c0 4.424 2.865 8.177 6.839 9.504.5.094.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.004.071 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.833.091-.648.35-1.088.636-1.338-2.221-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.992 1.03-2.693-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.028A9.564 9.564 0  0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.298 2.748-1.028 2.748-1.028.546 1.376.202 2.393.1 2.646.64.701 1.028 1.598 1.028 2.693 0 3.852-2.338 4.701-4.566 4.949.359.31.679.922.679 1.859 0 1.34-.012 2.42-.012 2.747 0 .268.18.58.688.481A9.525 9.525 0 0 0 22 12.021C22 6.486 17.523 2 12 2z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="group px-5 py-2 rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center motion-safe:transform transition-transform duration-200 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 motion-safe:transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.05c.53-1 1.82-2.05 3.75-2.05 4.01 0  4.75 2.64 4.75 6.07V23h-4v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:example@gmail.com"
                aria-label="Gmail"
                title="Gmail"
                className="group px-5 py-2 rounded-md border border-white/30 text-white hover:bg-white/10 transition-colors inline-flex items-center justify-center motion-safe:transform transition-transform duration-200 ease-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 motion-safe:transition-transform duration-200 ease-out group-hover:-translate-y-0.5">
                  <path d="M12 13.065 1.5 5.25v12.75A1.5 1.5 0 0 0 3 19.5h18a1.5 1.5 0 0 0 1.5-1.5V5.25L12 13.065z" />
                  <path d="M21.75 4.5H2.25l9.75 7.5 9.75-7.5z" />
                </svg>
              </motion.a>
              </div>
              </div>
              {/* Close hero content container */}
            </div>
          </section>
          {/* Tech Stack section */}
          <AnimatedContent distance={50} duration={0.7} ease="power3.out" threshold={0.2}>
            <section className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20">
              <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white">Tech Stack</h2>
              <p className="mt-2 text-center text-white/70 text-sm md:text-base">Tools and technologies I use to design, build, and ship.</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7 xl:gap-8">
                {techs.map((t) => (
                  <AnimatedContent key={t.name} distance={24} duration={0.5} ease="power3.out" threshold={0.2}>
                    <ClickSpark contentSized className="block">
                      <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]">
                        {/* Glow gradient */}
                        <div className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${t.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} aria-hidden="true" />
                        <div className="relative flex items-start gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/90 overflow-hidden [&>svg]:h-6 [&>svg]:w-6">
                            {"logo" in t && t.logo ? (
                              <Image
                                src={t.logo as string}
                                alt={`${t.name} logo`}
                                width={24}
                                height={24}
                                className="opacity-90"
                              />
                            ) : (
                              t.icon
                            )}
                          </span>
                          <div>
                            <h3 className="text-white font-semibold text-base md:text-lg">{t.name}</h3>
                            <p className="mt-1 text-white/70 text-sm leading-6">{t.desc}</p>
                          </div>
                        </div>
                      </div>
                    </ClickSpark>
                  </AnimatedContent>
                ))}
              </div>
            </section>
          </AnimatedContent>
          {/* What I Can Do section */}
          <AnimatedContent distance={50} duration={0.7} ease="power3.out" threshold={0.2}>
            <section className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20">
              <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white">What I Can Do</h2>
              <p className="mt-2 text-center text-white/70 text-sm md:text-base max-w-2xl mx-auto">
                I design and build polished web experiences end-to-end — from delightful UIs to robust APIs — with performance,
                accessibility, and maintainability in mind.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 xl:gap-8">
                {/* Card 1 */}
                <AnimatedContent distance={24} duration={0.5} ease="power3.out" threshold={0.2}>
                  <ClickSpark contentSized className="block">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]">
                    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-sky-500/15 to-indigo-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white/90">
                        {/* Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M4 6h16v12H4z" /><path d="M4 10h16" /><path d="M8 14h4" /></svg>
                      </span>
                      <div>
                        <h3 className="text-white font-semibold text-base md:text-lg">Frontend Engineering</h3>
                        <p className="mt-1 text-white/70 text-sm leading-6">Type-safe, accessible UI with fluid motion and responsive design.</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/75">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80" /> Next.js, TypeScript, Tailwind</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80" /> Framer Motion / GSAP micro-interactions</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80" /> A11y and semantics by default</li>
                    </ul>
                  </div>
                  </ClickSpark>
                </AnimatedContent>

                {/* Card 2 */}
                <AnimatedContent distance={24} duration={0.5} ease="power3.out" threshold={0.2}>
                  <ClickSpark contentSized className="block">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]">
                    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white/90">
                        {/* Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M4 6h16v12H4z" /><path d="M8 10h8" /><path d="M8 14h8" /></svg>
                      </span>
                      <div>
                        <h3 className="text-white font-semibold text-base md:text-lg">Backend & APIs</h3>
                        <p className="mt-1 text-white/70 text-sm leading-6">Type-safe endpoints, data modeling, and reliable integrations.</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/75">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" /> tRPC / REST, Zod validation</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" /> Prisma, PostgreSQL, Supabase</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400/80" /> Auth, caching, and edge-ready patterns</li>
                    </ul>
                  </div>
                  </ClickSpark>
                </AnimatedContent>

                {/* Card 3 */}
                <AnimatedContent distance={24} duration={0.5} ease="power3.out" threshold={0.2}>
                  <ClickSpark contentSized className="block">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 md:p-7 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]">
                    <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-pink-500/15 to-rose-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white/90">
                        {/* Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5"><path d="M12 6v12" /><path d="M6 12h12" /></svg>
                      </span>
                      <div>
                        <h3 className="text-white font-semibold text-base md:text-lg">UI/Animation & Performance</h3>
                        <p className="mt-1 text-white/70 text-sm leading-6">Micro-interactions, WebGL accents, and measurable performance boosts.</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-white/75">
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400/80" /> Framer Motion, GSAP, OGL/WebGL</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400/80" /> Route prefetch, image optimization</li>
                      <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400/80" /> Lighthouse and UX-focused tuning</li>
                    </ul>
                  </div>
                  </ClickSpark>
                </AnimatedContent>
              </div>
            </section>
          </AnimatedContent>
          </div>
        </ClickSpark>
      </div>
    </div>
  );
}