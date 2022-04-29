import "./about.css";
import Me from "../../assets/me-about.jpg";
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
