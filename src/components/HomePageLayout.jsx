import React from 'react';
import HeroSection from './HeroSection.jsx';
import ServiceSection from './ServiceSection.jsx';
import Carousel from './Carousel.jsx';
import PricingSlider from './PricingSlider.jsx';
import LicTermPlans from './LicTermPlans.jsx';
import Image from './Image.jsx';

const HomePageLayout = () => {
  return (
    <div>
      
      <HeroSection />
      < LicTermPlans/>
      <ServiceSection />
      <Carousel />
      <PricingSlider />
      <Image/> 
      
    </div>
  );
};

export default HomePageLayout;