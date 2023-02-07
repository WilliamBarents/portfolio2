import React from "react";
import "./About.css";
import me from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>A Little</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I am a Front-End Developer located in the wild lands of South
            Africa. I have an obsession with creating an amazing UI experience
            for the customer.
          </p>

          <p>
            Organised, problem solver and creative person who pays high
            attention to detail is what I aspire. I am a huge fan of creating
            YouTube videos and exploring the under water world.
          </p>
          <p>
            I am interested in the entire frontend spectrum and working on
            ambitious projects with positive people.
          </p>
          <p>
            <span>Let’s make something amazing.</span>
          </p>
          <a href="#contact" className="btn btn-primary">
            Thats Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
