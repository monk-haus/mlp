"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "./gsap";

export function Intro() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to(".intro__logo", {
        scale: 0.22,
        yPercent: -190,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".intro__scroll", {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "20% top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section className="intro" id="intro" ref={root}>
      <img className="intro__logo" src="/img/logo.png" alt="Maya Law Practice" />
      <div className="intro__scroll">
        <div className="hero__scroll">
          <span className="hero__scroll-text paragraph">Scroll</span>
          <div className="hero__scroll-indicator-wrapper">
            <div className="hero__scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  );
}
