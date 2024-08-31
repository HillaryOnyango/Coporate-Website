import React from "react";
import "./hero.css";
import backgroundImage from "";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          We Turn Web Traffic into <span>Treasure.</span>
        </h1>
        <p>
          Madavi Agency's Goal is to Enhance Your Online Presence and Engagement
          with Data-Driven SEO Campaigns.
        </p>
        <div className="hero-buttons">
          <button className="btn engage-btn">Engage Us</button>
          <button className="btn audit-btn">Get A Free SEO Audit</button>
        </div>
        <div className="hero-image">
          <img src={backgroundImage} alt="Hero Background" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
