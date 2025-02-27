import React, { useEffect, useState } from "react";
import "./Carousel.css";

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
      bgClass: "review-1",
      thumbClass: "thumb-1",
      thumbTitle: "Largest Insurer",
      thumbDesc: "Market Leader",
    },
    {
      author: "LIC",
      title: "Extensive Network",
      topic: "Achievement",
      des: "LIC has an extensive network of over 2,000 branches and more than 1 million agents.",
      bgClass: "review-2",
      thumbClass: "thumb-2",
      thumbTitle: "Extensive Network",
      thumbDesc: "Wide Reach",
    },
    {
      author: "LIC",
      title: "Extensive Network",
      topic: "Achievement",
      des: "LIC has been awarded the 'Most Trusted Brand' in the insurance category for several years.",
      bgClass: "review-3",
      thumbClass: "thumb-3",
      thumbTitle: "Customer Trust",
      thumbDesc: "Most Trusted Brand",
    },
    {
      author: "LIC",
      title: "High Claim Settlement",
      topic: "Achievement",
      des: "LIC has a high claim settlement ratio, ensuring timely and hassle-free claim processing.",
      bgClass: "review-4",
      thumbClass: "thumb-4",
      thumbTitle: "High Claim Settlement",
      thumbDesc: "Reliable Service",
    },
  ];

  return (
    <div className="carousel">
      {/* Main slider */}
      <div className="list">
        {slideContent.map((slide, index) => (
          <div 
            key={index}
            className={`item ${index === activeIndex ? "active" : ""}`}
            style={{ zIndex: index === activeIndex ? 1 : 0, opacity: index === activeIndex ? 1 : 0 }}
          >
            <div className={`text-bg ${slide.bgClass}`}></div>
            <div className="content">
              <div className="author">{slide.author}</div>
              <div className="title">{slide.title}</div>
              <div className="topic">{slide.topic}</div>
              <div className="des">"{slide.des}"</div>
              <div className="buttons">
               
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="thumbnail">
        {slideContent.map((slide, index) => (
          <div 
            key={index}
            className={`item ${index === activeIndex ? "active-thumb" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className={`text-bg-thumb ${slide.thumbClass}`}></div>
            <div className="content">
              <div className="title">{slide.thumbTitle}</div>
              <div className="description">{slide.thumbDesc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="arrows">
        <button onClick={handlePrev}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </div>

      {/* Progress indicator removed */}
    </div>
  );
};

export default Carousel;