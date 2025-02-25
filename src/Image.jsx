import React, { useEffect } from 'react';
import $ from 'jquery';  // Make sure to install jquery using npm
import './css/Image.css';

const Image = () => {
  useEffect(() => {
    // This is equivalent to jQuery(document).ready()
    $(".slider-img").on("click", function () {
      $(".slider-img").removeClass("active");
      $(this).addClass("active");
    });

    // Cleanup function to remove event listeners
    return () => {
      $(".slider-img").off("click");
    };
  }, []); // Empty dependency array means this runs once on mount

  const sliderData = [
    { id: 1, image: "first.jpg", name: "Mike", role: "web3 Developer" },
    { id: 2, image: "second.jpg", name: "samite", role: "wordpress Developer" },
    { id: 3, image: "third.jpg", name: "hashi", role: "java Developer" },
    { id: 4, image: "fourth.jpg", name: "kaity", role: "web Developer" },
    { id: 5, image: "fifth.jpg", name: "lauren", role: "php Developer" },
    { id: 6, image: "sixth.webp", name: "ryan", role: "seo Developer" },
    { id: 7, image: "seventh.jpg", name: "dakes", role: "sql Developer" }
  ];

  return (
    <section className="slider-container">
      <div className="slider-images">
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