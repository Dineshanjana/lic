import React from 'react';

const Poster = () => {
  const styles = {
    container: {
      width: '100%',
      height: '400px',
      border: '2px solid black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      padding: '20px',
      boxSizing: 'border-box'
    },
    applyButton: {
      padding: '10px 20px',
      border: '2px solid black',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.3s ease'
    },
    detailsButton: {
      padding: '10px 20px',
      border: '2px solid  black',
      backgroundColor: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <div style={styles.container}>
      <button 
        style={styles.applyButton}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#f0f0f0';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'white';
        }}
      >
        Apply Now
      </button>
      <button 
        style={styles.detailsButton}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#f0f0f0';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = 'white';
        }}
      >
        Show Details
      </button>

      <style>
        {`
          button:active {
            transform: scale(0.98);
          }
        `}
      </style>
    </div>
  );
};

export default Poster;