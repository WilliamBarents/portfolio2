import React from "react";
import "./Footer.css";
import {
  BsInstagram,
  BsWhatsapp,
  BsGithub,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        William Barents
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.instagram.com/william_barents/?next=%2F"
          target="_blank"
          without
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/WilliamBarents"
          target="_blank"
          without
          rel="noreferrer"
        >
          <BsGithub />
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/william- barents-246669173/"
          target="_blank"
        >
          <BsLinkedin />
        </a>{" "}
        <a
          href="https://wa.me/27611562717"
          target="_blank"
          without
          rel="noreferrer"
        >
          <BsWhatsapp />
        </a>{" "}
        <a href="https://www.youtube.com/@Barents.W" target="_blank">
          <BsYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
