import React, { useState, useEffect } from 'react';

const Image = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Start with the 4th image active (index 3)
  
  const sliderData = [
    {
      id: 1,
      name: "LIC Plan 1",
      position: "Secure your future with LIC Plan 1",
      imgSrc: "first.jpg"
    },
    {
      id: 2,
      name: "LIC Plan 2",
      position: "Invest in LIC Plan 2 for a better tomorrow",
      imgSrc: "second.jpg"
    },
    {
      id: 3,
      name: "LIC Plan 3",
      position: "LIC Plan 3: Your trusted partner",
      imgSrc: "third.jpg"
    },
    {
      id: 4,
      name: "LIC Plan 4",
      position: "LIC Plan 4: Comprehensive coverage",
      imgSrc: "fourth.jpg"
    },
    {
      id: 5,
      name: "LIC Plan 5",
      position: "LIC Plan 5: Secure your family's future",
      imgSrc: "fifth.jpg"
    },
    {
      id: 6,
      name: "LIC Plan 6",
      position: "LIC Plan 6: A legacy of trust",
      imgSrc: "sixth.webp"
    },
    {
      id: 7,
      name: "LIC Plan 7",
      position: "LIC Plan 7: Your trusted companion",
      imgSrc: "seventh.jpg"
    }
  ];
  
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // Add the Google Fonts import
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <div className="slider-container">
      <h1 className="achievements-heading">Achievements Section</h1>
      <div className="slider-images">
        {sliderData.map((slide, index) => (
          <div 
            key={slide.id}
            className={`slider-img ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={slide.imgSrc} alt={slide.name} />
            <h1 className='headingimage'>{slide.name}</h1>
            <div className="details">
              <h2>{slide.name}</h2>
              <p>{slide.position}</p>
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        * {
          margin: 0px;
          padding: 0px;
          box-sizing: border-box;
          font-family: "Jost", sans-serif;
        }
        
        .slider-container {
        margin-top:100px;
          width: 100%;
          height: 100vh;
          background-image: url('/api/placeholder/1920/1080');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom:90px;
        }
        
        .achievements-heading {
          font-size: 3rem;
          font-weight: 700;
          color: #black;
          margin-bottom: 20px;
        }
        
        .slider-images {
          display: flex;
          align-items: center;
          gap: 21px;
        }
        
        .slider-images img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }
        
        .slider-img {
          width: 110px;
          border-radius: 6px;
          cursor: pointer;
          position: relative;
          transition: 0.7s ease;
        }
        
        .slider-images .slider-img:nth-child(1),
        .slider-images .slider-img:nth-child(7) {
          height: 480px;
        }
        
        .slider-images .slider-img:nth-child(2),
        .slider-images .slider-img:nth-child(6) {
          height: 560px;
        }
        
        .slider-images .slider-img:nth-child(3),
        .slider-images .slider-img:nth-child(4),
        .slider-images .slider-img:nth-child(5) {
          height: 665px;
        }
        
        .headingimage {
          font-family: "Jost", sans-serif;
          font-size: 40px;
          font-weight: 700;
          text-align: left;
          text-transform: uppercase;
          color: #fff;
          position: absolute;
          top: 50%;
          left: -10%;
          transform: rotate(270deg);
          transition: 0.7s ease;
        }
        
        .details {
          position: absolute;
          bottom: 43px;
          left: 43px;
        }
        
        .details h2 {
          font-family: "Jost", sans-serif;
          font-size: 26px;
          font-weight: 700;
          text-align: left;
          line-height: 44px;
          text-align: left;
          color: #fff;
          text-transform: uppercase;
          transition: 0.7s ease;
          display: none;
        }
        
        .details p {
          font-family: "Jost", sans-serif;
          font-size: 20px;
          font-weight: 700;
          text-align: left;
          line-height: 33px;
          text-align: left;
          color: #fff;
          text-transform: uppercase;
          transition: 0.7s ease;
          display: none;
        }
        
        .slider-img.active {
          width: 766px !important;
          height: 750px !important;
        }
        
        .slider-img.active h1 {
          display: none;
        }
        
        .slider-img.active .details p,
        .slider-img.active .details h2 {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Image;