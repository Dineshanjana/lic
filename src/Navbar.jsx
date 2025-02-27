import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children, onMouseEnter, onMouseLeave }) => (
  <Link 
    to={to} 
    className="nav-link"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-header">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </Link>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span>
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/">Home</NavLink>
          <div 
            className="dropdown-container"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <NavLink to="/schemes">Schemes <span className="dropdown-arrow">▼</span></NavLink>
            {showDropdown && (
              <div className="dropdown-menu">
                <div 
                  className="dropdown-item"
                  onMouseEnter={() => setShowSubDropdown(true)}
                  onMouseLeave={() => setShowSubDropdown(false)}
                >
                  Insurance Plans <span className="dropdown-arrow">▶</span>
                  {showSubDropdown && (
                    <div className="sub-dropdown-menu">
                      <Link to="/Edow" className="dropdown-item">Endowment Plans</Link>
                      <Link to="/WholeLife" className="dropdown-item">Whole Life Plans</Link>
                      <Link to="/MoneyBack" className="dropdown-item">Money Back Plans</Link>
                      <Link to="/Term" className="dropdown-item">Term Assurance Plans </Link>
                      <Link to="/Riders" className="dropdown-item">Riders Plans </Link>
                    </div>
                  )}
                </div>
                <Link to="/pension" className="dropdown-item">Pension Plans</Link>
                <Link to="/Unit" className="dropdown-item">Unit Linked Plans</Link>
                <Link to="/Micro" className="dropdown-item">Micro Insurance Plans</Link>
                <Link to="/Withdrawn" className="dropdown-item">Withdrawn Plans</Link>
              </div>
            )}
          </div>
          <NavLink to="/faqs">FAQs</NavLink>
          <NavLink to="/grievances">Grievances</NavLink>
          <NavLink to="/partner">Partner Onboarding</NavLink>
        </div>
        
        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
         
          
        </div>
      </nav>

      <style jsx>{`
        .navbar-container {
        color:white;;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
         background-color: var(--near-black);
         
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          z-index: 1000;
          animation: slideDown 0.5s ease-out;
          font-size: 16px;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.7rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .navbar-header {
          display: flex;
          align-items: center;
        }

        .logo {
          text-decoration: none;
          opacity: 0;
          animation: fadeIn 0.5s ease-out 0.2s forwards;
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 50px;
        }

        .logo:hover {
          transform: scale(1.02);
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-left: auto;
          margin-right: 2rem;
          transition: all 0.3s ease-in-out;
        }

        .nav-link {
          text-decoration: none;
         color:white;!important;
          font-size: 20px;
          font-weight: 500;
          opacity: 0;
          padding: 0.5rem 0.75rem;
          animation: fadeInUp 0.5s ease-out forwards;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links > *:nth-child(1) { animation-delay: 0.2s; }
        .nav-links > *:nth-child(2) { animation-delay: 0.3s; }
        .nav-links > *:nth-child(3) { animation-delay: 0.4s; }
        .nav-links > *:nth-child(4) { animation-delay: 0.5s; }
        .nav-links > *:nth-child(5) { animation-delay: 0.6s; }

        .nav-link:hover {
      color: var(--gold);!important;
          text-decoration: underline;
        }

        .dropdown-arrow {
          font-size: 10px;
          margin-left: 4px;
        }

        .dropdown-container {
          position: relative;
          display: inline-block;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          min-width: 200px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          padding: 0.5rem 0;
          z-index: 1001;
          opacity: 0;
          transform: translateY(-10px);
          animation: dropdownFade 0.3s ease-out forwards;
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #333;
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 0;
          animation: fadeIn 0.3s ease-out forwards;
        }

        .dropdown-item:hover {
          background-color: #f8f9fa;
          color:  #ffc300;;
        }

        .sub-dropdown-menu {
          position: absolute;
          top: 0;
          left: 100%;
          background-color: white;
          min-width: 200px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          padding: 0.5rem 0;
          z-index: 1002;
          opacity: 0;
          transform: translateY(-10px);
          animation: dropdownFade 0.3s ease-out forwards;
        }

        .auth-buttons {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .login-btn {
          border: 1px solid # #ffc300;;
          border-radius: 4px;
          padding: 0.5rem 1.25rem;
          color:rgb(253, 251, 251) !important;
          text-decoration: none;
          font-size:20px;
          font-weight: 500;
          opacity: 0;
          animation: fadeIn 0.5s ease-out 0.7s forwards;
          transition: all 0.3s ease;
        }

        .login-btn:hover {
          background-color:  #ffc300;;
          transform: translateY(-2px);
        }

        

        .language-selector {
          margin-left: 0.75rem;
          color: #333;
          font-weight: 500;
          opacity: 0;
          animation: fadeIn 0.5s ease-out 0.9s forwards;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .menu-toggle {
          display: none;
          cursor: pointer;
          opacity: 0;
          animation: fadeIn 0.5s ease-out 0.2s forwards;
        }

        .menu-icon {
          font-size: 24px;
          color: #333;
        }

        /* Animation Keyframes */
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Styles */
        @media (max-width: 1024px) {
          .navbar {
            padding: 0.5rem 1rem;
          }

          .navbar-header {
            width: 100%;
            justify-content: space-between;
          }

          .nav-links {
            flex-direction: column;
            gap: 0.5rem;
            max-height: 0;
            overflow: hidden;
            width: 100%;
            opacity: 0;
            transition: all 0.5s ease-in-out;
            position: absolute;
            top: 70px;
            left: 0;
            background: white;
            padding: 0;
            margin: 0;
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          }

          .nav-links.open {
            max-height: 500px;
            opacity: 1;
            padding: 1rem 0;
          }

          .dropdown-menu {
            position: static;
            width: 100%;
            margin-top: 0.5rem;
            box-shadow: none;
            animation: fadeIn 0.3s ease-out forwards;
          }

          .dropdown-item {
            padding: 0.75rem 2rem;
          }

          .menu-toggle {
            display: block;
          }

          .auth-buttons {
            display: none;
          }
        }

        body {
          padding-top: 70px;
        }
      `}</style>
    </div>
  );
};

export default Navbar;