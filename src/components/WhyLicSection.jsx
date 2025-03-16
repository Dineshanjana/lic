import React, { useEffect, useRef } from "react";
import "../Css/WhyLicSection.css";
import { Shield, Award, Users, TrendingUp, Check } from "lucide-react";

const WhyLicSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="why-lic-section" ref={sectionRef}>
      <div className="why-lic-container">
        <div className="why-lic-header fade-in">
          <h2>Why Choose LIC?</h2>
          <p>LIC – Trust, Security, and a Legacy of Protection!</p>
        </div>

        <div className="why-lic-content">
          <div className="combined-card">
            {/* Top Stats Row */}
            <div className="stats-highlights fade-in">
              <div className="stat-highlight-item">
                <div className="highlight-number">68</div>
                <div className="highlight-text">Years of Trust</div>
              </div>
              <div className="stat-highlight-item">
                <div className="highlight-number">2.04 Cr.</div>
                <div className="highlight-text">Policies Issued</div>
              </div>
              <div className="stat-highlight-item">
                <div className="highlight-number">69.91%</div>
                <div className="highlight-text">Market Share</div>
              </div>
              <div className="stat-highlight-item">
                <div className="highlight-number">₹ 2.22L Cr.</div>
                <div className="highlight-text">Premium Income</div>
              </div>
            </div>

            {/* Card Content Grid */}
            <div className="card-content-wrapper">
              {/* Strength Stats */}
              <div className="strength-section fade-in">
                <div className="section-header">
                  <Shield className="section-icon" />
                  <h3>Our Strength</h3>
                </div>
                <div className="strength-metrics">
                  <div className="metric-item">
                    <TrendingUp className="metric-icon" />
                    <div className="metric-info">
                      <h4>Financial Security</h4>
                      <p>Backed by Government of India with unmatched stability</p>
                    </div>
                  </div>
                  <div className="metric-item">
                    <Users className="metric-icon" />
                    <div className="metric-info">
                      <h4>Customer Trust</h4>
                      <p>Serving millions of Indians since 1956</p>
                    </div>
                  </div>
                  <div className="metric-item">
                    <Award className="metric-icon" />
                    <div className="metric-info">
                      <h4>Proven Excellence</h4>
                      <p>Leading insurance provider with comprehensive coverage</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Claim Performance */}
              <div className="claim-section fade-in">
                <h3>Claim Performance</h3>
                <div className="claim-stats">
                  <div className="claim-item">
                    <div className="claim-circle">
                      <svg className="progress-ring" width="120" height="120">
                        <circle className="progress-ring-bg" cx="60" cy="60" r="52" />
                        <circle className="progress-ring-circle performance-ring" cx="60" cy="60" r="52" style={{"--percentage": "93.48"}} />
                      </svg>
                      <div className="claim-value">
                        <span className="percentage">93.48%</span>
                        <span className="label">Claim Settlement</span>
                      </div>
                    </div>
                  </div>
                  <div className="claim-details">
                    <div className="claim-detail-item fade-in">
                      <div className="detail-value">2.21 Cr.</div>
                      <div className="detail-label">Claims Settled</div>
                    </div>
                    <div className="claim-detail-item fade-in">
                      <div className="detail-value">₹ 2.3L Cr.</div>
                      <div className="detail-label">Amount Paid</div>
                    </div>
                  </div>
                </div>
                <p className="source-text">*As per LIC Report FY. 2023-24</p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="benefits-section fade-in">
              <h3 className="benefits-heading">Our Commitment to You</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <Check className="benefit-icon" />
                  <span>Trust & Legacy – Serving India since 1956 with unmatched reliability</span>
                </div>
                <div className="benefit-item">
                  <Check className="benefit-icon" />
                  <span>Government-Backed – India's most trusted life insurer</span>
                </div>
                <div className="benefit-item">
                  <Check className="benefit-icon" />
                  <span>Wide Range of Plans – Protection, savings, retirement, and more</span>
                </div>
                <div className="benefit-item">
                  <Check className="benefit-icon" />
                  <span>Guaranteed Benefits – Secure payouts with strong financial backing</span>
                </div>
                <div className="benefit-item">
                  <Check className="benefit-icon" />
                  <span>Extensive Network – Over 2,000 branches and millions of agents across India</span>
                </div>
                <div className="benefit-item">
                  <Check className="benefit-icon" />
                  <span>Customer-Centric Services – Easy claims, policy loans, and flexible premium options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLicSection;