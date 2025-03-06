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
import PosterSection from './components/LicTermPlans.jsx';

// Pages

import Child from './pages/Child.jsx';
import Endowment from './pages/Endowment.jsx';
import MoneyBack from './pages/MoneyBack.jsx';
import Pension from './pages/Pension.jsx';
import Term from './pages/Term.jsx';
import Ulip from './pages/Ulip.jsx';
import WholeLife from './pages/WholeLife.jsx';




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


          <Route path="/pension-plan" element={<Pension />} />
          <Route path="/ulip-plan" element={<Ulip />} />
          <Route path="/term-plan" element={<Term />} />
          <Route path="/money-back-plan" element={<MoneyBack />} />
          <Route path="/whole-life-plan" element={<WholeLife />} />
          <Route path='/child-plan'  element={<Child />} />
          <Route path='/edowment-plan' element={<Endowment />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}