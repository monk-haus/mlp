"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useMountEffect } from "../hooks/useMountEffect";
import { lockBodyScroll, unlockBodyScroll } from "../lib/scrollLock";

export function BioModal() {
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
      aria-label="About Maya Hussein"
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
          <span className="italic">Maya </span>
          <span>Hussein</span>
        </h2>
        <p className="bio__role">Principal Lawyer · MLP</p>
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
          <p>
            Maya Hussein is a dual-licensed lawyer, called to the bar in Ontario
            and admitted to practise in California. Since 2020 she has practised
            in the United States, representing consumers, employees, and
            plaintiffs in class action litigation against some of the largest
            corporations in the country — holding them to account for
            exploitative practices and confronting corporate misconduct. Her
            motion practice has helped shape California employment law, producing
            rulings that have set precedent for later cases, and she has secured
            settlements worth millions of dollars for the workers and consumers
            she represents.
          </p>
          <p>
            Through MLP, she brings that same standard to clients in Ontario. Her
            practice spans a broad range of civil matters — business and
            commercial, transactional, immigration, landlord and tenant, and
            employment disputes — covering nearly every civil need. As a boutique
            firm, MLP offers what larger practices often cannot: direct access to
            the lawyer handling your matter, clear and honest counsel, and an
            advocate who is personally invested in your result.
          </p>
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
        <span>Read more</span>
      </button>

      {mounted ? createPortal(overlay, document.body) : overlay}
    </>
  );
}
