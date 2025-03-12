import React from 'react';
import '../Css/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="lic-loader">
        <div className="loader-circle"></div>
        <div className="loader-text">
          <span>L</span>
          <span>I</span>
          <span>C</span>
        </div>
        <div className="loader-message">Loading your financial future...</div>
      </div>
    </div>
  );
};

export default Loader;