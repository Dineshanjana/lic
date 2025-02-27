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
          Empowering You with Credit-Linked Government Schemes

        </h1>
          <p className="hero-description">Welcome! I’m Vishal, committed to helping you navigate and access government-backed financial assistance with ease. Our digital portal ensures a seamless experience—check your eligibility, apply online, and receive instant digital approval.Discover a seamless way to access government-backed financial assistance. Our all-in-one digital portal simplifies the process—check eligibility, apply online, and receive instant digital approval.
          </p>
          <div className="hero-stats">
            <div>
              <p className="hero-number">{schemes}</p>
              <p className="hero-label"> Government Schemes</p>
            </div>
            <div>
              <p className="hero-number">{loanCategories}</p>
              <p className="hero-label">Loan Categories</p>
            </div>
            <div>
              <p className="hero-number">{lenders}+</p>
              <p className="hero-label">Trusted Lenders</p>
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
