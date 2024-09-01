import React from "react";
import "./engage.css";
import EngageImage from "../../assets/engage.jpg";

function Engage() {
  return (
    <div className="engage-section">
      <div className="engage-content">
        <h2>
          Let's create something unforgettable <span>together.</span>
        </h2>
        <p>
          Madavi is an independent communications, creative content, and digital
          marketing agency that finds and tells the stories of companies like
          yours to capture imaginations, spark conversations, and make good
          things happen in the world.
        </p>
        <p>
          By working with Madavi to build your website and online presence, you
          can focus on what you’re good at—running your business—while we take
          care of what you need to do: growing your online visibility.
        </p>
        <button className="engage-btn">Engage Our Experts</button>
      </div>
      <div className="engage-image">
        <img src={EngageImage} alt="Engage Section" />
      </div>
    </div>
  );
}

export default Engage;
