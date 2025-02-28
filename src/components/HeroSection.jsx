import React, { useState, useEffect } from "react";
import '../Css/HeroSection.css';
import { Shield, Heart, Coins, Wallet } from 'lucide-react';

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

  const benefits = [
    {
      icon: <Shield size={24} />,
      title: "Financial Protection",
      position: { top: "-40px", right: "20px" },
      mobilePosition: { top: "-50px", left: "10px" }
    },
    {
      icon: <Heart size={24} />,
      title: "Family Security",
      position: { top: "40px", right: "-80px" },
      mobilePosition: { top: "-70px", right: "10px" }
    },
    {
      icon: <Coins size={24} />,
      title: "Tax Benefits",
      position: { bottom: "40px", right: "-40px" },
      mobilePosition: { bottom: "-50px", right: "10px" }
    },
    {
      icon: <Wallet size={24} />,
      title: "Wealth Growth",
      position: { bottom: "-40px", right: "60px" },
      mobilePosition: { bottom: "-70px", left: "10px" }
    }
  ];

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to 
            <span className="scribble-highlight">
              Vishal LIC
              <svg className="scribble-circle" viewBox="0 0 250 80" xmlns="http://www.w3.org/2000/svg">
                <path d="M19,50 C15,15 100,5 125,15 C190,25 235,15 235,40 C235,65 190,75 125,65 C60,55 15,65 15,40 Z"
                  fill="none" stroke="#ffc300" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            , Your Path to a Secure Future!
          </h1>
          <p className="hero-description">
            Vishal LIC – Your trusted LIC advisor, providing expert guidance on a variety of LIC plans to secure your future. 
            Get personalized roadmaps and complete assistance to choose the best policy for your needs. Plan smart, live secure!
          </p>
          <div className="hero-stats">
            <div>
              <p className="hero-number">{schemes}</p>
              <p className="hero-label">Government Schemes</p>
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
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="floating-benefit-card"
              data-position={`pos-${index}`}
            >
              <div className="benefit-icon-circle">
                {benefit.icon}
              </div>
              <span className="benefit-title">{benefit.title}</span>
            </div>
          ))}
          <div className="hero-image-wrapper">
            <img src="/src/Assets/img/lic.jpg" className="hero-image" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;