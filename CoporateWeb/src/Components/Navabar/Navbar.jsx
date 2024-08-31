import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">madavi</div>
        <div className="navbar-links">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#our-work">Our Work</a>
          <a href="#resources">Resources</a>
        </div>
        <button className="navbar-cta">Get A Proposal</button>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isOpen && (
        <div className="navbar-mobile">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#our-work">Our Work</a>
          <a href="#resources">Resources</a>
          <button className="navbar-cta mobile">Get A Proposal</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
