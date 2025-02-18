import { useState, useRef, useEffect } from 'react';
import './PricingSlider.css';
import { CheckIcon } from './CheckIcon';

const PricingSlider = () => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth / 4;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      // Update scroll buttons after animation
      setTimeout(checkScroll, 300);
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const pricingData = [
    {
      image: '/api/placeholder/220/280',
      title: "Individual",
      price: "$29.99",
      features: [
        "1 user",
        "Unlimited calendars",
        "Unlimited event types",
        "Workflows",
        "Integrate with your favorite apps",
        "Accept payments via Stripe"
      ],
      className: "pink"
    },
    {
      title: "Teams",
      price: "$12",
      period: "per month/user",
      description: "Highly recommended for small teams who seek to upgrade their time & perform.",
      buttonText: "Get started",
      buttonVariant: "blue",
     
      features: [
        "1 team",
        "Schedule meetings as a team",
        "Round-Robin, Fixed Round-Robin",
        "Collective Events",
        "Advanced Routing Forms",
        "Team Workflows"
      ],
      className: "blue"
    },
    {
      title: "Enterprise",
      price: "$15k",
      period: "per year",
      description: "Robust scheduling for larger teams looking to have more control, privacy & security.",
      buttonText: "Contact us",
      buttonVariant: "light",
      features: [
        "1 parent team and unlimited sub-teams",
        "Organization workflows",
        "Insights - analyze your booking data",
        "Active directory sync",
        "24/7 Email, Chat and Phone support",
        "Sync your HRIS tools"
      ],
      className: "light-blue"
    }
  ];

  const allCards = [...pricingData, ...pricingData, ...pricingData];

  return (
    <div className="slider-outer-container">
      <button 
        className={`nav-button left ${!canScrollLeft ? 'hidden' : ''}`}
        onClick={() => scroll('left')}
        aria-label="Previous"
      >
        <span className="arrow-icon">←</span>
      </button>
      
      <div 
        className="cards-container" 
        ref={sliderRef}
        onScroll={checkScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {allCards.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.className}`}>
            {plan.badge && <div className="badge">{plan.badge}</div>}
            <h2>{plan.title}</h2>
            <div className="price-container">
              <span className="price">{plan.price}</span>
              <span className="period">{plan.period}</span>
            </div>
            <p className="description">{plan.description}</p>
            <button className={`cta-button ${plan.buttonVariant}`}>
              {plan.buttonText}
            </button>
            <div className="features">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="feature">
                  <CheckIcon />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button 
        className={`nav-button right ${!canScrollRight ? 'hidden' : ''}`}
        onClick={() => scroll('right')}
        aria-label="Next"
      >
        <span className="arrow-icon">→</span>
      </button>
    </div>
  );
};

export default PricingSlider;