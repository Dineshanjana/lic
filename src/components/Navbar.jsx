import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Dropdown, Menu } from 'antd';
import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
import LICLogo from '../assets/img/lic-logo.png';
import '../Css/Navbar.css';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialMode, setInitialMode] = useState("login");
  const [userFullName, setUserFullName] = useState(null);

  const [showDesktopDropdown, setShowDesktopDropdown] = useState(false);
  const [showDesktopSubDropdown, setShowDesktopSubDropdown] = useState(false);
  const [expandedDropdowns, setExpandedDropdowns] = useState({
    schemes: false,
    insurance: false
  });
  const navbarRef = useRef(null);
  const sidebarRef = useRef(null);


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserFullName(decodedToken.fullName);
        console.log('User:', decodedToken);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  const openLoginModal = () => {
    setInitialMode("login");
    setIsModalOpen(true);
  };

  const openSignupModal = () => {
    setInitialMode("signup");
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserFullName(null);
    window.location.reload();
  };

  const userMenu = (
    <Menu onClick={handleLogout}>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

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
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-header">
          <Link to="/" className="logo link">
            <img src={LICLogo} alt="LIC Logo" className="nv-lic-logo" />
            <span className="company-name">LICWithVishal</span>
          </Link>
          <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Desktop Menu item*/}
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
                      <Link to="/endowment-plan" className="dropdown-item link">Endowment Plans</Link>
                      <Link to="/whole-life-plan" className="dropdown-item link">Whole Life Plans</Link>
                      <Link to="/money-back-plan" className="dropdown-item link">Money Back Plans</Link>
                      <Link to="/term-plan" className="dropdown-item link">Term Assurance Plans</Link>
                    </div>
                  )}
                </div>
                <Link to="/pension-plan" className="dropdown-item link">Pension Plans</Link>
                <Link to="/child-plan" className="dropdown-item link">Child Plans</Link>
                <Link to="/ulip-plan" className="dropdown-item link">Unit Linked Plans</Link>
              </div>
            )}
          </div>
          <Link to="/about-us" className="link">About Us</Link>
          <Link to="/contact-us" className="link">Contact Us</Link>
        </div>

        <div className="auth-buttons desktop-auth">
          {userFullName ? (
            <Dropdown overlay={userMenu} trigger={['click']}>
              <span className="user-dropdown">
                <UserOutlined className="user-icon" /> {userFullName}
                <DownOutlined className="dropdown-icon" />
              </span>
            </Dropdown>
          ) : (
            <button className="signup-btn link" onClick={openSignupModal}>
              Login / Signup
            </button>
          )}
        </div>

      </nav>

      <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`} ref={sidebarRef}>
        <div className="sidebar-header">
          <Link to="/" className="logo-mobile" onClick={() => setIsMenuOpen(false)}>
            <span>Vishal Insurance</span>
          </Link>
          <div className="close-btn" onClick={() => setIsMenuOpen(false)}>
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
                    <Link to="/endowment-plan" className="sidebar-link sub" onClick={toggleMenu}>
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
                  Unit Linked Plans
                </Link>
              </div>
            </div>

            <Link to="/about-us" className="sidebar-link" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact-us" className="sidebar-link" onClick={toggleMenu}>
              Contact Us
            </Link>
          </div>


          <div className="sidebar-auth">
            {userFullName ? (
              <Dropdown overlay={userMenu} trigger={['click']}>
                <span className="user-dropdown">
                  <UserOutlined className="user-icon" /> {userFullName}
                  <DownOutlined className="dropdown-icon" />
                </span>
              </Dropdown>
            ) : (
              <button className="signup-btn mobile-signup-btn" onClick={openLoginModal}>
                Login / Signup
              </button>
            )}
          </div>


        </div>

      </div>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialMode={initialMode} />
    </div>
  );
};

export default Navbar;