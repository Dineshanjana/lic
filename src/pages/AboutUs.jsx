import React, { useState } from 'react';
import { Phone, MapPin, Mail, Award } from 'lucide-react'; // Imported Lucide icons
import '../Css/AboutUs.css';
import Vishal from '../assets/img/achiv/vishal.jpeg';
import MDRTLogo from '../assets/img/mdrt-logo.jpeg';
import Globe from '../components/globe.jsx'; // Import the Globe component
import { Link } from "react-router-dom"

const AboutUs = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  const clientLocations = [
    // Your client locations data
  ];

  return (
    <div className="main-bd">
      <div className="about-container">
        <div className="gradient-circle"></div>

        <div className="layout-container">
          <div className="content-section">
            <div className="header-section">
              <div className="header-text">
                <h1 className="ab-heading">Vishal Joshi – Trusted LIC Agent Since 2003</h1>
                <p className="ab-subtitle">With over two decades of experience in the insurance sector, Vishal Joshi is a highly trusted and dedicated LIC Agent committed to securing financial futures.</p>
              </div>
            </div>

            <div className="content">
              <p>Since 2003, he has been helping individuals, families, and businesses make informed decisions about life insurance, retirement planning, and wealth protection.</p>
            </div>

            <div className="content">
              <h2>Why Choose Vishal Joshi?</h2>
              <ul>
                <li>21+ Years of Expertise – Extensive knowledge of LIC policies and financial planning</li>
                <li>Customer-Centric Approach – Tailored insurance solutions to fit your needs</li>
                <li>Hassle-Free Service – Smooth policy issuance, claims assistance, and premium management</li>
                <li>Comprehensive Insurance Solutions – Life insurance, child education plans, pension schemes, and investment-linked policies</li>
              </ul>
            </div>

            <div className="content">
              <h2>Services Offered</h2>
              <ul>
                <li>Life Insurance – Secure your family's future</li>
                <li>Children Future – Plan for your child's education & well-being</li>
                <li>Income Protection – Financial security during uncertain times</li>
                <li>Retirement Planning – Build a stress-free post-retirement life</li>
                <li>Health Insurance – Cover medical expenses with the best plans</li>
                <li>Term Insurance – High coverage at affordable premiums</li>
              </ul>
            </div>

            <div className="content mdrt-award">
              <h2><img src={MDRTLogo} alt="MDRT Logo" className="mdrt-logo" /> LIC MDRT Award Winner(USA)</h2>
              <p className="mdrt-description">Vishal Joshi has been recognized with the prestigious LIC MDRT Award for his outstanding performance in securing financial futures. This award signifies dedication, excellence, and remarkable achievements in the insurance sector.</p>
            </div>


            <div className="map-section">
              <h2>Our Client Network</h2>
              <div className="client-map-container">
                <div className="india-map-wrapper">
                  <Globe /> {/* Replace the India map with the Globe component */}
                </div>
{/* 
                <div className="client-locations-grid">
                  {clientLocations.map(location => (
                    <div key={location.id} className="location-card">
                      <div className="location-name">{location.name}</div>
                      <div className="location-clients">{location.clients} clients</div>
                      <div className="location-indicator" style={{ width: `${Math.min((location.clients / 150) * 100, 100)}%` }}></div>
                    </div>
                  ))}
                </div> */}

                {/* <div className="client-stats">
                  <div className="stat-card">
                    <div className="stat-number">400+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">4</div>
                    <div className="stat-label">Regional Offices</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">₹50Cr+</div>
                    <div className="stat-label">Coverage Provided</div>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="content contact-info">
              <h2>Contact Vishal Joshi</h2>
              <div className="contact-grid">
                <div className="contact-item">
                  <Phone className="contact-icon" />
                  <div className="contact-text">
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 9414347070</span>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="contact-icon" />
                  <div className="contact-text">
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Rajasthan, India</span>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">vishaljoshilic@gmail.com</span>
                  </div>
                </div>
              </div>
              <Link to="/contact-us" className="cta-button">Secure Your Future Today</Link>
            </div>
          </div>

          <div className="image-section">
            <div className="client-image-container">
              <img src={Vishal} alt="Vishal Joshi" className="client-image" />
              <div className="agent-badge">
                <Award className="badge-icon" />
                <div className="badge-text">Top Agent 2024</div>
              </div>
              <div className="experience-tag">21+ Years Experience</div>
            </div>

            <div className="testimonial-card">
              <div className="quote-mark">"</div>
              <p className="testimonial-text">We provide expert guidance, personalized policy recommendations, and seamless assistance to secure your financial future.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
