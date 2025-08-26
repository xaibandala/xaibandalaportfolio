import ClickSpark from "../../components/ClickSpark";
import SplitText from "../../components/SplitText";
import AnimatedContent from "../AnimatedContent";
import ResponsiveNav from "../../components/ResponsiveNav";
import Image from "next/image";
import Threads from "../../components/Threads";


export default function AboutPage() {
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
        initialActiveIndex={1}
      />
      <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={380}>
        <div className="relative z-10 flex flex-col items-center px-4 text-center pt-24 md:pt-28 pb-16 md:pb-20">
          <SplitText
            text="About Me"
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
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
          {/* Circular profile image only (animated) */}
          <AnimatedContent distance={50} duration={0.7} ease="power3.out" threshold={0.22}>
            <div className="mt-10 md:mt-12 flex justify-center">
              <div className="h-24 w-24 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full overflow-hidden ring-1 ring-white/15">
                <Image
                  src="/xai.jpeg"
                  alt="Xai Bandala"
                  width={144}
                  height={144}
                  priority
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 128px, 144px"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </AnimatedContent>
          {/* About Me Text-only Section (animated) */}
          <AnimatedContent distance={70} duration={0.8} ease="power3.out" threshold={0.2}>
            <section className="w-full max-w-5xl mx-auto text-left mt-10 md:mt-16">
              <div className="text-white/80 leading-7 md:leading-8 text-[15px] sm:text-base md:text-[19px] space-y-5 md:space-y-6">
                <p>
                  I’m a developer passionate about crafting performant, delightful web experiences. I enjoy working across the stack—from building
                  accessible, animated interfaces to designing robust APIs and data layers. I focus on clean architecture, thoughtful UX, and smooth
                  motion to make products feel alive and intuitive.
                </p>
                <p>
                  Recently I’ve been exploring interactive canvases, micro-animations, and edge deployments. When I’m not coding, I’m learning new
                  design patterns, contributing to side projects, or experimenting with web graphics.
                </p>
              </div>
            </section>
          </AnimatedContent>
        </div>
      </ClickSpark>
    </div>
  );
}
