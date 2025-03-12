import { ArrowRight, BarChart2, Target, Calculator, Briefcase, Gift, Check, MessageCircle } from 'lucide-react';
import '../Css/CombinedStyles.css';
import LICLogo from '../assets/img/lic-logo.png';
import BackImg from '../assets/img/page/term.jpg';
import TrustSection from '../components/trust';
import { Link } from "react-router-dom";

const TermPlan = () => {

  const subPlans = [
    {
      title: "LIC's Saral Jeevan Bima",
      planNo: '859',
      uinNo: '512N335V01',
      icon: <Calculator className="sub-plan-icon" />,
      isSpecial: false,
    },
    {
      title: "LIC's Yuva Term",
      planNo: '860',
      uinNo: '512N336V01',
      icon: <Briefcase className="sub-plan-icon" />,
      isSpecial: false,
    },
    {
      title: "LIC's Yuva Credit Life",
      planNo: '861',
      uinNo: '512N337V01',
      icon: <Gift className="sub-plan-icon" />,
    },
    {
      title: "LIC's New Jeevan Amar",
      planNo: '862',
      uinNo: '512N338V01',
      icon: <Target className="sub-plan-icon" />,
      isSpecial: false,
    },
    {
      title: "Apply Now for Pension Plan with Full Digital",
      planNo: '',
      uinNo: '',
      icon: <img src={LICLogo} alt="LIC Logo" className="lic-logo" />,
      isSpecial: true,
    }
  ];

  const keyFeatures = [
    "High coverage at affordable premium rates",
    "Flexible policy terms and premium payment options",
    "Financial security for family in case of policyholder's demise",
    "Option to choose between level sum assured and increasing sum assured",
    "Tax benefits under Section 80C and 10(10D) of the Income Tax Act",
    "Special premium rates for non-smokers and healthy individuals",
    "Additional rider options available for enhanced protection"
  ];

  return (
    <div className="pages-sprout-container">
      {/* Hero Section */}
      <div className="pages-hero-section"
        style={{
          backgroundImage: `url(${BackImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="pages-hero-content-centered">
          <h1>Term Plans</h1>
          <p className="pages-hero-description" style={{color: '#3a482e', fontWeight: 'bold'}}>
            LIC Term Plans provide financial security for your family at affordable premiums, ensuring that your loved ones are protected in case of any unforeseen circumstances.
          </p>

          <div className="hero-cta-buttons">
          <Link to="/application-form" className="apply-now-btn">
              Apply Now <ArrowRight className="btn-icon" size={20} />
            </Link>
            <Link to="/contact-us" className="contact-us-btn">
              Contact Us <MessageCircle className="btn-icon" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <TrustSection />

      {/* Sub Plans Section */}
      <div className="sub-plans-container">
        <h2 className="sub-plans-heading">LIC Term Plans</h2>
        <div className="sub-plans-grid">
          {subPlans.map((plan, index) => (
            <div key={index} className={`sub-plan-card ${plan.isSpecial ? 'special-plan-card' : ''}`}>
              {plan.icon}
              <h3 className="sub-plan-title">{plan.title}</h3>
              {plan.planNo && <p className="sub-plan-description">Plan No: {plan.planNo}</p>}
              {plan.uinNo && <p className="sub-plan-description">UIN No: {plan.uinNo}</p>}
              <a href="#" className="sub-plan-link">
                Click Here <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="key-features-section">
        <div className="key-features-card">
          <h2 className="features-heading">Key Features of LIC Term Plans</h2>
          <div className="features-grid">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="feature-item">
                <Check className="feature-icon" size={20} />
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermPlan;
