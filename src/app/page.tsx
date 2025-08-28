"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ResponsiveNav from "../components/ResponsiveNav";
import TargetCursor from "../components/TargetCursor";
import LogoLoop from "../components/LogoLoop";
import Threads from "../components/Threads";
import { projects } from "./projects/projects";

const certificates = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera / Google",
    year: "2024",
    image: "/xai.jpeg",
    alt: "Certificate preview for Google Data Analytics",
    url: "#",
    accent: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    year: "2023",
    image: "/next.svg",
    alt: "Certificate preview for Meta Front-End",
    url: "#",
    accent: "from-violet-500/30 via-fuchsia-500/20 to-cyan-500/20",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2022",
    image: "/globe.svg",
    alt: "Certificate preview for AWS Cloud Practitioner",
    url: "#",
    accent: "from-orange-500/30 via-red-500/20 to-pink-500/20",
  },
  {
    title: "Scrum Master Certified (SMC)",
    issuer: "ScrumStudy",
    year: "2021",
    image: "/file.svg",
    alt: "Certificate preview for Scrum Master",
    url: "#",
    accent: "from-amber-500/30 via-rose-500/20 to-violet-500/20",
  },
];

const techStack = [
  { name: "TypeScript", desc: "Typed JavaScript at scale", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Next.js", desc: "React framework for production", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", desc: "Library for building user interfaces", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Tailwind CSS", desc: "Utility-first CSS framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Framer Motion", desc: "Production-ready motion library", icon: "https://www.framer.com/m/framer/logo.svg" },
  { name: "Node.js", desc: "JavaScript runtime built on Chrome's V8", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", desc: "Advanced open source relational database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", desc: "Next-generation Node.js and TypeScript ORM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
  { name: "MongoDB", desc: "Document-based NoSQL database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Express", desc: "Fast, unopinionated web framework", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Docker", desc: "Containerization platform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Git", desc: "Version control system", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

const education = [
  {
    year: "2020 – 2024",
    institution: "ABC University",
    degree: "BS in Computer Science",
    description:
      "Focused on web development, human–computer interaction, and systems. Led capstone on real-time data visualization.",
    logo: "/next.svg",
    alt: "ABC University logo",
  },
  {
    year: "2018 – 2020",
    institution: "Tech Institute",
    degree: "Diploma in Information Technology",
    description:
      "Built foundations in programming, networking, and databases. Graduated with honors and led the coding circle.",
    logo: "/globe.svg",
    alt: "Tech Institute logo",
  },
  {
    year: "2016 – 2018",
    institution: "Science High School",
    degree: "STEM Track",
    description:
      "Explored mathematics and physics through robotics clubs and programming contests.",
    logo: "/file.svg",
    alt: "Science High School logo",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div 
      className="relative isolate w-full min-h-0 bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <TargetCursor targetSelector=".cursor-target" spinDuration={2} hideDefaultCursor={true} />
      <div className="relative z-20">
          <div>
            {/* Hero section */}
            <motion.section 
              className="relative min-h-screen flex items-center justify-center"
              style={{ y, opacity }}
            >
              <div className="absolute inset-0 -z-10">
                <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
              </div>
              <div className="absolute top-6 right-6 z-30">
                <ResponsiveNav
                  items={[
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Projects", href: "/projects" },
                    { label: "Certificates", href: "/certificates" },
                    { label: "Contact", href: "/contacts" },
                  ]}
                  initialActiveIndex={0}
                />
              </div>
              <motion.div 
                className="relative z-10 flex flex-col items-center px-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.6
                      }
                    }
                  }}
                >
                  {"Xai Bandala".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{ display: "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.p
                  className="mt-6 md:mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-white/70"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  Crafting performant, delightful web experiences with modern technologies.
                </motion.p>
              </motion.div>
            </motion.section>

            

            {/* Tech Stack section */}
            <motion.section 
              className="relative z-10 w-full py-16 md:py-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="max-w-6xl xl:max-w-7xl mx-auto px-4">
                <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white mb-12">Tech Stack</h2>
              </div>
              <div className="relative overflow-hidden w-screen -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-20">
                <motion.div
                  className="flex"
                  animate={{ translateX: ["0%", "-50%"] }}
                  transition={{
                    translateX: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: techStack.length * 2.5,
                      ease: "linear",
                    },
                  }}
                  whileHover={{ animationPlayState: "paused" }}
                >
                  {/* Render two sets of logos for a seamless loop */}
                  {[...techStack, ...techStack].map((tech, index) => (
                    <motion.div
                      key={`${tech.name}-${index}`}
                      className="flex-shrink-0 flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-5 lg:p-6 w-24 sm:w-28 md:w-32 lg:w-36"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 text-center whitespace-nowrap font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.section>

            {/* About Me Section */}
            <motion.section 
              id="about-section"
              className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white">About Me</h2>
              
              {/* Profile Image */}
              <motion.div 
                className="mt-10 md:mt-12 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full overflow-hidden ring-1 ring-white/15"
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                >
                  <Image
                    src="/xai.jpeg"
                    alt="Xai Bandala"
                    width={144}
                    height={144}
                    priority
                    sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </motion.div>

              {/* About Me Text */}
              <motion.div
                className="w-full max-w-5xl mx-auto text-left mt-10 md:mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -2 }}
              >
                <div className="text-white/80 leading-7 md:leading-8 text-[15px] sm:text-base md:text-[19px] space-y-5 md:space-y-6">
                  <p>
                    I&apos;m a developer passionate about crafting performant, delightful web experiences. I enjoy working across the stack—from building
                    accessible, animated interfaces to designing robust APIs and data layers. I focus on clean architecture, thoughtful UX, and smooth
                    motion to make products feel alive and intuitive.
                  </p>
                  <p>
                    Recently I&apos;ve been exploring interactive canvases, micro-animations, and edge deployments. When I&apos;m not coding, I&apos;m learning new
                    design patterns, contributing to side projects, or experimenting with web graphics.
                  </p>
                </div>
              </motion.div>
            </motion.section>

            {/* Education Section */}
            <motion.section
              id="education-section"
              className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white">Education</h2>
              <motion.p 
                className="mt-3 md:mt-4 max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-6 md:leading-7 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                A concise journey through my academic background.
              </motion.p>

              <div className="relative mt-10 md:mt-16">
                {/* Vertical timeline lines */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-cyan-500/25 md:hidden" aria-hidden="true" />
                <div className="absolute left-4 top-0 bottom-0 w-[6px] bg-cyan-500/5 blur-md md:hidden" aria-hidden="true" />

                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-cyan-500/25" aria-hidden="true" />
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[8px] bg-cyan-500/5 -translate-x-1/2 blur-md" aria-hidden="true" />

                <div className="space-y-8 md:space-y-12">
                  {education.map((item, index) => (
                    <motion.div
                      key={item.institution + index}
                      className={`relative group pl-12 md:pl-0 md:flex md:items-center md:gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }}
                      viewport={{ once: true, margin: "-80px" }}
                    >
                      {/* Timeline marker */}
                      <span
                        className="absolute left-4 md:left-1/2 top-3 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20 shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-transform duration-300 will-change-transform group-hover:scale-110"
                        aria-hidden="true"
                      />

                      {/* Left/Right: Year */}
                      <div className="md:w-1/2">
                        <div className="md:text-right">
                          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                            <span className="text-xs md:text-sm font-medium tracking-wide text-white/70">{item.year}</span>
                          </div>
                        </div>
                      </div>

                      {/* Left/Right: Card */}
                      <div className="md:w-1/2">
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]">
                          {/* Glow on hover */}
                          <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-teal-500/10 to-blue-500/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                          <div className="relative flex items-start gap-4">
                            <div className="shrink-0 h-10 w-10 rounded-md ring-1 ring-white/10 bg-white/[0.06] overflow-hidden">
                              <Image src={item.logo} alt={item.alt} width={40} height={40} className="h-full w-full object-contain" />
                            </div>
                            <div className="min-w-0">
                              <h3 className="text-white font-semibold text-base md:text-lg leading-tight">{item.institution}</h3>
                              <p className="text-white/80 text-sm md:text-[15px] mt-0.5">{item.degree}</p>
                              <p className="text-white/65 text-sm md:text-[15px] leading-6 mt-3">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section 
              id="projects-section"
              className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white">My Projects</h2>
              
              {/* Subtitle */}
              <motion.p 
                className="mt-3 md:mt-4 max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-6 md:leading-7 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Selected work and case studies focusing on performance, accessibility, and motion.
              </motion.p>

              {/* Projects Grid */}
              <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="cursor-target group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Glow gradient */}
                    <div
                      className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${project.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                      aria-hidden="true"
                    />
                    
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        priority={project.title === "AI Portfolio Site"}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    
                    <div className="relative h-full p-5 md:p-6">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white">
                          {project.title}
                        </h3>
                        <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] leading-5 text-white/70">
                          {project.tech[0]}
                        </span>
                      </div>
                      
                      <p className="text-sm md:text-[15px] leading-6 text-white/75 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Tech badges */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/10 bg-white/[0.025] px-2 py-1 text-[11px] text-white/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Actions */}
                      <div className="mt-5 flex items-center gap-2.5">
                        <motion.a
                          href={project.links.live}
                          target={project.links.live?.startsWith("http") ? "_blank" : undefined}
                          rel={project.links.live?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="cursor-target inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                          aria-label={`Open live demo for ${project.title}`}
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
                          href={project.links.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-target inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.02] px-3 py-2 text-xs font-medium text-white/80 transition-colors hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                          aria-label={`View source code for ${project.title}`}
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
                ))}
              </div>
            </motion.section>

            {/* Certificates Section */}
            <motion.section 
              id="certificates-section"
              className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white">My Certificates</h2>
              
              {/* Subtitle */}
              <motion.p 
                className="mt-3 md:mt-4 max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-6 md:leading-7 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Certifications and achievements that reflect continuous learning and impact.
              </motion.p>

              {/* Certificates Grid */}
              <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    className="cursor-target group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {/* Glow gradient */}
                    <div
                      className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${cert.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                      aria-hidden="true"
                    />
                    
                    {/* Thumbnail */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        priority={index === 0}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6 md:p-7">
                      <h3 className="text-white/95 font-semibold text-lg md:text-xl">
                        {cert.title}
                      </h3>
                      <p className="text-white/65 text-sm md:text-base mt-1">
                        {cert.issuer} • {cert.year}
                      </p>
                      <div className="mt-5">
                        <motion.a
                          href={cert.url}
                          target={cert.url?.startsWith("http") ? "_blank" : undefined}
                          rel={cert.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="cursor-target inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                          aria-label={`View or verify certificate: ${cert.title}`}
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-4 w-4 opacity-80"
                          >
                            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="9" />
                          </svg>
                          <span>Verify</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section 
              id="contact-section"
              className="relative z-10 w-full max-w-6xl xl:max-w-7xl mx-auto px-4 py-16 md:py-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-center text-2xl md:text-3xl font-bold tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Get In Touch
              </motion.h2>
              
              {/* Content grid */}
              <div className="mx-auto w-full max-w-6xl text-left grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mt-10 md:mt-16">
                {/* Left: Contact information */}
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-[0_8px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-colors hover:border-white/20"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white/90">Contact Information</h3>
                      <div className="mt-4 flex items-center gap-3 text-white/80">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white/10">📧</span>
                        <a href="mailto:xaiglennbandala@gmail.com" className="hover:text-white transition-colors">
                          xaiglennbandala@gmail.com
                        </a>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white/90">Connect with Me</h3>
                      <div className="mt-4 flex items-center gap-5 text-white">
                        <motion.a
                          href="https://github.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-target inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-colors"
                          aria-label="GitHub"
                          title="GitHub"
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.02c0 4.427 2.865 8.18 6.839 9.504.5.094.682-.217.682-.483 0-.238-.009-.868-.014-1.704-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.112-4.555-4.949 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.851.004 1.707.115 2.507.337 1.909-1.295 2.748-1.026 2.748-1.026.545 1.378.202 2.397.1 2.65.64.7 1.027 1.595 1.027 2.688 0 3.846-2.339 4.694-4.566 4.943.359.31.679.92.679 1.855 0 1.339-.012 2.419-.012 2.75 0 .269.18.58.688.481A10.02 10.02 0 0 0 22 12.02C22 6.486 17.523 2 12 2Z" clipRule="evenodd"/></svg>
                        </motion.a>
                        <motion.a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-target inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-colors"
                          aria-label="LinkedIn"
                          title="LinkedIn"
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.67c0-1.59-.03-3.63-2.21-3.63-2.22 0-2.56 1.73-2.56 3.52V23h-4V8z"/></svg>
                        </motion.a>
                        <motion.a
                          href="https://medium.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cursor-target inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-colors"
                          aria-label="Medium"
                          title="Medium"
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <svg viewBox="0 0 1043.63 592.71" fill="currentColor" className="h-5 w-5"><path d="M588.67 296.35c0 163.7-131.54 296.35-293.84 296.35S1 460.05 1 296.35 132.54 0 294.83 0s293.84 132.64 293.84 296.35ZM712.02 296.35c0 154.45-65.76 279.73-146.86 279.73S418.3 450.8 418.3 296.35 484.06 16.62 565.16 16.62s146.86 125.28 146.86 279.73Zm329.61 0c0 143.14-29.43 259.13-65.73 259.13s-65.73-116-65.73-259.13S939.61 37.22 975.9 37.22s65.73 116 65.73 259.13Z"/></svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* Right: Contact form */}
                <motion.div
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8 shadow-[0_8px_30px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-colors hover:border-white/20"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl md:text-2xl font-extrabold text-white/90">Send a Message</h3>
                  <form className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm text-white/70 mb-1" htmlFor="name">Name</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-cyan-500/30"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-1" htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-cyan-500/30"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-1" htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-cyan-500/30"
                        placeholder="How can I help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/70 mb-1" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full rounded-md bg-white/5 border border-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-white/30 focus:ring-2 focus:ring-cyan-500/30 resize-y"
                        placeholder="Tell me a bit about your project..."
                      />
                    </div>
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        className="cursor-target w-full md:w-auto inline-flex items-center justify-center rounded-md bg-cyan-600 hover:bg-cyan-500 active:scale-[0.99] transition-all px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,255,255,0.15)]"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </motion.section>
          </div>
      </div>
    </motion.div>
  );
}

