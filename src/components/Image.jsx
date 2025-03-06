import React, { useEffect, useState } from 'react';
import $ from 'jquery';  // Make sure to install jquery using npm
import '../Css/Image.css';
import A from '../assets/img/1.png';
import B from '../assets/img/2.png';
import C from '../assets/img/3.png';
import D from '../assets/img/4.png';
import E from '../assets/img/5.png';
import F from '../assets/img/6.png';
import G from '../assets/img/7.png';


const Image = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Handle click events for slider images
    $(".slider-img").on("click", function () {
      $(".slider-img").removeClass("active");
      $(this).addClass("active");
    });

    // Handle window resize to detect mobile/desktop
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listeners
    return () => {
      $(".slider-img").off("click");
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sliderData = [
    { id: 1, image: A, name: "Mike", role: "web3 Developer" },
    { id: 2, image: B, name: "samite", role: "wordpress Developer" },
    { id: 3, image: C, name: "hashi", role: "java Developer" },
    { id: 4, image: D, name: "kaity", role: "web Developer" },
    { id: 5, image: E, name: "lauren", role: "php Developer" },
    { id: 6, image: F, name: "ryan", role: "seo Developer" },
    { id: 7, image: G, name: "dakes", role: "sql Developer" }
  ];

  return (
    <section className="slider-container">
      <div className={`slider-images ${isMobile ? 'mobile-view' : ''}`}>
        {sliderData.map((item, index) => (
          <div 
            key={item.id} 
            className={`slider-img ${index === 3 ? 'active' : ''}`}
          >
            <img src={item.image} alt={item.name} />
            <h1 className='item-name'>{item.name}</h1>
            <div className="details">
              <h2>{item.name}</h2>
              <p>{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Image;