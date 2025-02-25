import React, { useState, useEffect } from 'react';

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const services = [
    {
      id: 1,
      title: "Web Tech",
      description: "Modern web development solutions using cutting-edge technologies and frameworks to create responsive, scalable applications.",
      image: "1.png",
      ctaText: "Enquire more"
    },
    {
      id: 2,
      title: "App Development",
      description: "Native and cross-platform mobile applications with intuitive UX/UI and powerful backend integration for iOS and Android.",
      image: "2.png",
      ctaText: "Enquire more"
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, database management, and scalable architecture for your digital products.",
      image: "3.png",
      ctaText: "Enquire more"
    },
    {
      id: 4,
      title: "Marketing",
      description: "Strategic digital marketing campaigns to increase your brand visibility, engage customers, and drive conversion rates.",
      image: "4.png",
      ctaText: "Enquire more"
    },
    {
      id: 5,
      title: "Software Testing",
      description: "Comprehensive quality assurance with automated and manual testing to ensure bug-free, reliable software products.",
      image: "7.png",
      ctaText: "Enquire more"
    }
  ];

  const goToNext = () => {
    if (!animating) {
      setAnimating(true);
      setActiveIndex((current) => (current === services.length - 1 ? 0 : current + 1));
      setTimeout(() => setAnimating(false), 500);
    }
  };

  const goToPrev = () => {
    if (!animating) {
      setAnimating(true);
      setActiveIndex((current) => (current === 0 ? services.length - 1 : current - 1));
      setTimeout(() => setAnimating(false), 500);
    }
  };

  const goToSlide = (index) => {
    if (!animating && index !== activeIndex) {
      setAnimating(true);
      setActiveIndex(index);
      setTimeout(() => setAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        goToNext();
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [animating]);

  return (
    <div className="services-section">
      <h1 className="services-heading">Our Services</h1>
      
      <div className="slider-container">
        <button className="slider-arrow slider-arrow-left" onClick={goToPrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="slider-content">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`slide ${index === activeIndex ? 'active' : ''}`}
              style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
            >
              <div className="slide-inner">
                <div className="slide-left">
                  <div className="service-illustration">
                    <div className="service-image-container">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="service-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="slide-right">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                  <button className="enquire-btn">{service.ctaText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="slider-arrow slider-arrow-right" onClick={goToNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="slider-tabs">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className={`tab ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            {service.title}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .services-section {
          position: relative;
          width: 100%;
          padding: 4rem 0 5rem;
          background: linear-gradient(135deg, #1f2b7b 0%, #0d1032 60%, #000 100%);
          color: white;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .services-heading {
          font-size: 4rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 4rem;
          animation: fadeIn 1s ease-in-out;
          text-shadow: 0 2px 10px rgba(140, 82, 255, 0.3);
          letter-spacing: 1px;
        }
        
        .slider-container {
          width: 100%;
          max-width: 1400px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 2rem;
          margin-bottom: 3rem;
          height: 500px;
        }
        
        .slider-arrow {
          position: absolute;
          height: 60px;
          width: 60px;
          border-radius: 50%;
          background: rgba(140, 82, 255, 0.2);
          border: 2px solid rgba(140, 82, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .slider-arrow:hover {
          background: rgba(140, 82, 255, 0.4);
          transform: scale(1.05);
        }
        
        .slider-arrow:active {
          transform: scale(0.98);
        }
        
        .slider-arrow-left {
          left: 30px;
        }
        
        .slider-arrow-right {
          right: 30px;
        }
        
        .slider-content {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .slide {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
          opacity: 0;
        }
        
        .slide.active {
          opacity: 1;
        }
        
        .slide-inner {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem 3rem;
        }
        
        .slide-left {
          width: 45%;
          position: relative;
          z-index: 2;
        }
        
        .slide-right {
          width: 50%;
          padding-left: 3rem;
          position: relative;
          z-index: 2;
        }
        
        .service-illustration {
          position: relative;
          width: 100%;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
        }
        
        .service-image-container {
          position: relative;
          width: 400px;
          height: 300px;
          z-index: 2;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          transform: perspective(1000px) rotateY(-15deg);
          transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          border: 2px solid rgba(140, 82, 255, 0.2);
        }
        
        .service-image-container:hover {
          transform: perspective(1000px) rotateY(0);
        }
        
        .service-image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(140, 82, 255, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
          z-index: 3;
          pointer-events: none;
        }
        
        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
          filter: brightness(0.9) contrast(1.1);
        }
        
        .slide.active .service-image {
          animation: zoomImage 10s infinite alternate ease-in-out;
        }
        
        @keyframes zoomImage {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
        
        .service-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1.8rem;
          animation: fadeSlideUp 0.8s ease-out;
          background: linear-gradient(90deg, #ffffff, #c4b5fd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.5px;
          position: relative;
        }
        
        .service-title::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -10px;
          width: 80px;
          height: 4px;
          background: rgb(140, 82, 255);
          border-radius: 2px;
        }
        
        .service-description {
          font-size: 1.2rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          animation: fadeSlideUp 0.8s ease-out 0.2s both;
          color: rgba(255, 255, 255, 0.9);
          max-width: 90%;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .enquire-btn {
          padding: 1rem 2.5rem;
          background: rgb(140, 82, 255);
          border: none;
          color: white;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.4s ease;
          animation: fadeSlideUp 0.8s ease-out 0.4s both;
          position: relative;
          overflow: hidden;
          letter-spacing: 0.5px;
          box-shadow: 0 10px 20px rgba(140, 82, 255, 0.3);
        }
        
        .enquire-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: 0.5s;
        }
        
        .enquire-btn:hover {
          background: rgb(116, 58, 231);
          transform: translateY(-3px);
          box-shadow: 0 15px 25px rgba(116, 58, 231, 0.4);
        }
        
        .enquire-btn:hover::before {
          left: 100%;
        }
        
        .enquire-btn:active {
          transform: translateY(0);
        }
        
        .slider-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          gap: 0.5rem;
        }
        
        .tab {
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          text-align: center;
          border-radius: 6px;
          margin: 0.3rem;
        }
        
        .tab:hover {
          color: white;
          background: rgba(140, 82, 255, 0.1);
        }
        
        .tab.active {
          color: white;
          font-weight: 600;
          background: rgba(140, 82, 255, 0.15);
        }
        
        .tab.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background: rgb(140, 82, 255);
          border-radius: 3px;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 1200px) {
          .slider-container {
            height: 450px;
          }
          
          .service-image-container {
            width: 350px;
            height: 280px;
          }
          
          .service-title {
            font-size: 3rem;
          }
        }
        
        @media (max-width: 992px) {
          .slide-inner {
            flex-direction: column;
            padding: 2rem;
          }
          
          .slide-left, .slide-right {
            width: 100%;
            padding: 0;
          }
          
          .slide-left {
            margin-bottom: 2rem;
          }
          
          .slider-container {
            height: auto;
            padding-bottom: 2rem;
            min-height: 650px;
          }
          
          .service-image-container {
            width: 320px;
            height: 240px;
            transform: perspective(1000px) rotateY(0);
          }
          
          .service-title {
            font-size: 2.5rem;
            text-align: center;
          }
          
          .service-title::after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .service-description {
            text-align: center;
            max-width: 100%;
          }
          
          .slide-right {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        
        @media (max-width: 768px) {
          .services-heading {
            font-size: 3rem;
          }
          
          .slider-arrow {
            width: 45px;
            height: 45px;
          }
          
          .slider-arrow-left {
            left: 15px;
          }
          
          .slider-arrow-right {
            right: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .services-heading {
            font-size: 2.5rem;
          }
          
          .service-title {
            font-size: 2rem;
          }
          
          .service-illustration {
            height: 220px;
          }
          
          .service-image-container {
            width: 260px;
            height: 200px;
          }
          
          .slider-arrow {
            width: 40px;
            height: 40px;
          }
          
          .service-description {
            font-size: 1rem;
          }
          
          .enquire-btn {
            padding: 0.8rem 2rem;
          }
          
          .slider-tabs {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .tab {
            font-size: 0.9rem;
            padding: 0.5rem 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceSection;