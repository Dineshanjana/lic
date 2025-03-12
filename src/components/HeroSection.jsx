import React, { useState, useEffect } from "react";
import '../Css/HeroSection.css';
import { Shield, Heart, Coins, Wallet } from 'lucide-react';
import LicImg from '../assets/img/vishal-img.jpg';

const HeroSection = () => {
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

  const licQuotes = [
    { number: "1.5 Cr+", label: "Families Protected" },
    { number: "70+ Years", label: "of Trust" },
    { number: "2000+", label: "Plans Available" }
  ];

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to 
            <span className="scribble-highlight">
              Vishal LIC
            </span>
            , Your Path to a Secure Future!
          </h1>
          <p className="hero-description">
            Vishal LIC – Your trusted LIC advisor, providing expert guidance on a variety of LIC plans to secure your future. 
            Get personalized roadmaps and complete assistance to choose the best policy for your needs. Plan smart, live secure!
          </p>
          <div className="lic-slogan">
            <span className="sanskrit-quote">योगक्षेमं वहाम्यहम्</span>
            <span className="slogan-meaning">आपकी सुरक्षा, हमारी जिम्मेदारी</span>
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
            <img src={LicImg} className="hero-image" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;