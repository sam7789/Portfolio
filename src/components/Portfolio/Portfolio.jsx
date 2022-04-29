import "./portfolio.css";
import { projects } from "./projects";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((e) => (
          <article className="portfolio__item" key={e.id}>
            <div className="portfolio__item-image">
              <img src={e.image} alt="ProjectImage" />
            </div>
            <h3>{e.title}</h3>
            <p>{e.info}</p>
            <div className="portfolio__item-cta">
              <a
                href={e.github}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Github
              </a>
              <a
                href={e.demo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
