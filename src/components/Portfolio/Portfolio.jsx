import "./portfolio.css";
import { projects } from "./projects";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((e) => (
          <div className="portfolio__item" key={e.id}>
            <div className="card">
              <div className="portfolio__item-top">
                <img src={e.image} alt="img" />
                <h3 className="card-title">{e.title}</h3>
                <small>{e.info}</small>
              </div>
              <div className="portfolio__item-back">
                <h5>Tech Stack Used</h5>
                <div className="tech-stack">
                  {e.techstack.map((e, i) => (
                    <span key={i}>{e}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={e.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              {e.demo ? (
                <a
                  href={e.demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
