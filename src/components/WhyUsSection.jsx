import React, { useEffect } from "react";
import "../Css/WhyUsSection.css";
import { Shield, Award, Users, ThumbsUp } from "lucide-react";

const WhyUsSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section className="why-Us-section">
      <div className="why-Us-container">
        {/* Main Heading Section - Now with horizontal layout */}
        <div className="bright-heading-Us animate-on-load">
          <div className="heading-flex-container">
            <h2>Why Choose Us?</h2>
            <div className="heading-content-Us">
              <p>
                At LIC, we blend decades of trust with innovative solutions to secure your future.
                With unmatched reliability and a nationwide presence, we're here to empower your dreams.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Boxes Section */}
        <div className="stats-boxes-container">
          {/* Experience Box */}
          <div className="stat-box animate-on-load">
            <div className="stat-icon-container">
              <Award className="stat-icon" />
            </div>
            <h3 className="stat-title">Experience</h3>
            <p className="stat-value">21+ Years</p>
            <p className="stat-description">of professional expertise</p>
          </div>

          {/* LIC Policies Box */}
          <div className="stat-box animate-on-load">
            <div className="stat-icon-container">
              <Shield className="stat-icon" />
            </div>
            <h3 className="stat-title">LIC Policies</h3>
            <p className="stat-value">1214+</p>
            <p className="stat-description">policies processed</p>
          </div>

          {/* Satisfied Clients Box */}
          <div className="stat-box animate-on-load">
            <div className="stat-icon-container">
              <ThumbsUp className="stat-icon" />
            </div>
            <h3 className="stat-title">Satisfied Clients</h3>
            <p className="stat-value">900+</p>
            <p className="stat-description">happy customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;