import React from 'react';

const Term = () => {
  return (
    <div className="Term-container">
      <header className="Term-header">
        <h1 className="Term-title">Term Assurance Plans</h1>
        <div className="Term-subtitle">
          Pure protection plans that offer financial security in case of untimely demise.
        </div>
      </header>

      <main className="Term-main-content">
        <h2>Plans and Features:</h2>
        <div className="Term-highlight">
          <h3>1. Digi Term</h3>
          <ul>
            <li>Online term insurance with flexible premium options.</li>
          </ul>
        </div>

        <div className="Term-highlight">
          <h3>2. Digi Credit Life</h3>
          <ul>
            <li>Covers outstanding loan liabilities.</li>
          </ul>
        </div>

        <div className="Term-highlight">
          <h3>3. Yuva Credit Life</h3>
          <ul>
            <li>Specifically for young borrowers.</li>
          </ul>
        </div>

        <div className="Term-highlight">
          <h3>4. New Tech-Term</h3>
          <ul>
            <li>High coverage with flexible payout options.</li>
          </ul>
        </div>

        <div className="Term-highlight">
          <h3>5. Saral Jeevan Bima</h3>
          <ul>
            <li>Simple term insurance plan as per IRDAI guidelines.</li>
          </ul>
        </div>

        <div className="Term-cta-container">
          <button className="Term-cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .Term-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .Term-header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .Term-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .Term-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .Term-main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .Term-main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .Term-highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .Term-highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .Term-highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .Term-highlight li {
          margin-bottom: 0.5rem;
        }

        .Term-cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .Term-cta-button {
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

        .Term-cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default Term;