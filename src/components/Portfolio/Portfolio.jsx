import React from "react";
import "./Portfolio.css";
import AWJewellery1 from "../../assets/A&W Jewellery1.png";
import AWJewellery2 from "../../assets/A&W Jewellery2.png";
import BankAdmin from "../../assets/Bank Admin.png";
import BankLandingPage from "../../assets/Bank Landing Page.png";
import DiceGame from "../../assets/Dice Game.png";
import EmotionDetector from "../../assets/Emotion Detector.png";
import ExpenseTracker1 from "../../assets/Expense Tracker1.png";
import ExpenseTracker2 from "../../assets/Expense Tracker2.png";
import FoodOrderApp1 from "../../assets/Food Order Application1.png";
import FoodOrderApp2 from "../../assets/Food Order Application2.png";
import Forkify from "../../assets/Forkify.png";
import LinkedInClone from "../../assets/LinkedIn Clone.png";
import MapFitnessTracker from "../../assets/Map Fitness Tracker.png";
import MovieList from "../../assets/Movie List.png";
import Natours from "../../assets/Natours.png";
import NetflixClone from "../../assets/Netflix clone.png";
import NumberGuesser from "../../assets/Number Guesser.png";
import Omnifood from "../../assets/Omnifood.png";
import SnakeGame from "../../assets/Snake Game.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: NetflixClone,
      title: "Netflix Clone",
      github: "https://github.com/WilliamBarents/Netflix-1.0-clone",
      demo: "https://netflix-clone-7a616.web.app/",
    },
    {
      id: 2,
      image: LinkedInClone,
      title: "LinkedIn Clone",
      github: "https://github.com/WilliamBarents/linkedin-clone",
      demo: "https://linkedin-clone-b046e.web.app/",
    },
    {
      id: 3,
      image: Omnifood,
      title: "OmniFood",
      github: "https://github.com/WilliamBarents/omnifood",
      demo: "https://omnifood-barents.netlify.app/",
    },
    {
      id: 4,
      image: Forkify,
      title: "Recipe Application",
      github: "https://github.com/WilliamBarents/forkify",
      demo: "https://william-barents-food-app.netlify.app/",
    },
    {
      id: 5,
      image: MapFitnessTracker,
      title: "Fitness Geo Tracker",
      github: "https://github.com/WilliamBarents/mapTracker",
      demo: "https://williambarents-map-tracker.netlify.app",
    },
    {
      id: 6,
      image: Natours,
      title: "Tour Website",
      github: "https://github.com/WilliamBarents/NatureTours",
      demo: "https://wbnatuors.netlify.app",
    },
    {
      id: 7,
      image: AWJewellery2,
      title: "A&W Jewellery",
      github: "https://github.com/WilliamBarents/a-w-jewelry",
      demo: null,
    },
  ];

  const portfolioData = data.map((portfolio) => (
    <article className="portfolio__item" key={portfolio.id}>
      <div className="portfolio__item-image">
        <img src={portfolio.image} alt={portfolio.title} />
      </div>
      <h3>{portfolio.title}</h3>
      <div className="portfolio__item-cta">
        <a href={portfolio.github} className="btn" target="_blank">
          Github
        </a>
        {portfolio.demo && (
          <a
            href={portfolio.demo}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </article>
  ));

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">{portfolioData}</div>
    </section>
  );
};

export default Portfolio;
