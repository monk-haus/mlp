"use client";

import { useRef } from "react";
import { gsap, useGSAP, SplitText } from "./gsap";
import { Legend } from "./Legend";
import { ArrowLink } from "./ArrowLink";
import { StyledHeadingWords } from "./StyledHeading";
import type { HomePage } from "../sanity/types";

export function Hero({ content }: { content: HomePage["hero"] }) {
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
              {content.headline.map((line) => (
                <span key={line._key} className="hero__line">
                  <StyledHeadingWords value={line} wordClassName="hero__word" />
                </span>
              ))}
            </h1>
            <Legend
              className="hero__legend"
              first={content.legend?.first}
              second={content.legend?.second}
            />
          </div>

          <div className="hero__text">
            <p className="paragraph hero__paragraph">{content.intro}</p>
            <div className="hero__cta">
              <ArrowLink href="#expertise">{content.ctaLabel}</ArrowLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
