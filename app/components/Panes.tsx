"use client";

import { useState } from "react";
import { StyledHeadingWords, headingText } from "./StyledHeading";
import { ordinal } from "../lib/ordinal";
import type { HomePage } from "../sanity/types";

export function Panes({ principles }: { principles: NonNullable<HomePage["principles"]> }) {
  const [active, setActive] = useState(0);

  return (
    <section className="panes">
      <div className="panes__wrapper">
        {principles.map((p, i) => {
          const title = headingText(p.heading);
          return (
            <div
              key={p._key}
              className={`panes__item${i <= active ? " panes__item--active" : ""}`}
              style={{ marginLeft: `${45 * i}px` }}
            >
              <button
                className="panes__vertical-container"
                onClick={() => setActive(i)}
                aria-label={`Show: ${title}`}
              >
                <p className="panes__index">{ordinal(i)}</p>
                <p className="panes__vertical-title">{title}</p>
              </button>

              <div className="panes__text-wrapper">
                <h2 className="h2 panes__title">
                  <StyledHeadingWords value={p.heading} />
                </h2>
                <p className="paragraph panes__body">{p.body}</p>
              </div>

              <span className="panes__num" aria-hidden="true">
                {ordinal(i)}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
