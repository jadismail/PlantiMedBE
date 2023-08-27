import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Green Oasis Awaits</h1>
        <p>
          Welcome to PlantiMed, your ultimate plant care companion. Immerse
          yourself in the world of botanical wonders as we help you cultivate a
          lush and thriving oasis right in your own space. Whether you're a
          novice nurturing your first succulent or an experienced gardener
          seeking advanced tips, our platform is designed to cater to every
          level of expertise.
        </p>
        <Link to="/plants" className="cta-button">
          Explore Plants
        </Link>
      </div>
      <div className="hero-image">
        <img
          src="https://th.bing.com/th/id/R.10cf342e729e8710b7188476ec2c0921?rik=7aKUvKPytOuB%2bA&pid=ImgRaw&r=0"
          alt="Nature Hero"
        />
      </div>
    </section>
  );
}

export default Hero;
