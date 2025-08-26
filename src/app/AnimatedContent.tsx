"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimatedContentProps = {
  children: React.ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
};

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    type Axis = "x" | "y";
    const axis: Axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    type LocalScrollTriggerVars = {
      trigger: Element | null;
      start: string;
      toggleActions: string;
      once?: boolean;
    };
    type LocalTweenWithAxis = Partial<Record<Axis, number>> & {
      scale?: number;
      opacity?: number;
      duration?: number;
      ease?: string;
      delay?: number;
      onComplete?: () => void;
      scrollTrigger?: LocalScrollTriggerVars;
    };

    const setVars: LocalTweenWithAxis = {
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      [axis]: offset,
    };
    gsap.set(el, setVars);

    const toVars: LocalTweenWithAxis = {
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete,
      scrollTrigger: {
        trigger: el,
        start: `top ${startPct}%`,
        toggleActions: "play none none none",
        once: true,
      },
      [axis]: 0,
    };
    const tween: gsap.core.Tween = gsap.to(el, toVars);

    tweenRef.current = tween;
    triggerRef.current = tween.scrollTrigger ?? null;

    return () => {
      tweenRef.current?.kill();
      triggerRef.current?.kill();
      tweenRef.current = null;
      triggerRef.current = null;
      gsap.killTweensOf(el);
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;
