import { Legend } from "./Legend";
import { ArrowLink } from "./ArrowLink";
import { StyledHeadingWords } from "./StyledHeading";
import { ordinal } from "../lib/ordinal";
import type { HomePage } from "../sanity/types";

export function Expertise({ content }: { content: HomePage["expertise"] }) {
  return (
    <section className="practice" id="expertise">
      <div className="practice__grid">
        <div className="practice__intro">
          <h2 className="h2">
            <StyledHeadingWords value={content.heading} />
          </h2>
          <Legend
            className="practice__legend"
            first={content.legend?.first}
            second={content.legend?.second}
          />
          {content.intro && <p className="paragraph practice__body">{content.intro}</p>}
          {content.ctaLabel && <ArrowLink href="#footer">{content.ctaLabel}</ArrowLink>}
        </div>

        <ul className="practice__list">
          {(content.areas ?? []).map((area, i) => (
            <li className="practice__item" key={area._key}>
              <span className="practice__num">{ordinal(i)}</span>
              <div className="practice__text">
                <h3 className="practice__name">{area.name}</h3>
                {area.description && <p className="practice__desc">{area.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
