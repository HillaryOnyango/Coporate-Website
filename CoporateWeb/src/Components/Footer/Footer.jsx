import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  CheckCircle,
} from "lucide-react";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Buy Backlinks</li>
            <li>Digital Marketing</li>
            <li>Product Design</li>
            <li>Web Design</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Industries</h3>
          <ul>
            <li>Accelerators</li>
            <li>eCommerce</li>
            <li>Law Firms</li>
            <li>Non Profits</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Our Story</li>
            <li>Our Team</li>
            <li>Our Work</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Join Our Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="email@domain.com" />
            <p>We will send you a confirmation to validate your email.</p>
            <label>
              <input type="checkbox" />I agree to Madavi handling and storing my
              data. -
              <a href="#" className="privacy-policy">
                Privacy Policy
              </a>
            </label>
            <div className="success-message">
              <CheckCircle size={16} />
              <span>Success!</span>
              <img
                src="/api/placeholder/80/20"
                alt="Cloudflare"
                className="cloudflare-logo"
              />
            </div>
            <button type="submit" className="sign-up-button">
              Sign me up!
            </button>
          </form>
        </div>
      </div>

      <div className="bottom-section">
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Careers</li>
            <li>Reports</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Products</h3>
          <ul>
            <li>Fitalyf</li>
            <li>Madavigro</li>
            <li>Omnichannel Africa</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Locations</h3>
          <ul>
            <li>Kenya</li>
            <li>Rwanda</li>
            <li>United States</li>
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
        <Linkedin />
      </div>

      <div className="copyright">
        Copyright © {currentYear} - Madavi Global Inc ©. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
