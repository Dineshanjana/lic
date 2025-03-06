import { useEffect, useRef } from 'react';
import '../Css/LicTermPlans.css';
import FatherSon from '../assets/img/father-son-relation.png';

const TermPlansSection = () => {
  const ovalBackgroundRef = useRef(null);
  const applyButtonRef = useRef(null);

  useEffect(() => {
    // Add animation class to trigger check mark animations
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('animate');
      }, 500 + index * 200);
    });

    // Animate floating card with random subtle movements
    const ovalBackground = ovalBackgroundRef.current;
    const floatInterval = setInterval(() => {
      const randomX = Math.random() * 5 - 2.5;
      const randomRotate = Math.random() * 1 - 0.5;
      ovalBackground.style.transform = `translateY(-15px) translateX(${randomX}px) rotate(${randomRotate}deg)`;
      
      setTimeout(() => {
        ovalBackground.style.transform = '';
      }, 3000);
    }, 6000);
    
    // Add ripple effect to button
    const applyButton = applyButtonRef.current;
    const handleButtonClick = (e) => {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      applyButton.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };
    
    applyButton.addEventListener('click', handleButtonClick);
    
    // Cleanup
    return () => {
      clearInterval(floatInterval);
      applyButton.removeEventListener('click', handleButtonClick);
    };
  }, []);

  return (
    <section className="term-plans-section">
      <div className="left-content">
        <h1 className="tagline">Protect your loved ones with LIC's term plans</h1>
        <div className="features">
          <div className="feature-item">
            <div className="check-icon"></div>
            <span className="feature-text">High Coverage</span>
          </div>
          <div className="feature-item">
            <div className="check-icon"></div>
            <span className="feature-text">Low Premiums</span>
          </div>
          <div className="feature-item">
            <div className="check-icon"></div>
            <span className="feature-text">Financial Security</span>
          </div>
          <div className="feature-item">
            <div className="check-icon"></div>
            <span className="feature-text">Flexible Options</span>
          </div>
        </div>
        <p className="subtitle">Know your policy, understand the terms — Secure your future with confidence</p>
        <button className="apply-button" ref={applyButtonRef}>Apply Now</button>
      </div>
      <div className="right-content">
        <div className="oval-background" ref={ovalBackgroundRef}></div>
        <img src={FatherSon} alt="Father and son enjoying time together" className="family-image" />
        <div className="social-icons">
          <div className="social-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </div>
          <div className="social-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <div className="social-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermPlansSection;