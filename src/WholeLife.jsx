import React from 'react';

const WholeLife = () => {
  return (
    <div className="whole-container">
      <header className="whole-header">
        <h1 className="whole-title">Whole Life Plans</h1>
        <div className="whole-subtitle">
          Whole Life Plans provide life coverage for the entire lifetime, ensuring financial security for beneficiaries.
        </div>
      </header>

      <main className="whole-main-content">
        <h2>Plans and Features:</h2>
        <div className="whole-highlight">
          <h3>1. Jeevan Umang</h3>
          <ul>
            <li>Combines income and protection.</li>
            <li>Annual survival benefits.</li>
            <li>Life-long coverage up to 100 years.</li>
          </ul>
        </div>

        <div className="whole-highlight">
          <h3>2. Jeevan Utsav</h3>
          <ul>
            <li>Non-linked, non-participating plan.</li>
            <li>Offers survival benefits and guaranteed additions.</li>
          </ul>
        </div>

        <div className="whole-cta-container">
          <button className="whole-cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .whole-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .whole-header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .whole-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .whole-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .whole-main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .whole-main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .whole-highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .whole-highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .whole-highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .whole-highlight li {
          margin-bottom: 0.5rem;
        }

        .whole-cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .whole-cta-button {
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

        .whole-cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default WholeLife;