// ServiceSection.jsx
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import './Css/ServiceSection.css';

const ServiceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const cardsRef = useRef([]);

  const services = [
    {
      id: 1,
      title: "NEW TECHNOLOGIES",
      description: "Space engineering becomes more and more advanced",
      image: "/abhinavi.png"
    },
    {
      id: 2,
      title: "NEW TECHNOLOGIES",
      description: "Space engineering becomes more and more advanced",
      image: "/abhinavi.png"
    },
    {
      id: 3,
      title: "NEW TECHNOLOGIES",
      description: "Space engineering becomes more and more advanced",
      image: "/abhinavi.png"
    },
    {
      id: 4,
      title: "NEW TECHNOLOGIES",
      description: "Space engineering becomes more and more advanced",
      image: "/abhinavi.png"
    }
  ];

  // Group services into pairs
  const serviceRows = [];
  for (let i = 0; i < services.length; i += 2) {
    serviceRows.push(services.slice(i, i + 2));
  }

  const handleMouseEnter = (service, index) => {
    setExpandedIndex(service.id);
    const card = cardsRef.current[index];
    const rowIndex = Math.floor(index / 2);
    const isLeftCard = index % 2 === 0;

    // Get the other card in the same row
    const otherCardIndex = isLeftCard ? index + 1 : index - 1;
    const otherCard = cardsRef.current[otherCardIndex];

    // Expand current card
    gsap.to(card, {
      width: "1200px",
      duration: 0.5,
      ease: "power2.out",
      transformOrigin: isLeftCard ? "left center" : "right center"
    });

    // Hide other card in the row
    if (otherCard) {
      gsap.to(otherCard, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: "power2.out"
      });
    }

    // Animate text content
    const textContent = card.querySelector(".service-text-content");
    gsap.to(textContent, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      delay: 0.2
    });
  };

  const handleMouseLeave = (index) => {
    setExpandedIndex(null);
    const card = cardsRef.current[index];
    const isLeftCard = index % 2 === 0;

    // Get the other card in the same row
    const otherCardIndex = isLeftCard ? index + 1 : index - 1;
    const otherCard = cardsRef.current[otherCardIndex];

    // Restore current card
    gsap.to(card, {
      width: "450px",
      duration: 0.5,
      ease: "power2.out"
    });

    // Show other card in the row
    if (otherCard) {
      gsap.to(otherCard, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    }

    // Animate text content
    const textContent = card.querySelector(".service-text-content");
    gsap.to(textContent, {
      y: 100,
      opacity: 0,
      duration: 0.3
    });
  };

  useEffect(() => {
    // Initialize text content position
    cardsRef.current.forEach(card => {
      if (card) {
        const textContent = card.querySelector(".service-text-content");
        gsap.set(textContent, {
          y: 100,
          opacity: 0
        });
      }
    });
  }, []);

  return (
    <div className="service-container">
      <h2 className="service-heading">Service Section</h2>
      
      {serviceRows.map((row, rowIndex) => (
        <div key={rowIndex} className="service-row">
          {row.map((service, index) => {
            const globalIndex = rowIndex * 2 + index;
            return (
              <div
                key={service.id}
                ref={el => cardsRef.current[globalIndex] = el}
                className={`service-card ${expandedIndex === service.id ? 'expanded' : ''}`}
                onMouseEnter={() => handleMouseEnter(service, globalIndex)}
                onMouseLeave={() => handleMouseLeave(globalIndex)}
              >
                <div className="service-image-container">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />
                  <div className="service-text-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;