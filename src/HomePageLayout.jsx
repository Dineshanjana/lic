import React from 'react';
import HeroSection from './HeroSection.jsx';
import ServiceSection from './ServiceSection.jsx';
import Carousel from './Carousel.jsx';
import Login from './Login.jsx';
import PricingSlider from './PricingSlider.jsx';
import EbookLanding from './Edow.jsx';
import PosterSection from './PosterSection.jsx';
import Image from './Image.jsx';

const HomePageLayout = () => {
  return (
    <div>
      <HeroSection />
      <PosterSection />
      <ServiceSection />
      <Carousel />
      {/* <Login /> */}
      <PricingSlider />
      {/* <EbookLanding /> */}
      <Image/>
    </div>
  );
};

export default HomePageLayout;