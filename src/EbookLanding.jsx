import React from 'react';

const EbookLanding = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">The Art of E-book Design</h1>
        <div className="subtitle">
          Create Professional & Irresistible E-books That Readers Can't Wait to Open
        </div>
        <div className="author">By Digital Publishing Expert</div>
      </header>

      <main className="main-content">
        <p>
          I'll be the first to admit it: I love a good e-book. One that provides
          great content — actionable stuff, not fluff — and a clean, easy to
          follow design is hard to resist.
        </p>

        <div className="highlight">
          E-books are super popular right now, and for good reason. They make
          great:
          <ul>
            <li>Opt-in incentives</li>
            <li>Lead magnets</li>
            <li>Digital products for sale</li>
            <li>Course materials</li>
          </ul>
        </div>

        <p>
          There are a lot of ugly e-books in the world, and frankly it makes me
          sad. I know the author put hours and hours into that content, and the
          outside just doesn't show it.
        </p>

        <p>
          If you put that much work into creating valuable content for your
          audience, wouldn't you want to make the outside look irresistible?
        </p>

        <div className="cta-container">
          <button className="cta-button">
            Learn My E-book Design Tips →
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

        .author {
          font-size: 1.1rem;
          color: #3498db;
          font-weight: 500;
        }

        .main-content {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
        }

        .main-content p {
          margin-bottom: 1.5rem;
        }

        .highlight {
          background-color: #f0f7ff;
          padding: 1.5rem;
          border-left: 4px solid #3498db;
          margin: 1.5rem 0;
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

        .carousel {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: relative;
        }

        .carousel .list .item {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0 0 0 0;
        }

        .carousel .list .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel .list .item .content {
          position: absolute;
          top: 20%;
          width: 1140px;
          max-width: 80%;
          left: 50%;
          transform: translateX(-50%);
          padding-right: 30%;
          box-sizing: border-box;
          color: #fff;
          text-shadow: 0 5px 10px #0004;
        }

        .carousel .list .item .author {
          font-weight: bold;
          letter-spacing: 10px;
        }

        .carousel .list .item .title,
        .carousel .list .item .topic {
          font-size: 5em;
          font-weight: bold;
          line-height: 1.3em;
        }

        .carousel .list .item .topic {
          color: #f1683a;
        }

        .carousel .list .item .buttons {
          display: grid;
          grid-template-columns: repeat(2, 130px);
          grid-template-rows: 40px;
          gap: 5px;
          margin-top: 20px;
        }

        .carousel .list .item .buttons button {
          border: none;
          background-color: #eee;
          letter-spacing: 3px;
          font-family: Poppins, sans-serif;
          font-weight: 500;
        }

        .carousel .list .item .buttons button:nth-child(2) {
          background-color: transparent;
          border: 1px solid #fff;
          color: #eee;
        }

        .thumbnail {
          position: absolute;
          bottom: 50px;
          left: 50%;
          width: max-content;
          z-index: 100;
          display: flex;
          gap: 20px;
        }

        .thumbnail .item {
          width: 150px;
          height: 220px;
          flex-shrink: 0;
          position: relative;
        }

        .thumbnail .item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .thumbnail .item .content {
          color: #fff;
          position: absolute;
          bottom: 10px;
          left: 10px;
          right: 10px;
        }

        .thumbnail .item .content .title {
          font-weight: 500;
        }

        .thumbnail .item .content .description {
          font-weight: 300;
        }

        .arrows {
          position: absolute;
          top: 80%;
          right: 52%;
          z-index: 100;
          width: 300px;
          max-width: 30%;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .arrows button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #eee4;
          border: none;
          color: #fff;
          font-family: monospace;
          font-weight: bold;
          transition: .5s;
        }

        .arrows button:hover {
          background-color: #fff;
          color: #000;
        }

        .carousel .time {
          position: absolute;
          z-index: 1000;
          width: 0%;
          height: 3px;
          /* background-color: #f1683a; */
          left: 0;
          top: 0;
        }

        .carousel.next .time,
        .carousel.prev .time {
          animation: runningTime 3s linear 1 forwards;
        }

        @keyframes runningTime {
          from { width: 100%; }
          to { width: 0; }
        }

        @media (max-width: 1024px) {
          .carousel .list .item .content {
            width: 90%;
            padding-right: 10%;
          }

          .carousel .list .item .title,
          .carousel .list .item .topic {
            font-size: 3em;
          }

          .thumbnail .item {
            width: 120px;
            height: 180px;
          }

          .arrows {
            top: 85%;
            right: 50%;
            width: 250px;
          }

          .arrows button {
            width: 35px;
            height: 35px;
          }
        }

        @media (max-width: 768px) {
          .carousel .list .item .content {
            top: 15%;
            width: 100%;
            padding-right: 0;
          }

          .carousel .list .item .title,
          .carousel .list .item .topic {
            font-size: 2em;
          }

          .carousel .list .item .buttons {
            grid-template-columns: repeat(2, 100px);
            grid-template-rows: 35px;
          }

          .thumbnail .item {
            width: 100px;
            height: 150px;
          }

          .arrows {
            top: 90%;
            right: 50%;
            width: 200px;
          }

          .arrows button {
            width: 30px;
            height: 30px;
          }
        }

        @media (max-width: 480px) {
          .carousel .list .item .content {
            top: 10%;
            width: 100%;
            padding-right: 0;
          }

          .carousel .list .item .title,
          .carousel .list .item .topic {
            font-size: 1.5em;
          }

          .carousel .list .item .buttons {
            grid-template-columns: repeat(2, 80px);
            grid-template-rows: 30px;
          }

          .thumbnail .item {
            width: 80px;
            height: 120px;
          }

          .arrows {
            top: 95%;
            right: 50%;
            width: 150px;
          }

          .arrows button {
            width: 25px;
            height: 25px;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }
          
          .header {
            padding: 2rem;
          }
          
          .title {
            font-size: 2rem;
          }
          
          .main-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default EbookLanding;