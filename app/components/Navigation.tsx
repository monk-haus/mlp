"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP, ScrollTrigger } from "./gsap";
import { lockBodyScroll, unlockBodyScroll } from "../lib/scrollLock";

const LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#footer" },
];

export function Navigation() {
  const nav = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const setMenu = (open: boolean) => {
    setMenuOpen(open);
    nav.current?.classList.toggle("navigation--menu-open", open);
    if (open) lockBodyScroll();
    else unlockBodyScroll();
  };

  useGSAP(() => {
    ScrollTrigger.create({
      start: 1,
      end: "max",
      onUpdate: (self) =>
        nav.current?.classList.toggle("navigation--solid", self.scroll() > 40),
    });

    ScrollTrigger.create({
      trigger: "#intro",
      start: "bottom top+=110",
      onEnter: () => nav.current?.classList.add("navigation--branded"),
      onLeaveBack: () => nav.current?.classList.remove("navigation--branded"),
    });
  });

  return (
    <>
      <nav
        ref={nav}
        className="navigation"
        onKeyDown={(e) => e.key === "Escape" && setMenu(false)}
      >
        <div className="navigation__inner">
          <a
            className="navigation__brand"
            href="#top"
            aria-label="Maya Law Practice — home"
          >
            <Image
              className="navigation__logo"
              src="/img/logo.png"
              alt="Maya Law Practice"
              width={2238}
              height={819}
              priority
            />
          </a>

          <ul className="navigation__list">
            {LINKS.map((l) => (
              <li key={l.label} className="navigation__list-item">
                <a className="navigation__link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="navigation__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenu(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`navigation__menu${
          menuOpen ? " navigation__menu--open" : ""
        }`}
        aria-hidden={!menuOpen}
        onKeyDown={(e) => e.key === "Escape" && setMenu(false)}
      >
        <ul className="navigation__menu-list">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenu(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="navigation__menu-contact">
          <a href="mailto:mlp@mlawpractice.com">mlp@mlawpractice.com</a>
          <a href="tel:+16138623449">613-862-3449</a>
        </div>
      </div>
    </>
  );
}
