import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import HomePageLayout from './HomePageLayout.jsx';
import Login from './Login.jsx';


import PricingSlider from './PricingSlider.jsx';

import ServiceSection from './ServiceSection.jsx';
import Image from './Image.jsx';
import Carousel from './Carousel.jsx';
import EbookLanding from './EbookLanding.jsx';
import  PosterSection  from './PosterSection.jsx';

export default function App() {


  useEffect(() => {
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = ""; // Reset when component unmounts
    };
  },[]);


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/services" element={<ServiceSection />} />
          <Route path="/PosterSection" element={< PosterSection  />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/image" element={<Image />} />
       
          <Route path="/PricingSlider" element={<PricingSlider />} />
          <Route path="/EbookLanding" element={<EbookLanding />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}