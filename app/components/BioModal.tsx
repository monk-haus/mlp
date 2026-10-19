"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMountEffect } from "../hooks/useMountEffect";
import { lockBodyScroll, unlockBodyScroll } from "../lib/scrollLock";
import { StyledHeadingWords } from "./StyledHeading";
import type { StyledHeading } from "../sanity/types";

export function BioModal({
  label,
  heading,
  role,
  paragraphs,
  ariaLabel,
}: {
  label: string;
  heading?: StyledHeading;
  role?: string;
  paragraphs: string[];
  ariaLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useMountEffect(() => setMounted(true));

  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const openModal = () => {
    setOpen(true);
    lockBodyScroll();
    requestAnimationFrame(() => closeRef.current?.focus());
  };
  const close = () => {
    setOpen(false);
    unlockBodyScroll();
    triggerRef.current?.focus();
  };

  const overlay = (
    <div
      className={`bio${open ? " bio--open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
      aria-hidden={!open}
      onKeyDown={(e) => e.key === "Escape" && close()}
    >
      <button
        type="button"
        className="bio__aside"
        aria-label="Close"
        onClick={close}
      >
        <h2 className="h2 bio__name">
          <StyledHeadingWords value={heading} />
        </h2>
        {role && <p className="bio__role">{role}</p>}
      </button>

      <div className="bio__content">
        <button
          ref={closeRef}
          type="button"
          className="bio__close"
          aria-label="Close"
          onClick={close}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M5 5l14 14M19 5L5 19"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="bio__scroll">
          {paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button ref={triggerRef} type="button" className="link" onClick={openModal}>
        <div className="link__indicator-wrapper">
          <span className="link__indicator" />
        </div>
        <span>{label}</span>
      </button>

      {mounted ? createPortal(overlay, document.body) : overlay}
    </>
  );
}
