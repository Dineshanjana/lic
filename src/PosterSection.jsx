import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const PosterSection = () => {
  const styles = {
    posterContainer: {
      width: '100%',
      height: '500px', // Adjust as needed
      borderRadius: '8px',
      position: 'relative', // Needed for absolute positioning of icons
      backgroundImage: 'url("poster3.png")', // Background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      alignItems: 'flex-end', // Push icons to the bottom
      justifyContent: 'flex-end', // Push icons to the right
      padding: '16px',
    },
    socialContainer: {
      display: 'flex',
      gap: '12px',
      background: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
      padding: '8px 12px',
      borderRadius: '8px',
    },
    socialIcon: {
      color: 'white',
      width: '24px', // Small size
      height: '24px',
      transition: 'transform 0.3s ease',
    },
    iconHover: {
      transform: 'scale(1.2)',
    },
    '@media (max-width: 768px)': {
      posterContainer: {
        height: '300px', // Adjust height for smaller screens
        padding: '8px',
      },
      socialContainer: {
        gap: '8px',
        padding: '4px 8px',
      },
      socialIcon: {
        width: '20px', // Smaller size for icons
        height: '20px',
      },
    },
    '@media (max-width: 480px)': {
      posterContainer: {
        height: '200px', // Further adjust height for very small screens
        padding: '4px',
      },
      socialContainer: {
        gap: '4px',
        padding: '2px 4px',
      },
      socialIcon: {
        width: '16px', // Even smaller size for icons
        height: '16px',
      },
    },
  };

  return (
    <div style={styles.posterContainer}>
      {/* Social Media Icons */}
      <div style={styles.socialContainer}>
        <Twitter style={styles.socialIcon} />
        <Youtube style={styles.socialIcon} />
        <Instagram style={styles.socialIcon} />
      </div>
    </div>
  );
};

export default PosterSection;
