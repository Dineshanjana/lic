import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";
import "../Css/Testimonials.css";
import BackImg from '../assets/img/achiv/licback.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sliderRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Close modal when clicking outside
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const testimonialData = [
    {
      id: 1,
      name: "राजेश शर्मा",
      testimonial:
        "जीवन बीमा सबसे बड़ा उपहार है जो आप अपने परिवार को दे सकते हैं। अपनों के सुरक्षित भविष्य के लिए आज ही एलआईसी पॉलिसी लें।",
    },
    {
      id: 2,
      name: "Priya Patel",
      testimonial:
        "I've helped over 200 families secure their future with the right LIC policies. Nothing feels better than knowing you've helped protect someone's loved ones.",
    },
    {
      id: 3,
      name: "अमित गुप्ता",
      testimonial:
        "अगर करते हैं अपने परिवार से प्यार, तो जीवन बीमा करायें मेरे यार। सुरक्षित भविष्य की गारंटी है एलआईसी पॉलिसी, आपके परिवार के साथ हमारा वादा है।",
    },
    {
      id: 4,
      name: "Sameer Khan",
      testimonial:
        "Life insurance isn't just a policy, it's a promise to your family that they'll be taken care of no matter what happens. Secure their tomorrow, today.",
    },
    {
      id: 5,
      name: "सुनीता देवी",
      testimonial:
        "25 सालों से एलआईसी के साथ काम करते हुए, मैंने देखा है कि कैसे एक छोटी सी पॉलिसी परिवारों को संकट के समय आर्थिक सहारा दे सकती है। अपने प्रियजनों की सुरक्षा सुनिश्चित करें।",
    },
    {
      id: 6,
      name: "Vikram Singh",
      testimonial:
        "The greatest gift you can give your family isn't something they can touch or see - it's the invisible guarantee that they'll always be financially protected.",
    },
    {
      id: 7,
      name: "मीना कुमारी",
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For demonstration purposes, we'll just close the modal
    closeModal();
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
        <button onClick={openModal} className="add-testimonial-btn">
          <Plus size={16} /> Add Your Testimonial
        </button>
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

      {/* Testimonial Form Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="testimonial-modal" ref={modalRef}>
            <div className="modal-header">
              <h2>Share Your Experience</h2>
              <button className="close-modal" onClick={closeModal}>
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="testimonial-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Enter your name"
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="testimonial">Your Testimonial</label>
                <textarea 
                  id="testimonial" 
                  name="testimonial" 
                  rows="5" 
                  placeholder="Share your experience with LIC services..."
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <div className="rating-container">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="star">★</span>
                  ))}
                </div>
              </div>
              
              <button type="submit" className="submit-testimonial">
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;