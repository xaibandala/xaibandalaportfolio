"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Note: SplitText is a GSAP bonus plugin. This import works with gsap trial or Club GreenSock.
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

export type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number; // milliseconds between stagger items
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number; // 0..1 viewport percentage
  rootMargin?: string; // e.g. "-100px"
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
  useScrollTrigger?: boolean; // when false, animate immediately on mount
};

export default function SplitText({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
  useScrollTrigger = true,
}: SplitTextProps) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const animationCompletedRef = useRef(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current || !text) return;

    const el = ref.current as HTMLElement;

    animationCompletedRef.current = false;

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    // Define a minimal SplitText shape to avoid 'any'
    type SplitTextInstance = {
      chars?: HTMLElement[];
      words?: HTMLElement[];
      lines?: HTMLElement[];
      revert: () => void;
    };
    type SplitTextCtor = new (
      el: HTMLElement,
      opts: { type: "chars" | "words" | "lines"; absolute?: boolean; linesClass?: string }
    ) => SplitTextInstance;

    let splitter: SplitTextInstance | null = null;
    try {
      const Ctor = (GSAPSplitText as unknown as SplitTextCtor);
      splitter = new Ctor(el, {
        type: splitType,
        absolute: absoluteLines,
        linesClass: "split-line",
      });
    } catch (error: unknown) {
      console.error("Failed to create SplitText:", error);
      return () => {};
    }

    let targets: HTMLElement[] = [];
    switch (splitType) {
      case "lines":
        targets = splitter?.lines ?? [];
        break;
      case "words":
        targets = splitter?.words ?? [];
        break;
      case "chars":
      default:
        targets = splitter?.chars ?? [];
    }

    if (!targets || targets.length === 0) {
      console.warn("No targets found for SplitText animation");
      splitter.revert();
      return () => {};
    }

    targets.forEach((t) => {
      t.style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
    const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
    const marginUnit = marginMatch ? (marginMatch[2] || "px") : "px";
    const sign = marginValue < 0 ? `-=${Math.abs(marginValue)}${marginUnit}` : `+=${marginValue}${marginUnit}`;
    const start = `top ${startPct}%${sign}`;

    const tl: ReturnType<typeof gsap.timeline> = gsap.timeline({
      ...(useScrollTrigger
        ? {
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: "play none none none",
              once: true,
              onToggle: (self: ScrollTrigger) => {
                scrollTriggerRef.current = self;
              },
            },
          }
        : {}),
      smoothChildTiming: true,
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(targets, {
          ...to,
          clearProps: "willChange",
          immediateRender: true,
        });
        onLetterAnimationComplete?.();
      },
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      scrollTriggerRef.current?.kill();
      scrollTriggerRef.current = null;
      gsap.killTweensOf(targets);
      splitter?.revert();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
    useScrollTrigger,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline-block",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
}