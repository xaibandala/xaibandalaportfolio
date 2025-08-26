import Image from "next/image";
import ClickSpark from "../../components/ClickSpark";
import SplitText from "../../components/SplitText";
import AnimatedContent from "../AnimatedContent";
import ResponsiveNav from "../../components/ResponsiveNav";
import Threads from "../../components/Threads";


// Certificates catalog (replace placeholders with real data)
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
    accent: "from-indigo-500/30 via-blue-500/20 to-cyan-500/20",
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

export default function CertificatesPage() {
  return (
    <div className="relative isolate min-h-screen w-full overflow-x-hidden bg-black text-white">
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
        initialActiveIndex={3}
      />
      <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        <div className="relative z-10 flex flex-col items-center px-4 text-center pt-24 md:pt-28 pb-16 md:pb-20">
          <SplitText
            text="My Certificates"
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
              Certifications and achievements that reflect continuous learning and impact.
            </p>
          </AnimatedContent>
          {/* Certificates content section (animated) */}
          <AnimatedContent distance={80} duration={0.9} ease="power3.out" threshold={0.15}>
            <section className="w-full max-w-6xl mx-auto text-left mt-10 md:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {certificates.map((c, i) => (
                  <AnimatedContent
                    key={c.title}
                    direction="horizontal"
                    reverse={i % 2 === 1}
                    distance={40}
                    duration={0.6}
                    delay={i * 0.08}
                    threshold={0.2}
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-12px_rgba(0,0,0,0.7)]">
                      {/* Glow gradient */}
                      <div
                        className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${c.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                        aria-hidden="true"
                      />
                      {/* Thumbnail */}
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image
                          src={c.image}
                          alt={c.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          priority={i === 0}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      </div>
                      {/* Content */}
                      <div className="relative p-6 md:p-7">
                        <h3 className="text-white/95 font-semibold text-lg md:text-xl">
                          {c.title}
                        </h3>
                        <p className="text-white/65 text-sm md:text-base mt-1">
                          {c.issuer} • {c.year}
                        </p>
                        <div className="mt-5">
                          <a
                            href={c.url}
                            target={c.url?.startsWith("http") ? "_blank" : undefined}
                            rel={c.url?.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white/90 transition-colors hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
                            aria-label={`View or verify certificate: ${c.title}`}
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
                          </a>
                        </div>
                      </div>
                    </div>
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
