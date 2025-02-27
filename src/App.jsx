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
import Edow from './Edow.jsx';
import  PosterSection  from './PosterSection.jsx';
import WholeLife from './WholeLife.jsx';
import MoneyBack from './MoneyBack.jsx';
import Term from './Term.jsx';
import Unit from './Unit.jsx';
import Withdrawn from './Withdrawn.jsx';
import Micro from './Micro.jsx';
import Pension from './Pension.jsx';
import Insurance from './Insurance.jsx';
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
          <Route path="/Edow" element={<Edow />} />
          <Route path="/WholeLife" element={<WholeLife />} />
          <Route path="/MoneyBack" element={<MoneyBack />} />
          <Route path="/Term" element={<Term />} />
          <Route path="/Unit" element={<Unit />} />
          <Route path="/Withdrawn" element={<Withdrawn />} />
          <Route path="/Pension" element={<Pension />} />
          <Route path="/Micro" element={<Micro />} />
          <Route path="/Insurance" element={<Insurance />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}