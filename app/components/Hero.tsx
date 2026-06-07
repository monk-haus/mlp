"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "./gsap";
import { Legend } from "./Legend";
import { ArrowLink } from "./ArrowLink";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero__word", {
        yPercent: 120,
        duration: 1.1,
        stagger: 0.08,
        delay: 0.15,
      });

      const split = new SplitText(".hero__paragraph", { type: "lines" });
      tl.from(
        split.lines,
        { yPercent: 100, opacity: 0, duration: 0.8, stagger: 0.07 },
        "-=0.6"
      ).from(".hero__cta", { opacity: 0, y: 14, duration: 0.7 }, "-=0.3");

      return () => split.revert();
    },
    { scope: root }
  );

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__content">
        <div className="hero__content-grid">
          <div className="hero__wrapper">
            <h1 className="h1 hero__headline h1--large">
              <span className="hero__line">
                <span className="hero__word italic">People </span>
                <span className="hero__word">first, </span>
              </span>
              <span className="hero__line">
                <span className="hero__word">always</span>
              </span>
            </h1>
            <Legend
              className="hero__legend"
              first="Civil Litigation & Advocacy"
              second="Ontario · California"
            />
          </div>

          <div className="hero__text">
            <p className="paragraph hero__paragraph">
              MLP is a boutique Ontario practice built on a simple principle:
              the lawyer you meet is the lawyer who handles your matter. No
              layers, no handoffs — just clear, honest counsel and an advocate
              who is personally invested in your result, across nearly every
              civil need.
            </p>
            <div className="hero__cta">
              <ArrowLink href="#expertise">Areas of practice</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
