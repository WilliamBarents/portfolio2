import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/me2.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>William Barents</h1>
        <h5 className="class-light">Front-End Developer</h5>
        <CTA />

        <Socials />

        <div className="me">
          <img src={ME} alt="Profile Picture" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
