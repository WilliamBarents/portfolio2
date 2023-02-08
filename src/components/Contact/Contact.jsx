import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1720hqi",
      "template_5znpncc",
      form.current,
      "L0XvsLSYuy1d0PZH4"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>wbarents84@gmail.com</h5>
            <a
              href="mailto:wbarents84@gmail.com?subject=Frontend Developer Position Sent From Personal Website"
              target="_blank"
              without
              rel="noreferrer"
            >
              Send a email
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>william_barents</h5>
            <a
              href="https://www.instagram.com/william_barents/?next=%2F"
              target="_blank"
              without
              rel="noreferrer"
            >
              Send a message on Instagram
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatAapp</h4>
            <h5>+27 (61) 156 2717</h5>
            <a
              href="https;//api.whatsapp.com/send?phone=+27611562717"
              target="_blank"
            >
              Send a whatsapp
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
