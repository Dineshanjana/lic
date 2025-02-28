import { useState, useRef, useEffect } from 'react';
import '../Css/PricingSlider.css';
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
      image: "/src/assets/img/first.jpg",
      title: "LIC Jeevan Amar",
      description: "A non-linked, non-participating, term insurance plan.",
      buttonText: "Apply Now",
      buttonVariant: "blue",
      features: [
        "Flexible premium payment options",
        "Special rates for non-smokers",
        "Option to enhance coverage",
        "Tax benefits under Section 80C",
        "Death benefit options"
      ],
      className: "pink"
    },
    {
      image: "/src/assets/img/second.jpg",
      title: "LIC Tech Term",
      description: "An online term insurance plan with attractive features.",
      buttonText: "Apply Now",
      buttonVariant: "blue",
      features: [
        "High sum assured rebates",
        "Special rates for women",
        "Flexible premium payment options",
        "Option to enhance coverage",
        "Tax benefits under Section 80C"
      ],
      className: "blue"
    },
    {
      image: "/src/assets/img/third.jpg",
      title: "LIC Jeevan Labh",
      description: "A limited premium paying, non-linked, with-profits endowment plan.",
      buttonText: "Apply Now",
      buttonVariant: "blue",
      features: [
        "Combination of protection and savings",
        "Limited premium payment term",
        "Loan facility available",
        "Tax benefits under Section 80C",
        "Maturity benefit"
      ],
      className: "light-blue"
    }
  ];

  const allCards = [...pricingData, ...pricingData, ...pricingData];

  return (
    <div className="pslider-outer-container">
      <div className="pslider-content">
        <h1 className="pslider-plans-heading">All Preferable Plans</h1>
        <button 
          className={`pslider-nav-button left ${!canScrollLeft ? 'hidden' : ''}`}
          onClick={() => scroll('left')}
          aria-label="Previous"
        >
          <span className="pslider-arrow-icon">&#10094;</span>
        </button>
        
        <div 
          className="pslider-cards-container" 
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
              <img src={plan.image} alt="Plan" className="pslider-plan-image" />
              <h2 className="pslider-title">{plan.title}</h2>
              <p className="pslider-description">{plan.description}</p>
              <button className={`pslider-cta-button ${plan.buttonVariant}`}>
                {plan.buttonText}
              </button>
              <div className="pslider-features">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="fpslider-eature">
                    <CheckIcon />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button 
          className={`pslider-nav-button right ${!canScrollRight ? 'hidden' : ''}`}
          onClick={() => scroll('right')}
          aria-label="Next"
        >
          <span className="pslider-arrow-icon">&#10095;</span>
        </button>
      </div>
    </div>
  );
};

export default PricingSlider;