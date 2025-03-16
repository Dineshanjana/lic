import React from 'react';
import HeroSection from './HeroSection.jsx';
import ServiceSection from './ServiceSection.jsx';
import Carousel from './Carousel.jsx';
import PricingSlider from './PricingSlider.jsx';
import LicTermPlans from './LicTermPlans.jsx';
import Testimonial from './Testimonials.jsx';
import WhyLicSection from './WhyLicSection.jsx';
import WhyUsSection from './WhyUsSection.jsx';

const HomePageLayout = () => {
  return (
    <div>

      <HeroSection />
      <LicTermPlans />
      <ServiceSection />
      <Carousel />
      <PricingSlider />
      <WhyLicSection />
      <Testimonial />
      <WhyUsSection />
    </div>
  );
};

export default HomePageLayout;