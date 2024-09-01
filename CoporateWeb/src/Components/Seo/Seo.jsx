import React, { useState } from "react";
import "./Seo.css";

function Seo() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Submitted:", { url, email });
  };

  return (
    <div className="seo-container">
      <div className="seo-card">
        <h1 className="seo-title">
          Check my website <span className="seo-highlight">SEO</span>
          <br />
          <span className="seo-highlight">Score.</span>
        </h1>
        <p className="seo-description">
          Enter the URL of any landing page or blog article and see how
          optimised it is overall.
        </p>
        <h2 className="seo-subtitle">Get My Free Website Audit</h2>
        <form onSubmit={handleSubmit} className="seo-form">
          <input
            type="text"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="seo-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="seo-input"
          />
          <p className="seo-disclaimer">
            The information you provide on this form will be used to be in touch
            with you and to provide updates and marketing.
          </p>
          <button type="submit" className="seo-button">
            Scan Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Seo;
