import React from 'react';

const Micro = () => {
  return (
    <div className="micro-container">
      <header className="micro-header">
        <h1 className="micro-title">Micro Insurance Plans</h1>
        <div className="micro-subtitle">
          Affordable insurance options for lower-income groups.
        </div>
      </header>

      <main className="micro-main-content">
        <h2>Plans and Features:</h2>
        <div className="micro-highlight">
          <h3>1. Micro Bachat Plan</h3>
          <ul>
            <li>Provides protection and savings.</li>
          </ul>
        </div>

        <div className="micro-highlight">
          <h3>2. New Jeevan Mangal</h3>
          <ul>
            <li>Term insurance with return of premiums.</li>
          </ul>
        </div>

        <div className="micro-highlight">
          <h3>3. Bhagya Lakshmi</h3>
          <ul>
            <li>Guaranteed 110% premium return on maturity.</li>
          </ul>
        </div>

        <div className="micro-cta-container">
          <button className="micro-cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .micro-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .micro-header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .micro-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .micro-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .micro-main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .micro-main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .micro-highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .micro-highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .micro-highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .micro-highlight li {
          margin-bottom: 0.5rem;
        }

        .micro-cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .micro-cta-button {
          background-color: #3498db;
          color: white;
          padding: 1rem 2rem;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .micro-cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default Micro;