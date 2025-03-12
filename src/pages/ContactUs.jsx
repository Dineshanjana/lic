import React, { useState } from 'react';
import axios from 'axios';
import { message as antdMessage, Spin } from 'antd';
import '../Css/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    plan: 'Endowment Plan', // Ensure default value matches Prisma schema
    phoneNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('https://vishal-backend.vercel.app/api/message/send', formData);
      antdMessage.success('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        plan: 'Endowment Plan',
        phoneNumber: '',
        message: '',
      });
    } catch (error) {
      antdMessage.error('Failed to send message. Please try again.');
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='main-con'>
      <div className="contact-container">
        <div className="gradient-circle"></div>
        <h1 className='subtitled'>We'd love to help</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" name="firstName" placeholder="First name" required value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder="Last name" required value={formData.lastName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email address" required value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <select name="plan" value={formData.plan} onChange={handleChange}>
              <option value="Endowment Plan">Endowment Plan</option>
              <option value="Pension Plan">Pension Plan</option>
              <option value="ULIP Plan">ULIP Plan</option>
              <option value="Term Plan">Term Plan</option>
              <option value="Money Back Plan">Money Back Plan</option>
              <option value="Whole Life Plan">Whole Life Plan</option>
              <option value="Child Plan">Child Plan</option>
            </select>
          </div>
          <div className="form-group">
            <input type="tel" name="phoneNumber" placeholder="Phone number" required value={formData.phoneNumber} onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Leave us a message..." required value={formData.message} onChange={handleChange} />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <Spin size="small" /> : 'Send message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
