import React from 'react';

const Riders = () => {
  return (
    <div className="Riders-container">
      <header className="Riders-header">
        <h1 className="Riders-title">Riders Plans</h1>
        <div className="Riders-subtitle">
          Optional add-ons that enhance insurance coverage.
        </div>
      </header>

      <main className="Riders-main-content">
        <h2>Popular Riders:</h2>
        <div className="Riders-highlight">
          <h3>1. Accident Benefit Rider</h3>
          <ul>
            <li>Additional sum assured in case of accidental death.</li>
          </ul>
        </div>

        <div className="Riders-highlight">
          <h3>2. Premium Waiver Benefit Rider</h3>
          <ul>
            <li>Waives future premiums if the proposer dies.</li>
          </ul>
        </div>

        <div className="Riders-highlight">
          <h3>3. Critical Illness Benefit Rider</h3>
          <ul>
            <li>Lump sum payout upon diagnosis of specified critical illnesses.</li>
          </ul>
        </div>

        <div className="Riders-cta-container">
          <button className="Riders-cta-button">
            Contact Us
          </button>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .Riders-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #f5f5f5;
          color: #333;
          font-family: Georgia, serif;
          line-height: 1.6;
        }

        .Riders-header {
          text-align: center;
          padding: 3rem;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }

        .Riders-title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .Riders-subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-style: italic;
          margin-bottom: 2rem;
        }

        .Riders-main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .Riders-main-content h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .Riders-highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
        }

        .Riders-highlight h3 {
          font-size: 1.5rem;
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .Riders-highlight ul {
          margin-top: 1rem;
          padding-left: 1.5rem;
        }

        .Riders-highlight li {
          margin-bottom: 0.5rem;
        }

        .Riders-cta-container {
          text-align: center;
          margin-top: 2rem;
        }

        .Riders-cta-button {
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

        .Riders-cta-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
};

export default Riders;