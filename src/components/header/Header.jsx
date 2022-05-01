import { CTA } from "./CTA";
import ME from "../../assets/me12.png";

import "./header.css";
import { HeaderSocial } from "./HeaderSocial";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h4>
          Hello <span className="wave">👋</span> , I'm
        </h4>
        <h1>Ayush Batra</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img className="megif" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
}

export default Header;
