import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
  const [showDesktopSubDropdown, setShowDesktopSubDropdown] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState({
    schemes: false,
    insurance: false
  });
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) &&
        !event.target.closest('.hamburger')
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setExpandedDropdowns(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
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

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <Link to="/" className="link">Home</Link>
          <div 
            className="dropdown-container"
            onMouseEnter={() => setShowDesktopDropdown(true)}
            onMouseLeave={() => setShowDesktopDropdown(false)}
          >
            <Link to="/schemes" className="link">Schemes <span className="dropdown-arrow">▼</span></Link>
            {showDesktopDropdown && (
              <div className="dropdown-menu">
                <div 
                  className="dropdown-item"
                  onMouseEnter={() => setShowDesktopSubDropdown(true)}
                  onMouseLeave={() => setShowDesktopSubDropdown(false)}
                >
                  Insurance Plans <span className="dropdown-arrow">▶</span>
                  {showDesktopSubDropdown && (
                    <div className="sub-dropdown-menu"
                    onMouseEnter={() => setShowDesktopSubDropdown(true)} 
                    onMouseLeave={() => setShowDesktopSubDropdown(false)} 
                    >
                      <Link to="/edowment-plan" className="dropdown-item link">Endowment Plans</Link>
                      <Link to="/whole-life-plan" className="dropdown-item link">Whole Life Plans</Link>
                      <Link to="/money-back-plan" className="dropdown-item link">Money Back Plans</Link>
                      <Link to="/term-plan" className="dropdown-item link">Term Assurance Plans</Link>
                    </div>
                  )}
                </div>
                <Link to="/pension-plan" className="dropdown-item link">Pension Plans</Link>
                <Link to="/child-plan" className="dropdown-item link">Child Plans</Link>
                <Link to="/ulip-plan" className="dropdown-item link">Ulip Plans</Link>
              </div>
            )}
          </div>
          <Link to="/faqs" className="link">FAQs</Link>
          <Link to="/grievances" className="link">Grievances</Link>
          <Link to="/partner" className="link">Partner Onboarding</Link>
        </div>
        
        <div className="auth-buttons desktop-auth">
          <Link to="/signup" className="signup-btn link">
            Login / Signup
          </Link>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
      ></div>
      
      <div 
        className={`sidebar ${isMenuOpen ? 'open' : ''}`} 
        ref={sidebarRef}
      >
        <div className="sidebar-header">
          <Link to="/" className="logo-mobile" onClick={toggleMenu}>
            <span>Vishal Insurance</span>
          </Link>
          <div className="close-btn" onClick={toggleMenu}>
            <span></span>
          </div>
        </div>
        
        <div className="sidebar-content">
          <div className="sidebar-links">
            <Link to="/" className="sidebar-link" onClick={toggleMenu}>
              Home
            </Link>
            
            <div className="sidebar-dropdown">
              <div 
                className="sidebar-dropdown-header" 
                onClick={() => toggleDropdown('schemes')}
              >
                <span>Schemes</span>
                <span className={`dropdown-arrow ${expandedDropdowns.schemes ? 'active' : ''}`}>▼</span>
              </div>
              
              <div className={`sidebar-dropdown-content ${expandedDropdowns.schemes ? 'active' : ''}`}>
                <div className="sidebar-dropdown">
                  <div 
                    className="sidebar-dropdown-header sub" 
                    onClick={() => toggleDropdown('insurance')}
                  >
                    <span>Insurance Plans</span>
                    <span className={`dropdown-arrow ${expandedDropdowns.insurance ? 'active' : ''}`}>▼</span>
                  </div>
                  
                  <div className={`sidebar-dropdown-content sub ${expandedDropdowns.insurance ? 'active' : ''}`}>
                    <Link to="/edowment-plan" className="sidebar-link sub" onClick={toggleMenu}>
                      Endowment Plans
                    </Link>
                    <Link to="/whole-life-plan" className="sidebar-link sub" onClick={toggleMenu}>
                      Whole Life Plans
                    </Link>
                    <Link to="/money-back-plan" className="sidebar-link sub" onClick={toggleMenu}>
                      Money Back Plans
                    </Link>
                    <Link to="/term-plan" className="sidebar-link sub" onClick={toggleMenu}>
                      Term Assurance Plans
                    </Link>
                  </div>
                </div>
                
                <Link to="/pension-plan" className="sidebar-link" onClick={toggleMenu}>
                  Pension Plans
                </Link>
                <Link to="/child-plan" className="sidebar-link" onClick={toggleMenu}>
                  Child Plans
                </Link>
                <Link to="/ulip-plan" className="sidebar-link" onClick={toggleMenu}>
                  Ulip Plans
                </Link>
              </div>
            </div>
            
            <Link to="/faqs" className="sidebar-link" onClick={toggleMenu}>
              FAQs
            </Link>
            <Link to="/grievances" className="sidebar-link" onClick={toggleMenu}>
              Grievances
            </Link>
            <Link to="/partner" className="sidebar-link" onClick={toggleMenu}>
              Partner Onboarding
            </Link>
          </div>
          
          <div className="sidebar-auth">
            <Link to="/signup" className="signup-btn mobile-signup-btn" onClick={toggleMenu}>
              Login / Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;