import React from 'react';

const Edow = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">Endowment Plans</h1>
        <div className="subtitle">
          LIC's Endowment Plans offer a combination of savings and life protection, ensuring financial security for policyholders and their families. These plans provide a lump sum payout on maturity or in case of untimely demise.
        </div>
      </header>

      <main className="main-content">
        <h2>Plans and Features:</h2>
        <div className="highlight">
          <h3>1. Single Premium Endowment Plan</h3>
          <ul>
            <li>One-time premium payment.</li>
            <li>Provides financial protection against death during the term.</li>
            <li>Lump sum on maturity.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>2. New Endowment Plan</h3>
          <ul>
            <li>Regular premium payment.</li>
            <li>Offers both savings and protection.</li>
            <li>Flexible premium payment options.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>3. New Jeevan Anand</h3>
          <ul>
            <li>Combination of endowment and whole life plan.</li>
            <li>Premiums payable for a limited term.</li>
            <li>Coverage continues even after policy term ends.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>4. Jeevan Lakshya</h3>
          <ul>
            <li>Provides financial support for the policyholder's family.</li>
            <li>Annual income benefit in case of death during the policy term.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>5. Jeevan Labh</h3>
          <ul>
            <li>Shorter premium commitment with long-term benefits.</li>
            <li>Provides maturity and death benefits.</li>
          </ul>
        </div>

        <div className="highlight">
          <h3>6. Amritbaal</h3>
          <ul>
            <li>Designed for children’s future financial needs.</li>
            <li>Guaranteed additions and financial protection.</li>
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

export default Edow;