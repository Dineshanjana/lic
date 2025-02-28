import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const navLinksRef = useRef(null);
  const authButtonsRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="navbar-container" ref={navbarRef}>
      <nav className="navbar">
        <div className="navbar-header">
          <Link to="/" className="logo link">
            <span>Vishal Insurance</span>
          </Link>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`} ref={navLinksRef}>
          <Link to="/" className="link" >Home</Link>
          <div 
            className="dropdown-container"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="/schemes" className="link" >Schemes <span className="dropdown-arrow">▼</span></Link>
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
                      <Link to="/Edow" className="dropdown-item link">Endowment Plans</Link>
                      <Link to="/WholeLife" className="dropdown-item link">Whole Life Plans</Link>
                      <Link to="/MoneyBack" className="dropdown-item link">Money Back Plans</Link>
                      <Link to="/Term" className="dropdown-item link">Term Assurance Plans</Link>
                      <Link to="/Riders" className="dropdown-item link">Riders Plans</Link>
                    </div>
                  )}
                </div>
                <Link to="/pension" className="dropdown-item link">Pension Plans</Link>
                <Link to="/Unit" className="dropdown-item link">Unit Linked Plans</Link>
                <Link to="/Micro" className="dropdown-item link">Micro Insurance Plans</Link>
                <Link to="/Withdrawn" className="dropdown-item link">Withdrawn Plans</Link>
              </div>
            )}
          </div>
          <Link to="/faqs" className="link" >FAQs</Link>
          <Link to="/grievances" className="link" >Grievances</Link>
          <Link to="/partner" className="link" >Partner Onboarding</Link>
        </div>
        
        <div className="auth-buttons" ref={authButtonsRef}>
          
          <Link 
            to="/signup" 
            className="signup-btn link"
          >
            Login / Signup
          </Link>
        </div>
      </nav>

      <style jsx>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          backdrop-filter: blur(1px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          font-size: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: transform 0.8s ease, opacity 0.8s ease;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 5%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .navbar-header {
          display: flex;
          align-items: center;
        }

        .logo {
          text-decoration: none;
          color: white;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .logo:hover {
          color: #ffc300;
        }

        .logo::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #ffc300;
          transition: width 0.3s ease;
        }

        .logo:hover::after {
          width: 100%;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
          margin-left: auto;
          margin-right: 2rem;
          transition: height 0.5s ease, opacity 0.5s ease;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          font-size: 16px;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.5px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #ffc300;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
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
          background-color: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          min-width: 220px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 0.75rem 0;
          z-index: 1001;
          border: 1px solid rgba(255, 255, 255, 0.08);
          overflow: hidden;
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .dropdown-item {
          display: block;
          padding: 0.75rem 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 15px;
          position: relative;
        }

        .dropdown-item:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: #ffc300;
          transform: translateX(5px);
        }

        .sub-dropdown-menu {
          position: absolute;
          top: 0;
          left: 100%;
          background-color: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          min-width: 220px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          padding: 0.75rem 0;
          z-index: 1002;
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .auth-buttons {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .login-btn, .signup-btn {
          border: 1px solid #ffc300;
          border-radius: 30px;
          padding: 0.6rem 1.5rem;
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
          letter-spacing: 0.5px;
        }

        .signup-btn {
          background-color: #ffc300;
          color: #000;
        }

        .signup-btn:hover {
          background-color: transparent;
          color: #ffc300;
          border: 1px solid #ffff;
        }

        .login-btn.hover, .signup-btn.hover {
          background-color: #ffc300;
          color: #000;
          transform: scale(1.05);
        }

        .hamburger {
          display: none;
          cursor: pointer;
          width: 30px;
          height: 25px;
          position: relative;
        }

        .hamburger span {
          display: block;
          position: absolute;
          height: 2px;
          width: 100%;
          background: white;
          border-radius: 3px;
          opacity: 1;
          left: 0;
          transform: rotate(0deg);
          transition: .25s ease-in-out;
        }

        .hamburger span:nth-child(1) {
          top: 0;
        }

        .hamburger span:nth-child(2) {
          top: 10px;
        }

        .hamburger span:nth-child(3) {
          top: 20px;
        }

        .hamburger.active span:nth-child(1) {
          top: 10px;
          transform: rotate(135deg);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        .hamburger.active span:nth-child(3) {
          top: 10px;
          transform: rotate(-135deg);
        }

        .link {
          color: white;
          text-decoration: none;
          border-bottom: 0 solid transparent;
        }

        /* Mobile Styles */
        @media (max-width: 1024px) {
          .navbar {
            padding: 0.75rem 1.5rem;
          }

          .navbar-header {
            width: 100%;
            justify-content: space-between;
          }

          .hamburger {
            display: block;
          }

          .nav-links {
            flex-direction: column;
            gap: 0;
            height: 0;
            overflow: hidden;
            width: 100%;
            opacity: 0;
            position: absolute;
            top: 70px;
            left: 0;
            background-color: rgba(15, 15, 15, 0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            padding: 0;
            margin: 0;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .nav-links.open {
            height: auto;
            opacity: 1;
            padding: 1rem 0;
          }

          .nav-link {
            width: 100%;
            padding: 1rem 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .nav-link::after {
            display: none;
          }

          .dropdown-menu, .sub-dropdown-menu {
            position: static;
            width: 100%;
            box-shadow: none;
            border: none;
            background-color: rgba(30, 30, 30, 0.7);
            border-radius: 0;
            margin-top: 0;
          }

          .dropdown-item {
            padding: 0.75rem 2.5rem;
          }

          .auth-buttons {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .auth-buttons {
            position: absolute;
            bottom: 20px;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            padding: 1rem;
          }
          
          .nav-links.open {
            padding-bottom: 6rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;