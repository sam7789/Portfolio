import "./about.css";
import Me from "../../assets/me-about.png";
// import { FiAward } from "react-icons/fi";

export const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FiAward />
              <h5>Experience</h5>
              <small>3+ Years Work</small>
            </article>

            <article className="about__card">
              <FiAward />
              <h5>Client</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className="about__card">
              <FiAward />
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>
          </div> */}
          <p>
            I am a Fullstack Developer specialized in MERN Stack. I'm proficient
            in working with teams and building interactive web applications.
            Strongly interested in obtaining a developer position to work on
            enhancing product experience. Apart from writing codes, I love to
            discuss about new tech, travel to different places, and write a
            blog.
          </p>
          <h4 className="span-text">Want to know more?</h4>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};
