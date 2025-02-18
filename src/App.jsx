import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import HomePageLayout from './HomePageLayout.jsx';
import Login from './Login.jsx';
import Logo from './Logo.jsx';
import Poster from './Poster.jsx';
import LoanSchemes from './LoanScheme.jsx';
import Testimonial from './Testimonial.jsx';
import PricingSlider from './PricingSlider.jsx';
import IPhoneSlider from './IPhoneSlider';
import ServiceSection from './ServiceSection.jsx';
import Image from './Image.jsx';
import Carousel from './Carousel.jsx';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/image" element={<Image />} />
          <Route path="/loan-schemes" element={<LoanSchemes />} />
          <Route path="/PricingSlider" element={<PricingSlider />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}