"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function SiteMotion({ children }: Props) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const didMount = useRef(false);

  useEffect(() => {
    const finishLoading = () => {
      requestAnimationFrame(() => setIsLoading(false));
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => window.removeEventListener("load", finishLoading);
  }, []);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    if (prefersReducedMotion()) return;

    setIsTransitioning(true);
    const timer = window.setTimeout(() => setIsTransitioning(false), 260);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      document.documentElement.classList.add("motion-reduced");
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        "main > section, main article, main [data-motion-reveal], footer",
      ),
    );

    revealItems.forEach((item, index) => {
      item.classList.add("motion-reveal");
      item.dataset.motionVariant =
        index % 3 === 0 ? "fade-up" : index % 3 === 1 ? "fade-in" : "slide-soft";

      const childrenToStagger = Array.from(
        item.querySelectorAll<HTMLElement>(
          "h1, h2, h3, p, a, button, li, form, .motion-stagger-target",
        ),
      ).filter((child) => !child.closest("nav"));

      childrenToStagger.slice(0, 14).forEach((child, childIndex) => {
        child.classList.add("motion-child");
        child.style.setProperty("--motion-delay", `${childIndex * 65}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    const images = Array.from(
      document.querySelectorAll<HTMLImageElement>(
        "main img:not([src*='mismar-logo']), footer img:not([src*='mismar-logo'])",
      ),
    );

    images.forEach((image) => {
      image.classList.add("motion-image");
      image.style.setProperty("--motion-y", "0px");
    });

    let ticking = false;

    const updateImageMotion = () => {
      ticking = false;
      const viewportCenter = window.innerHeight / 2;

      images.forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const imageCenter = rect.top + rect.height / 2;
        const offset = Math.max(
          -18,
          Math.min(18, (viewportCenter - imageCenter) * 0.035),
        );

        image.style.setProperty("--motion-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestImageMotion = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateImageMotion);
    };

    updateImageMotion();
    window.addEventListener("scroll", requestImageMotion, { passive: true });
    window.addEventListener("resize", requestImageMotion);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestImageMotion);
      window.removeEventListener("resize", requestImageMotion);
      document.documentElement.classList.remove("motion-ready");
    };
  }, [pathname]);

  return (
    <>
      <div
        className={`site-loader ${isLoading ? "is-active" : ""}`}
        aria-hidden={!isLoading}
      >
        <img src="/images/mismar-logo.png" alt="" />
      </div>

      <div
        className={`page-transition ${isTransitioning ? "is-active" : ""}`}
        aria-hidden="true"
      />

      {children}
    </>
  );
}
