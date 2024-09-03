import React from "react";
import "./marketing.css";

function Marketing() {
  return (
    <div className="marketing-container">
      <div className="marketing-text">
        <h1>One marketing stack.</h1>
        <h2>All under your control.</h2>
        <p>
          We integrate your marketing tools, including CMS and CRM, into a
          cohesive ecosystem and help you leverage technology through
          automation, dynamic content, and behavior tracking to streamline your
          marketing efforts.
        </p>
      </div>

      <div className="marketing-logos">
        <div className="central-logo">
          <img src="../../assets/marketing0.png" alt="Modavi Logo" />
        </div>
        <div className="connected-logos">
          <div className="logo-item">
            <img src="../../assets/marketing1.png" alt="HubSpot Logo" />
          </div>
          <div className="logo-item">
            <img src="../../assets/marketing3.png" alt="PayPal Logo" />
          </div>
          <div className="logo-item">
            <img src="../../assets/marketing5.png" alt="Samsung Pay Logo" />
          </div>
          {/* Add more logos as necessary */}
        </div>
      </div>
    </div>
  );
}

export default Marketing;
