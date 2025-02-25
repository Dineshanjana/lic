import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const footerStyle = {
    marginTop:'20px',
    backgroundColor: '#ff9934',
    padding: '20px 40px',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  };

  const footerContent = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const footerLeft = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
    width: '90%',
  };

  const footerLogo = {
    width: '30px',
    height: 'auto',
    fontSize: '24px',
  };

  const footerNav = {
    display: 'flex',
    gap: '20px',
    marginLeft: 'auto',
  };

  const navLink = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '19px',
  };

  const copyright = {
    fontSize: '19px',
    color: 'white',
    margin: '10px 0',
  };

  const socialIcons = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontSize: '19px',
    margin: '10px 0',
  };

  const getSocialLinkStyle = (iconName) => ({
    color: hoveredIcon === iconName ? '#230e76' : '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
    position: 'relative',
    transition: 'color 0.3s ease, transform 0.3s ease',
    transform: hoveredIcon === iconName ? 'scale(1.2)' : 'scale(1)',
    cursor: 'pointer',
  });

  const madeInPrimer = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '15px',
    marginLeft: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <div style={footerContent}>
        <div style={footerLeft}>
          <div style={footerLogo}>VInsauranceLic</div>
          <nav style={footerNav}>
            <a href="/lessons" style={navLink}>Lessons</a>
            <a href="/resources" style={navLink}>Resources</a>
            <a href="/blog" style={navLink}>Blog</a>
            <a href="/support" style={navLink}>Support</a>
            <a href="/about" style={navLink}>About</a>
            <a href="/contact" style={navLink}>Contact</a>
          </nav>
        </div>
        <div style={madeInPrimer}>
          Made in Primer
        </div>
      </div>

      <div style={copyright}>
        Copyright © 2024 Primer University.<br />
        All rights reserved.
      </div>

      <div style={socialIcons}>
        <a 
          href="#" 
          aria-label="Twitter" 
          style={getSocialLinkStyle('twitter')}
          onMouseEnter={() => setHoveredIcon('twitter')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <span style={{ color: '#666', margin: '0 10px' }}>/</span>
        <a 
          href="#" 
          aria-label="YouTube" 
          style={getSocialLinkStyle('youtube')}
          onMouseEnter={() => setHoveredIcon('youtube')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <span style={{ color: '#666', margin: '0 10px' }}>/</span>
        <a 
          href="#" 
          aria-label="Instagram" 
          style={getSocialLinkStyle('instagram')}
          onMouseEnter={() => setHoveredIcon('instagram')}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;