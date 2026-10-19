import { Legend } from "./Legend";
import { BioModal } from "./BioModal";
import { StyledHeadingWords, headingText } from "./StyledHeading";
import { croppedDimensions, imageUrl } from "../sanity/image";
import type { HomePage } from "../sanity/types";

const PHOTO_WIDTH = 1200;

export function About({ content }: { content: HomePage["about"] }) {
  const { photo } = content;
  const natural = croppedDimensions(photo);
  const width = Math.min(PHOTO_WIDTH, natural.width);
  const height = Math.round((natural.height / natural.width) * width);

  return (
    <section className="about" id="about">
      <div className="about__content">
        <div className="about__intro">
          <h2 className="h2">
            <StyledHeadingWords value={content.heading} />
          </h2>
          <Legend
            className="about__legend"
            first={content.legend?.first}
            second={content.legend?.second}
          />
        </div>

        <div className="about__media-container">
          <figure className="about__media-wrapper">
            <img
              className="about__media"
              src={imageUrl(photo).width(width).height(height).url()}
              alt={photo.alt ?? ""}
              width={width}
              height={height}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="about__text-container">
          <p className="paragraph about__text-body">{content.summary}</p>
          <div className="about__link">
            <BioModal
              label={content.linkLabel ?? "Read more"}
              heading={content.bioHeading}
              role={content.bioRole}
              paragraphs={content.bio ?? []}
              ariaLabel={`About ${headingText(content.bioHeading)}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
