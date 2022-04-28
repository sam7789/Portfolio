import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export const HeaderSocial = () => {
  return (
    <div>
      <div className="header__socials">
        <a
          href="https://www.linkedin.com/in/ayush--batra/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/sam7789" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};
