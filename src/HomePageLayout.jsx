import React from 'react';
import HeroSection from './HeroSection.jsx';
import ServiceSection from './ServiceSection.jsx';
import Carousel from './Carousel.jsx';
import Login from './Login.jsx';
import PricingSlider from './PricingSlider.jsx';

const HomePageLayout = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <Carousel />
      <Login />
      <PricingSlider />
    </div>
  );
};

export default HomePageLayout;