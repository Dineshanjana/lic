import React from 'react';

const Pension = () => {
  return (
    <div className="pension-container">
      <header className="pension-header">
        <h1 className="pension-title">Pension Plans</h1>
        <div className="pension-subtitle">
          Designed to provide financial security during retirement.
        </div>
      </header>

      <main className="pension-main-content">
        <h2>Plans and Features:</h2>
        <div className="pension-highlight">
          <h3>1. New Pension Plus</h3>
          <ul>
            <li>Unit Linked pension plan with corpus building.</li>
          </ul>
        </div>

        <div className="pension-highlight">
          <h3>2. Jeevan Akshay-VII</h3>
          <ul>
            <li>Immediate annuity plan with multiple options.</li>
          </ul>
        </div>

        <div className="pension-highlight">
          <h3>3. New Jeevan Shanti</h3>
          <ul>
            <li>Deferred annuity plan with guaranteed additions.</li>
          </ul>
        </div>

        <div className="pension-highlight">
          <h3>4. Saral Pension</h3>
          <ul>
            <li>Standardized pension plan with annuity options.</li>
          </ul>
        </div>

        <div className="pension-cta-container">
          <button className="pension-cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .pension-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .pension-header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .pension-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .pension-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .pension-main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .pension-main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .pension-highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .pension-highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .pension-highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .pension-highlight li {
          margin-bottom: 0.5rem;
        }

        .pension-cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .pension-cta-button {
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

        .pension-cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default Pension;