import React, { useEffect } from "react";
import "../Css/WhyLicSection.css";
import { Shield } from "lucide-react";

const WhyLicSection = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section className="why-lic-section">
      <div className="why-lic-container">
        <div className="why-lic-header animate-on-load">
          <h2>Why Choose LIC?</h2>
          <p>LIC – Trust, Security, and a Legacy of Protection!</p>
        </div>

        <div className="why-lic-content">
          <div className="combined-card animate-on-load">
            <div className="card-content-wrapper">
              {/* Left Section (Strength Stats) */}
              <div className="strength-section">
                <div className="icon-container">
                  <Shield className="strength-icon" />
                </div>
                <h3>68 years of Trust</h3>
                <div className="stats-grid">
                  <div className="stat-item animate-on-load">
                    <h4>Policies Issued</h4>
                    <p>2.04 Cr.</p>
                  </div>
                  <div className="stat-item animate-on-load">
                    <h4>1st Yr. Premium Income</h4>
                    <p>₹ 2,22,522 Cr.</p>
                  </div>
                  <div className="stat-item animate-on-load">
                    <h4>Policy Market Share</h4>
                    <p>69.91%</p>
                  </div>
                </div>
                <p className="source-text">*As per LIC Report FY. 2023-24</p>
              </div>

              {/* Right Section (Claim Performance) */}
              <div className="claim-section">
                <h3>Claim Performance</h3>
                <div className="claim-stats">
                  <div className="claim-item animate-on-load">
                    <div className="claim-circle pulse">
                      <span>93.48%</span>
                    </div>
                    <p>Claim settlement</p>
                  </div>
                  <div className="claim-item animate-on-load">
                    <div className="claim-circle pulse">
                      <span>2.21 Cr.</span>
                    </div>
                    <p>No. of Claims Settled</p>
                  </div>
                  <div className="claim-item animate-on-load">
                    <div className="claim-circle pulse">
                      <span>₹ 230,272 Cr.</span>
                    </div>
                    <p>Claims paid</p>
                  </div>
                </div>
                <p className="source-text">*As per LIC Report FY. 2023-24</p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="benefits-section animate-on-load">
              <h3 className="benefits-heading">Our Commitment to You</h3>
              <div className="benefits-list">
                <div className="benefit-item">Trust & Legacy – Serving India since 1956 with unmatched reliability.</div>
                <div className="benefit-item">Government-Backed – India’s most trusted life insurer.</div>
                <div className="benefit-item">Wide Range of Plans – Protection, savings, retirement, and more.</div>
                <div className="benefit-item">Guaranteed Benefits – Secure payouts with strong financial backing.</div>
                <div className="benefit-item">Extensive Network – Over 2,000 branches and millions of agents across India.</div>
                <div className="benefit-item">Customer-Centric Services – Easy claims, policy loans, and flexible premium options.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLicSection;