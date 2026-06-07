"use client";

import { useState } from "react";

const PANES = [
  {
    title: ["Direct ", "access "],
    vertical: "Direct access",
    body: "The lawyer you meet is the lawyer who handles your matter — start to finish. No intake teams, no handoffs, no being passed down to someone junior.",
  },
  {
    title: ["Honest ", "counsel "],
    vertical: "Honest counsel",
    body: "Clear, straightforward advice about where you actually stand — your options, the likely outcomes, and the costs — before you commit to anything.",
  },
  {
    title: ["Personally ", "invested "],
    vertical: "Personally invested",
    body: "As a boutique practice, your result matters to me directly. You get an advocate genuinely committed to the outcome, not a file number at a large firm.",
  },
];

export function Panes() {
  const [active, setActive] = useState(0);

  return (
    <section className="panes">
      <div className="panes__wrapper">
        {PANES.map((p, i) => (
          <div
            key={p.vertical}
            className={`panes__item${i <= active ? " panes__item--active" : ""}`}
            style={{ marginLeft: `${45 * i}px` }}
          >
            <button
              className="panes__vertical-container"
              onClick={() => setActive(i)}
              aria-label={`Show: ${p.vertical}`}
            >
              <p className="panes__index">0{i + 1}</p>
              <p className="panes__vertical-title">{p.vertical}</p>
            </button>

            <div className="panes__text-wrapper">
              <h2 className="h2 panes__title">
                {p.title.map((word, w) => (
                  <span key={w} className={w === 0 ? "italic" : undefined}>
                    {word}
                  </span>
                ))}
              </h2>
              <p className="paragraph panes__body">{p.body}</p>
            </div>

            <span className="panes__num" aria-hidden="true">
              0{i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
