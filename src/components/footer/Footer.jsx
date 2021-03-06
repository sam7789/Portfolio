import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <footer>
      <section>
        <h5>My Socials</h5>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/ayush--batra/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://www.instagram.com/sam__ayush/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://twitter.com/sam_ayush99"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
          <a href="https://github.com/sam7789" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </section>
      <div className="spacer">
        <p>Made by using React.js❤️</p>
      </div>
    </footer>
  );
}
