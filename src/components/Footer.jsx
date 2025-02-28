import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Insurance Products</h3>
          <ul>
            <li><a href="#">Home Insurance</a></li>
            <li><a href="#">Auto Insurance</a></li>
            <li><a href="#">Health Insurance</a></li>
            <li><a href="#">Life Insurance</a></li>
            <li><a href="#">Business Insurance</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Insurance Guides</a></li>
            <li><a href="#">Claims Process</a></li>
            <li><a href="#">Coverage Calculator</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>123 Insurance Ave.</li>
            <li>New York, NY 10001</li>
            <li>(800) 123-4567</li>
            <li>support@secureshield.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SecureShield Insurance. All rights reserved.</p>
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