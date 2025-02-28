import React from 'react';

const Insurance = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Insurance</h1>
        <div className="subtitle">
          Insurance is a financial safety net that protects individuals and businesses from unexpected losses. It provides coverage for health, life, property, and more, ensuring financial stability during emergencies.
        </div>
      </header>

      <main className="main-content">
        <h2>Benefits of Insurance:</h2>
        <div className="highlight">
          <h3>1. Financial Protection</h3>
          <ul>
            <li>Provides financial protection against unforeseen risks.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>2. Medical Coverage</h3>
          <ul>
            <li>Covers medical expenses and hospitalization costs.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>3. Family Security</h3>
          <ul>
            <li>Ensures family security with life insurance benefits.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>4. Property Protection</h3>
          <ul>
            <li>Protects property from damage or loss.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>5. Business Continuity</h3>
          <ul>
            <li>Helps in business continuity during uncertainties.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>6. Savings and Investment</h3>
          <ul>
            <li>Encourages savings and investment through specific policies.</li>
          </ul>
        </div>

        <div className="cta-container">
          <button className="cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .highlight li {
          margin-bottom: 0.5rem;
        }

        .cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .cta-button {
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

        .cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default Insurance;