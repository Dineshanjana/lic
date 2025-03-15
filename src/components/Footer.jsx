import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Lic Plans</h3>
          <ul>
            <li><Link to="/pension-plan">Pension Plans</Link></li>
            <li><Link to="/ulip-plan">Ulip Plans</Link></li>
            <li><Link to="/term-plan">Term Plans</Link></li>
            <li><Link to="/money-back-plan">MoneyBack Plans</Link></li>
            <li><Link to="/whole-life-plan">Wholelife Plans</Link></li>
            <li><Link to="/child-plan">Child Plans</Link></li>
            <li><Link to="/endowment-plan">Endowment Plans</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="https://licindia.in/know-your-life-insurance">Insurance Guides</a></li>
            <li><a href="https://licindia.in/claims-settlement-requirements">Claims Process</a></li>
            <li><a href="https://www.licpremiumcalculator.in">Coverage Calculator</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>My Self</h3>
          <ul>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Rajasthan, India</li>
            <li>(+91) 9414347070</li>
            <li>vishaljoshilic@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Vishal Insurance. All rights reserved.</p>
      </div>

      <style jsx>{`
        /* CSS Variables */
        :root {
          --near-black: #000814;
          --gold: #ffc300;
          --dark-navy: #001d3d;
          --navy: #003566;
        }
        
        .footer {
          background-color: var(--near-black);
          color: #fff;
          padding: 4rem 2rem 2rem;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        
        .footer-column h3 {
          color: var(--gold);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }
        
        .footer-column ul {
          list-style: none;
          padding: 0;
        }
        
        .footer-column ul li {
          margin-bottom: 0.8rem;
        }
        
        .footer-column ul li a {
          color: white;
          opacity: 0.8;
          text-decoration: none;
          transition: opacity 0.3s ease;
        }
        
        .footer-column ul li a:hover {
          opacity: 1;
          color: var(--gold);
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.6;
        }
        
        @media screen and (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        @media screen and (max-width: 480px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;