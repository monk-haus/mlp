import { Legend } from "./Legend";
import { ArrowLink } from "./ArrowLink";

const AREAS = [
  {
    name: "Real Estate",
    desc: "Purchases, sales, and the agreements behind residential and commercial property.",
  },
  {
    name: "Business & Commercial",
    desc: "Contracts, disputes, and the day-to-day legal needs of running a business.",
  },
  {
    name: "Transactional",
    desc: "Drafting, reviewing, and negotiating the agreements behind your deals.",
  },
  {
    name: "Immigration",
    desc: "Applications and guidance through Canada's immigration processes.",
  },
  {
    name: "Employment",
    desc: "Workplace disputes, wrongful dismissal, and the rights of employees.",
  },
];

export function Expertise() {
  return (
    <section className="practice" id="expertise">
      <div className="practice__grid">
        <div className="practice__intro">
          <h2 className="h2">
            <span className="italic">Expertise </span>
          </h2>
          <Legend
            className="practice__legend"
            first="Civil practice"
            second="Across Ontario"
          />
          <p className="paragraph practice__body">
            Maya handles most civil matters for Ontario clients — from business
            and commercial disputes to employment and beyond. As a boutique
            practice, you get focused attention on your matter, whatever its
            size.
          </p>
          <ArrowLink href="#footer">Discuss your matter</ArrowLink>
        </div>

        <ul className="practice__list">
          {AREAS.map((area, i) => (
            <li className="practice__item" key={area.name}>
              <span className="practice__num">0{i + 1}</span>
              <div className="practice__text">
                <h3 className="practice__name">{area.name}</h3>
                <p className="practice__desc">{area.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
