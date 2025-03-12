import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import WhatsAppChat from './components/WhatsAppChat.jsx';
import Loader from './components/Loader.jsx'; // Import the new Loader component

// Lazy load pages and components
const HomePageLayout = lazy(() => import('./components/HomePageLayout.jsx'));
const Login = lazy(() => import('./components/Login.jsx'));
const PricingSlider = lazy(() => import('./components/PricingSlider.jsx'));
const ServiceSection = lazy(() => import('./components/ServiceSection.jsx'));
const Image = lazy(() => import('./components/Testimonials.jsx'));
const Carousel = lazy(() => import('./components/Carousel.jsx'));
const PosterSection = lazy(() => import('./components/LicTermPlans.jsx'));

// Lazy load pages
const Child = lazy(() => import('./pages/Child.jsx'));
const Endowment = lazy(() => import('./pages/Endowment.jsx'));
const MoneyBack = lazy(() => import('./pages/MoneyBack.jsx'));
const Pension = lazy(() => import('./pages/Pension.jsx'));
const Term = lazy(() => import('./pages/Term.jsx'));
const Ulip = lazy(() => import('./pages/Ulip.jsx'));
const WholeLife = lazy(() => import('./pages/WholeLife.jsx'));
const ApplicationForm = lazy(() => import('./pages/applicationForm.jsx'));
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePageLayout />} />
            <Route path="/services" element={<ServiceSection />} />
            <Route path="/PosterSection" element={<PosterSection />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/image" element={<Image />} />
            <Route path="/PricingSlider" element={<PricingSlider />} />
            
            <Route path="/pension-plan" element={<Pension />} />
            <Route path="/ulip-plan" element={<Ulip />} />
            <Route path="/term-plan" element={<Term />} />
            <Route path="/money-back-plan" element={<MoneyBack />} />
            <Route path="/whole-life-plan" element={<WholeLife />} />
            <Route path="/child-plan" element={<Child />} />
            <Route path="/endowment-plan" element={<Endowment />} />
            <Route path="/application-form" element={<ApplicationForm />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs/>} />
          </Routes>
        </Suspense>
        <Footer />
        <WhatsAppChat />
      </div>
    </Router>
  );
}