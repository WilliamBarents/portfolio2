import React from "react";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";

const Socials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/william- barents-246669173/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/WilliamBarents" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.youtube.com/@Barents.W" target="_blank">
        <BsYoutube />
      </a>
    </div>
  );
};

export default Socials;
