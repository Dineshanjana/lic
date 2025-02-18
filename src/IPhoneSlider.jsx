// IPhoneShowcase.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './css/IPhoneSlider.css';

const IPhoneSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;

  const phones = [
    {
      model: 'iPhone 16 Pro',
      tagline: 'The ultimate iPhone.',
      price: 'From ₹119900.00*',
      colors: ['#F3E5AB', '#C0C0C0', '#000000'],
      isNew: true,
      image: '/api/placeholder/220/280'
    },
    {
      model: 'iPhone 16',
      tagline: 'A total powerhouse.',
      price: 'From ₹79900.00*',
      colors: ['#007AFF', '#800080', '#FFC0CB', '#000000'],
      isNew: true,
      image: '/api/placeholder/220/280'
    },
    {
      model: 'iPhone 16 Pro',
      tagline: 'The ultimate iPhone.',
      price: 'From ₹119900.00*',
      colors: ['#F3E5AB', '#C0C0C0', '#000000'],
      isNew: true,
      image: '/api/placeholder/220/280'
    },
    {
      model: 'iPhone 16',
      tagline: 'A total powerhouse.',
      price: 'From ₹79900.00*',
      colors: ['#007AFF', '#800080', '#FFC0CB', '#000000'],
      isNew: true,
      image: '/api/placeholder/220/280'
    },
    {
      model: 'iPhone 15',
      tagline: 'As amazing as ever.',
      price: 'From ₹69900.00*',
      colors: ['#FFC0CB', '#FFD700', '#007AFF', '#008000', '#000000'],
      isNew: false,
      image: '/api/placeholder/220/280'
    },
    {
      model: 'iPhone 14',
      tagline: 'All kinds of awesome.',
      price: 'From ₹59900.00*',
      colors: ['#007AFF', '#800080', '#FFD700', '#000000', '#FF0000'],
      isNew: false,
      image: '/api/placeholder/220/280'
    }
  ];

  const handleNext = () => {
    if (currentIndex < phones.length - cardsToShow) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const visiblePhones = phones.slice(currentIndex, currentIndex + cardsToShow);
  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex + cardsToShow < phones.length;

  return (
    <div className="showcase-container">
      <div className="products-wrapper">
        <div 
          className="products-grid"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {phones.map((phone, index) => (
            <div 
              key={`${phone.model}-${index}`} 
              className="product-card"
            >
              <div className="product-image-container">
                <img src={phone.image} alt={phone.model} className="product-image" />
              </div>
              
              <div className="color-dots">
                {phone.colors.map((color, idx) => (
                  <div
                    key={idx}
                    className="color-dot"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              
              {phone.isNew && <span className="new-tag">New</span>}
              <h2 className="product-title">{phone.model}</h2>
              <p className="product-tagline">{phone.tagline}</p>
              <p className="product-price">{phone.price}</p>
              
              <div className="button-container">
                <button className="learn-more-btn">Learn more</button>
                <button className="buy-btn">
                  Buy
                  <span style={{ marginLeft: '4px' }}>&gt;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="navigation">
        {showPrevButton && (
          <button className="nav-button" onClick={handlePrev}>
            <ChevronLeft size={24} />
          </button>
        )}
        {showNextButton && (
          <button className="nav-button" onClick={handleNext}>
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default IPhoneSlider;