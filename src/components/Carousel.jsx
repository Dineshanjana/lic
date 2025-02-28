import React, { useEffect, useState } from "react";
import "../Css/Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 4; // Total number of slides

  useEffect(() => {
    // Auto-advance timer
    const autoAdvanceTimer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSlides);
    }, 7000);

    // Cleanup on unmount
    return () => clearInterval(autoAdvanceTimer);
  }, []);

  // Handle manual navigation
  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  // Content for slides
  const slideContent = [
    {
      author: "LIC",
      title: "Largest Insurer",
      topic: "Achievement",
      des: "LIC is the largest life insurer in India with a market share of over 70%.",
      imgSrc: "/src/assets/achievement/vishal-self.png",
      imgAlt: "Market Leader Achievement",
    },
    {
      author: "LIC",
      title: "Extensive Network",
      topic: "Achievement",
      des: "LIC has an extensive network of over 2,000 branches and more than 1 million agents.",
      imgSrc: "/src/assets/achievement/vishal-group.png",
      imgAlt: "Extensive Network Achievement",
    },
    {
      author: "LIC",
      title: "Customer Trust",
      topic: "Achievement",
      des: "LIC has been awarded the 'Most Trusted Brand' in the insurance category for several years.",
      imgSrc: "/src/assets/achievement/certificate.png",
      imgAlt: "Most Trusted Brand Achievement",
    },
    {
      author: "LIC",
      title: "High Claim Settlement",
      topic: "Achievement",
      des: "LIC has a high claim settlement ratio, ensuring timely and hassle-free claim processing.",
      imgSrc: "/src/assets/achievement/vishal-self.png",
      imgAlt: "Claim Settlement Achievement",
    },
  ];

  return (
    <div className="carousel-container">
      {/* Main slider */}
      <div className="carousel-main">
        {/* Animated background shapes - both top and bottom */}
        <div className="animated-shapes">
          {/* Bottom shapes */}
          <div className="shape shape-1 bottom-shape"></div>
          <div className="shape shape-2 bottom-shape"></div>
          <div className="shape shape-3 bottom-shape"></div>
          <div className="shape shape-4 bottom-shape"></div>
          <div className="shape shape-5 bottom-shape"></div>
          
          {/* Top shapes */}
          <div className="shape shape-6 top-shape"></div>
          <div className="shape shape-7 top-shape"></div>
          <div className="shape shape-8 top-shape"></div>
          <div className="shape shape-9 top-shape"></div>
        </div>

        {slideContent.map((slide, index) => (
          <div 
            key={index}
            className={`carousel-slide ${index === activeIndex ? "active-slide" : ""}`}
            style={{ zIndex: index === activeIndex ? 1 : 0, opacity: index === activeIndex ? 1 : 0 }}
          >
            <div className="slide-content">
              <div className="left-content">
                <div className="slide-author">{slide.author}</div>
                <div className="slide-title">{slide.title}</div>
                <div className="slide-topic">
                  <span className="highlight-text">{slide.topic}</span>
                  <svg className="underline-svg" width="100" height="10" viewBox="0 0 100 10">
                    <path d="M0,5 Q25,10 50,5 T100,5" stroke="#FFD700" strokeWidth="3" fill="none" />
                  </svg>
                </div>
                <div className="slide-description">"{slide.des}"</div>
              </div>
              <div className="right-content">
                <div className="image-container">
                  <img 
                    src={slide.imgSrc} 
                    alt={slide.imgAlt} 
                    className="achievement-image"
                  />
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation dots */}
        <div className="carousel-dots">
          {slideContent.map((_, index) => (
            <div 
              key={index}
              className={`dot ${index === activeIndex ? "active-dot" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>

        {/* Navigation arrows */}
        <div className="carousel-arrows">
          <button className="arrow-btn prev-btn" onClick={handlePrev}>&#10094;</button>
          <button className="arrow-btn next-btn" onClick={handleNext}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;