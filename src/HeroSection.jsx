import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            National Portal for Credit-Linked Government Schemes
          </h1>
          <p className="hero-description">
            One-stop digital portal linking Government Schemes. Check your
            eligibility, apply online and get digital approval.
          </p>
          <div className="hero-stats">
            <div>
              <p className="hero-number">15</p>
              <p className="hero-label">Schemes</p>
            </div>
            <div>
              <p className="hero-number">7</p>
              <p className="hero-label">Loan Categories</p>
            </div>
            <div>
              <p className="hero-number">200+</p>
              <p className="hero-label">Lenders on Platform</p>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="lic.jpg"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
