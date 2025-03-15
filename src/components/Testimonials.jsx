import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight, X, Plus } from "lucide-react";
import { message as antdMessage, Spin } from "antd";
import "../Css/Testimonials.css";
import BackImg from '../assets/img/achiv/licback.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonialData, setTestimonialData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const sliderRef = useRef(null);
  const modalRef = useRef(null);

  const dummyTestimonials = [
    { id: 1, name: "Ankit Mehta", testimonial: "Vishal ji, the LIC agent, helped me pick the perfect policy for my family. Highly recommend!" },
    { id: 2, name: "Kavita Singh", testimonial: "Great support from Vishal ji! Explained everything clearly and efficiently." },
    { id: 3, name: "Rahul Sharma", testimonial: "I was confused about LIC policies, but Vishal ji guided me brilliantly. Excellent service!" },
    { id: 4, name: "Neha Verma", testimonial: "Vishal ji was so patient and informative. Made sure I understood every detail." },
    { id: 5, name: "Amit Patel", testimonial: "Vishal ji was a lifesaver! Helped me secure my family's future with the best plan." },
  ];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("https://vishal-backend.vercel.app/api/message/get-review");
        if (response.data && response.data.length) {
          setTestimonialData(response.data);
        } else {
          setTestimonialData(dummyTestimonials);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setTestimonialData(dummyTestimonials);
      }
    };

    fetchReviews();
  }, []);

  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonialData.length - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev < testimonialData.length - 1 ? prev + 1 : 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const reviewData = {
      name: formData.get("name"),
      message: formData.get("testimonial"),
    };

    try {
      await axios.post("https://vishal-backend.vercel.app/api/message/send-review", reviewData);
      antdMessage.success("Testimonial submitted successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error sending review:", error);
      antdMessage.error("Failed to submit testimonial. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h1>What Our Clients Are Saying</h1>
        <p>Hear from our LIC representatives about protecting your family's future</p>
        <button onClick={() => setIsModalOpen(true)} className="add-testimonial-btn">
          <Plus size={16} /> Add Your Testimonial
        </button>
      </div>

      <div className="testimonials-background" style={{ backgroundImage: `url(${BackImg})` }}>
        <div className="testimonials-content">
          <div className="testimonials-card-container">
            <div ref={sliderRef} className="testimonial-slider">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <div className="quote-icon">❝</div>
                  {testimonialData.length > 0 && testimonialData[activeIndex] ? (
                    <>
                      <p className="quote">{testimonialData[activeIndex].message}</p>
                      <div className="testimonial-author">
                        <h3>{testimonialData[activeIndex].name}</h3>
                      </div>
                    </>
                  ) : (
                    <p className="quote">No reviews available at the moment. Be the first to share your experience!</p>
                  )}
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
              <button className="close-modal" onClick={() => setIsModalOpen(false)}>
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
              <button type="submit" className="submit-testimonial" disabled={loading}>
                {loading ? <Spin size="small" /> : 'Submit Testimonial'}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;