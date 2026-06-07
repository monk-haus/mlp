"use client";

import { useRef } from "react";
import { useGSAP, ScrollTrigger } from "./gsap";

export function Legend({
  first,
  second,
  className = "",
}: {
  first?: string;
  second?: string;
  className?: string;
}) {
  const el = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: el.current,
      start: "top 85%",
      onEnter: () => el.current?.classList.add("legend--active"),
    });
  });

  return (
    <div ref={el} className={`legend ${className}`}>
      <span className="legend__text legend__text--first">{first}</span>
      <span className="legend__text legend__text--second">{second}</span>
    </div>
  );
}
