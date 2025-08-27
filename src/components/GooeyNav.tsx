"use client";

import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./GooeyNav.module.css"; // CSS Module with :global rules

export type GooeyNavItem = {
  label: string;
  href: string;
};

type GooeyNavProps = {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
};

type Particle = {
  start: [number, number];
  end: [number, number];
  time: number;
  scale: number;
  color: number;
  rotate: number;
};

const GooeyNav: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLUListElement | null>(null);
  const filterRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const router = useRouter();

  const noise = (n: number = 1): number => n / 2 - Math.random() * n;

  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i: number, t: number, d: [number, number], r: number): Particle => {
    const rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element: HTMLElement): void => {
    const d = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);

    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");

      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);

        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // ignore
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement): void => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles: Partial<CSSStyleDeclaration> = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = (element.innerText || "").trim();
  };

  const activateIndex = (index: number, liEl: HTMLLIElement): void => {
    if (activeIndex === index) return;
    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current!.removeChild(p));
      filterRef.current.classList.remove("active");
    }

    if (textRef.current) {
      textRef.current.classList.remove("active");
      void textRef.current.offsetWidth; // reflow
      textRef.current.classList.add("active");
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }

    // Clear active state after animation completes
    setTimeout(() => {
      if (navRef.current) {
        const allLis = navRef.current.querySelectorAll('li');
        allLis.forEach(li => li.classList.remove('active'));
      }
      if (filterRef.current) {
        filterRef.current.classList.remove("active");
      }
      if (textRef.current) {
        textRef.current.classList.remove("active");
      }
    }, animationTime * 2 + timeVariance + 100); // Wait for all animations to complete
  };

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

  // const handleClick = (e: React.MouseEvent<HTMLLIElement>, index: number): void => {
  //   e.preventDefault();
  //   const liEl = e.currentTarget;
  //   const item = items[index];
  //   
  //   activateIndex(index, liEl);
  //   
  //   // Handle Home navigation normally, others scroll to sections
  //   if (item.href === '/') {
  //     router.push('/');
  //   } else {
  //     scrollToSection(item.href);
  //   }
  // };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement as HTMLLIElement | null;
      if (liEl) activateIndex(index, liEl);
    }
  };

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex] as HTMLLIElement | undefined;
    if (activeLi) {
      updateEffectPosition(activeLi);
      textRef.current?.classList.add("active");
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll("li")[activeIndex] as HTMLLIElement | undefined;
      if (currentActiveLi) updateEffectPosition(currentActiveLi);
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [activeIndex]);

  // Prefetch all item routes once mounted for snappier transitions
  useEffect(() => {
    items.forEach((it) => {
      try {
        router.prefetch(it.href);
      } catch {}
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.root} gooey-nav-container`} ref={containerRef}>
      <nav>
        <ul
          ref={navRef}
          className="flex items-center gap-8 m-0 p-0"
        >
          {items.map((item, index) => (
            <li
              key={index}
              className={`${activeIndex === index ? "active" : ""} inline-block`}
            >
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const liEl = e.currentTarget.parentElement as HTMLLIElement;
                  const item = items[index];
                  
                  activateIndex(index, liEl);
                  
                  // Handle Home navigation normally, others scroll to sections
                  if (item.href === '/') {
                    router.push('/');
                  } else {
                    scrollToSection(item.href);
                  }
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-current={activeIndex === index ? "page" : undefined}
                className="inline-block px-3 py-2 cursor-pointer"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;
