import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../Css/Testimonials.css";
import BackImg from '../assets/img/achiv/licback.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const testimonialData = [
    {
      id: 1,
      name: "राजेश शर्मा",
      role: "LIC प्रतिनिधि, दिल्ली",
      testimonial:
        "जीवन बीमा सबसे बड़ा उपहार है जो आप अपने परिवार को दे सकते हैं। अपनों के सुरक्षित भविष्य के लिए आज ही एलआईसी पॉलिसी लें।",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Senior LIC Agent, Mumbai",
      testimonial:
        "I've helped over 200 families secure their future with the right LIC policies. Nothing feels better than knowing you've helped protect someone's loved ones.",
    },
    {
      id: 3,
      name: "अमित गुप्ता",
      role: "वरिष्ठ LIC सलाहकार, जयपुर",
      testimonial:
        "अगर करते हैं अपने परिवार से प्यार, तो जीवन बीमा करायें मेरे यार। सुरक्षित भविष्य की गारंटी है एलआईसी पॉलिसी, आपके परिवार के साथ हमारा वादा है।",
    },
    {
      id: 4,
      name: "Sameer Khan",
      role: "LIC Development Officer, Hyderabad",
      testimonial:
        "Life insurance isn't just a policy, it's a promise to your family that they'll be taken care of no matter what happens. Secure their tomorrow, today.",
    },
    {
      id: 5,
      name: "सुनीता देवी",
      role: "LIC एजेंट, लखनऊ",
      testimonial:
        "25 सालों से एलआईसी के साथ काम करते हुए, मैंने देखा है कि कैसे एक छोटी सी पॉलिसी परिवारों को संकट के समय आर्थिक सहारा दे सकती है। अपने प्रियजनों की सुरक्षा सुनिश्चित करें।",
    },
    {
      id: 6,
      name: "Vikram Singh",
      role: "LIC Advisor, Chandigarh",
      testimonial:
        "The greatest gift you can give your family isn't something they can touch or see - it's the invisible guarantee that they'll always be financially protected.",
    },
    {
      id: 7,
      name: "मीना कुमारी",
      role: "LIC प्रतिनिधि, पटना",
      testimonial:
        "जीवन अनिश्चित है, लेकिन आपके परिवार का भविष्य अनिश्चित नहीं होना चाहिए। एलआईसी के साथ, आप अपने प्रियजनों के लिए एक सुरक्षित कल की नींव रख सकते हैं।",
    },
  ];

  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonialData.length - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev < testimonialData.length - 1 ? prev + 1 : 0));
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Handle swipe for touch devices
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        handleNextClick();
      } else {
        handlePrevClick();
      }
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h1>What Our Clients Are Saying</h1>
        <p>Hear from our LIC representatives about protecting your family's future</p>
      </div>
      <div className="testimonials-background" style={{ backgroundImage: `url(${BackImg})` }}>
        <div className="testimonials-content">
          <div className="testimonials-card-container">
            <div
              ref={sliderRef}
              className="testimonial-slider"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">❝</div>
                  <p className="quote">{testimonialData[activeIndex].testimonial}</p>
                  <div className="testimonial-author">
                    <h3>{testimonialData[activeIndex].name}</h3>
                    {/* <p className="role">{testimonialData[activeIndex].role}</p> */}
                  </div>
                </div>
              </div>

              <div className="navigation-controls">
                <button className="nav-button prev-button" onClick={handlePrevClick} aria-label="Previous testimonial">
                  <ChevronLeft className="nav-icon" />
                </button>
                <button className="nav-button next-button" onClick={handleNextClick} aria-label="Next testimonial">
                  <ChevronRight className="nav-icon" />
                </button>
              </div>

              <div className="slider-controls">
                {testimonialData.map((_, index) => (
                  <span
                    key={index}
                    className={`slider-dot ${index === activeIndex ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;