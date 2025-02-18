import React from 'react';

const NavLink = ({ href, children }) => (
  <a href={href} className="nav-link">
    {children}
  </a>
);

const NavBar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a href="/" className="logo">
          Vishal
        </a>
        
        <div className="nav-links">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
        </div>
        
        <div className="auth-buttons">
          <NavLink href="/login">Login</NavLink>
          <a href="/start-selling" className="start-selling-btn">
            Contact Us
          </a>
        </div>
      </nav>
      
      <style jsx>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color:rgb(235, 235, 233);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 5%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #333d29;
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-link {
          text-decoration: none;
          color: #666;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #333d29;
          text-decoration:underline;
        }

        .auth-buttons {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        .start-selling-btn {
          background-color: #333d29;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 500;
          transition: background-color 0.3s ease;
        }

        .start-selling-btn:hover {
          background-color: #333d29;
        }

        @media (max-width: 768px) {
          .navbar {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }

          .nav-links {
            flex-direction: column;
            gap: 1rem;
          }

          .auth-buttons {
            flex-direction: column;
            gap: 1rem;
            width: 100%;
          }

          .start-selling-btn {
            text-align: center;
            width: 100%;
          }
        }

        /* Ensuring body content does not hide behind the navbar */
        body {
          padding-top: 70px;
        }
      `}</style>
    </div>
  );
};

export default NavBar;
