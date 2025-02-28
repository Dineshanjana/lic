import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePageLayout from './components/HomePageLayout.jsx';
import Login from './components/Login.jsx';
import PricingSlider from './components/PricingSlider.jsx';
import ServiceSection from './components/ServiceSection.jsx';
import Image from './components/Image.jsx';
import Carousel from './components/Carousel.jsx';


import Edow from './pages/Edow.jsx';
import PosterSection from './components/LicTermPlans.jsx';
import WholeLife from './pages/WholeLife.jsx';
import MoneyBack from './pages/MoneyBack.jsx';
import Term from './pages/Term.jsx';
import Unit from './pages/Unit.jsx';
import Withdrawn from './pages/Withdrawn.jsx';
import Micro from './pages/Micro.jsx';
import Pension from './pages/Pension.jsx';
import Insurance from './pages/Insurance.jsx';


export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePageLayout />} />

          <Route path="/services" element={<ServiceSection />} />
          <Route path="/PosterSection" element={< PosterSection />} />
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