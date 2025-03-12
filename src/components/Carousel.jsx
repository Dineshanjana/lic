import React, { useEffect, useState } from "react";
import "../Css/Carousel.css";
import img1 from '../assets/img/achiv/vishalAward.jpeg';
import img2 from '../assets/img/achiv/vishalFull.jpeg';
import img3 from '../assets/img/achiv/vishalRoad.jpeg';
import img4 from '../assets/img/achiv/vishalAward2.jpeg';

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

  // Content for slides
  const slideContent = [
    {
      author: "LIC",
      title: "Largest Insurer",
      topic: "Achievement",
      des: "LIC is the largest life insurer in India with a market share of over 70%.",
      bgImage: `url(${img1})`,
      thumbImage: `url(${img1})`,
      thumbTitle: "Largest Insurer",
      thumbDesc: "Market Leader",
    },
    {
      author: "LIC",
      title: "Extensive Network",
      topic: "Achievement",
      des: "LIC has an extensive network of over 2,000 branches and more than 1 million agents.",
      bgImage: `url(${img2})`,
      thumbImage: `url(${img2})`,
      thumbTitle: "Extensive Network",
      thumbDesc: "Wide Reach",
    },
    {
      author: "LIC",
      title: "Customer Trust",
      topic: "Achievement",
      des: "LIC has been awarded the 'Most Trusted Brand' in the insurance category for several years.",
      bgImage: `url(${img3})`,
      thumbImage: `url(${img3})`,
      thumbTitle: "Customer Trust",
      thumbDesc: "Most Trusted Brand",
    },
    {
      author: "LIC",
      title: "High Claim Settlement",
      topic: "Achievement",
      des: "LIC has a high claim settlement ratio, ensuring timely and hassle-free claim processing.",
      bgImage: `url(${img4})`,
      thumbImage: `url(${img4})`,
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
            <div
              className="background-image"
              style={{ backgroundImage: slide.bgImage }}
            >
              <div className="overlay"></div>
            </div>
            <div className="content">
              <div className="author">{slide.author}</div>
              <div className="title">{slide.title}</div>
              <div className="topic">{slide.topic}</div>
              <div className="des">"{slide.des}"</div>
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
            <div
              className="thumb-bg"
              style={{ backgroundImage: slide.thumbImage }}
            >
              <div className="thumb-overlay"></div>
            </div>
            <div className="content">
              <div className="title">{slide.thumbTitle}</div>
              {/* <div className="description">{slide.thumbDesc}</div> */}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Carousel;