import { Legend } from "./Legend";
import { BioModal } from "./BioModal";

export function About() {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <div className="about__intro">
          <h2 className="h2">
            <span className="italic">Meet </span>
            <span>Maya </span>
          </h2>
          <Legend
            className="about__legend"
            first="Maya Hussein"
            second="Principal Lawyer"
          />
        </div>

        <div className="about__media-container">
          <figure className="about__media-wrapper">
            <img
              className="about__media"
              src="/img/maya.webp"
              alt="Maya Hussein"
              width={1200}
              height={1670}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="about__text-container">
          <p className="paragraph about__text-body">
            Maya Hussein is a dual-licensed lawyer with a background in U.S.
            class-action litigation against large corporations. At MLP, she
            handles most civil matters for Ontario clients and offers
            straightforward advice and direct access throughout.
          </p>
          <div className="about__link">
            <BioModal />
          </div>
        </div>
      </div>
    </section>
  );
}
