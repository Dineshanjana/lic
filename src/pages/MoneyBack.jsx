import React from 'react';

const MoneyBack = () => {
  return (
    <div className="MoneyBack-container">
      <header className="MoneyBack-header">
        <h1 className="MoneyBack-title">Money Back Plans</h1>
        <div className="MoneyBack-subtitle">
          Money Back Plans provide periodic survival benefits along with life coverage.
        </div>
      </header>

      <main className="MoneyBack-main-content">
        <h2>Plans and Features:</h2>
        <div className="MoneyBack-highlight">
          <h3>1. Jeevan Umang</h3>
          <ul>
            <li>Annual payouts after the premium term.</li>
            <li>Death and maturity benefits.</li>
          </ul>
        </div>

        <div className="MoneyBack-highlight">
          <h3>2. Bima Shree</h3>
          <ul>
            <li>High net-worth plan with periodic payouts.</li>
            <li>Survival and maturity benefits.</li>
          </ul>
        </div>

        <div className="MoneyBack-highlight">
          <h3>3. New Money Back Plan – 20 & 25 Years</h3>
          <ul>
            <li>Periodic survival benefits.</li>
            <li>Lump sum on maturity.</li>
          </ul>
        </div>

        <div className="MoneyBack-highlight">
          <h3>4. Children’s Money Back Plan</h3>
          <ul>
            <li>Designed for a child’s education and future needs.</li>
            <li>Survival benefits at key milestones.</li>
          </ul>
        </div>

        <div className="MoneyBack-cta-container">
          <button className="MoneyBack-cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .MoneyBack-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .MoneyBack-header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .MoneyBack-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .MoneyBack-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .MoneyBack-main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .MoneyBack-main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .MoneyBack-highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .MoneyBack-highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .MoneyBack-highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .MoneyBack-highlight li {
          margin-bottom: 0.5rem;
        }

        .MoneyBack-cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .MoneyBack-cta-button {
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

        .MoneyBack-cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default MoneyBack;