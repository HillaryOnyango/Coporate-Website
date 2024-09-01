import React from "react";
import "./services.css";

function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "Through data-driven marketing campaigns, we find the perfect marketing mix for your brand.",
      color: "blue",
    },
    {
      title: "Product Design",
      description:
        "For your customers, your brand must have a guarantee of quality, consistency and reliability.",
      color: "green",
    },
    {
      title: "Web Design",
      description:
        "Using data and intelligent branding, we build a website that ensures that your visitors convert.",
      color: "pink",
      explore: true,
    },
    {
      title: "Buy Backlinks",
      description: "",
      color: "purple",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="services-title">
        Our Services<span className="services-dot">.</span>
      </h2>
      <p className="services-description">
        From creative expression to online strategy, we are committed and able
        to transform brilliant ideas into brilliant digital products and
        campaigns.
      </p>
      <div className="services-stats">
        <div className="stat-item">
          <h3>60+</h3>
          <p>Websites created</p>
        </div>
        <div className="stat-item">
          <h3>10m+</h3>
          <p>In seo traffic</p>
        </div>
        <div className="stat-item">
          <h3>$1m</h3>
          <p>In revenues</p>
        </div>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.color}`}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {service.explore && (
              <a href="#" className="explore-link">
                Explore →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
