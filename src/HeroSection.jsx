import React, { useState, useEffect } from "react";

import "./HeroSection.css";

const HeroSection = () => {
  const [schemes, setSchemes] = useState(0);
  const [loanCategories, setLoanCategories] = useState(0);
  const [lenders, setLenders] = useState(0);

  useEffect(() => {
    const increment = (setState, target, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setState(start);
        if (start === target) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    increment(setSchemes, 15, 2000);
    increment(setLoanCategories, 7, 2000);
    increment(setLenders, 200, 2000);

 
}, []);

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
              <p className="hero-number">{schemes}</p>
              <p className="hero-label">Schemes</p>
            </div>
            <div>
              <p className="hero-number">{loanCategories}</p>
              <p className="hero-label">Loan Categories</p>
            </div>
            <div>
              <p className="hero-number">{lenders}+</p>
              <p className="hero-label">Lenders on Platform</p>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src="lic.jpg"
              className="hero-image"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
