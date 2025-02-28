import React from 'react';

const Unit = () => {
  return (
    <div className="unit-container">
      <header className="unit-header">
        <h1 className="unit-title">Unit Linked Plans (ULIPs)</h1>
        <div className="unit-subtitle">
          Investment-oriented plans providing life insurance along with market-linked returns.
        </div>
      </header>

      <main className="unit-main-content">
        <h2>Plans and Features:</h2>
        <div className="unit-highlight">
          <h3>1. Nivesh Plus</h3>
          <ul>
            <li>Single premium investment plan with fund options.</li>
          </ul>
        </div>

        <div className="unit-highlight">
          <h3>2. SIIP</h3>
          <ul>
            <li>Regular premium ULIP with flexibility.</li>
          </ul>
        </div>

        <div className="unit-highlight">
          <h3>3. New Endowment Plus</h3>
          <ul>
            <li>Offers life cover and investment growth.</li>
          </ul>
        </div>

        <div className="unit-cta-container">
          <button className="unit-cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .unit-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .unit-header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .unit-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .unit-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .unit-main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .unit-main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .unit-highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .unit-highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .unit-highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .unit-highlight li {
          margin-bottom: 0.5rem;
        }

        .unit-cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .unit-cta-button {
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

        .unit-cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default Unit;