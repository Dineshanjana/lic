import React from 'react';

const Withdrawn = () => {
  return (
    <div className="withdrawn-container">
      <header className="withdrawn-header">
        <h1 className="withdrawn-title">Withdrawn Plans</h1>
        <div className="withdrawn-subtitle">
          LIC has phased out certain plans in compliance with new regulations.
        </div>
      </header>

      <main className="withdrawn-main-content">
        <h2>Examples:</h2>
        <div className="withdrawn-highlight">
          <h3>1. Jeevan Dhara-I</h3>
          <ul>
            <li>Deferred annuity plan for retirement.</li>
          </ul>
        </div>

        <div className="withdrawn-highlight">
          <h3>2. Jeevan Nidhi</h3>
          <ul>
            <li>Pension plan with profit participation.</li>
          </ul>
        </div>

        <div className="withdrawn-highlight">
          <h3>3. Jeevan Arogya</h3>
          <ul>
            <li>Health insurance plan with hospitalization benefits.</li>
          </ul>
        </div>

        <div className="withdrawn-cta-container">
          <button className="withdrawn-cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .withdrawn-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .withdrawn-header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .withdrawn-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .withdrawn-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .withdrawn-main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .withdrawn-main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .withdrawn-highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .withdrawn-highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .withdrawn-highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .withdrawn-highlight li {
          margin-bottom: 0.5rem;
        }

        .withdrawn-cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .withdrawn-cta-button {
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

        .withdrawn-cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default Withdrawn;