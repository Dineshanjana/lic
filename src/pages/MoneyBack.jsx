import { ArrowRight, BarChart2, Target, Calculator, Briefcase, Gift, Check, MessageCircle } from 'lucide-react';
import '../Css/CombinedStyles.css';
import LICLogo from '../assets/img/lic-logo.png';
import TrustSection from '../components/trust';
import BackImg from '../assets/img/page/wealth.jpg';
import { Link } from "react-router-dom";

const MoneyBack = () => {

  const subPlans = [
    {
      title: "LIC's MoneyBack (20 Year)",
      planNo: '920',
      uinNo: '512N302V02',
      icon: <Calculator className="sub-plan-icon" />,
      isSpecial: false,
    },
    {
      title: "LIC's MoneyBack (25 Year)",
      planNo: '921',
      uinNo: '512N303V02',
      icon: <Briefcase className="sub-plan-icon" />,
      isSpecial: false,
    },
    {
      title: "LIC's Bima Shree",

      planNo: '948',
      uinNo: '512N315V02',
      icon: <Gift className="sub-plan-icon" />,
    },
    {
      title: "LIC's Bima Ratna",
      planNo: '864',
      uinNo: '512N386V01',
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
    "Guaranteed survival benefits at specific intervals",
    "Financial security with periodic payouts and maturity benefits",
    "Flexible policy terms and premium payment options",
    "Loan facility available after completion of a specified period",
    "Tax benefits under Section 80C and 10(10D) of the Income Tax Act",
    "Option to add riders for additional coverage",
    "Rebates on high sum assured for policyholders"
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
          <h1>Money Back Plans</h1>
          <p className="pages-hero-description">
            LIC's Money Back Plans provide financial security through periodic payouts, ensuring liquidity while maintaining life coverage. These plans are ideal for those seeking returns at regular intervals.
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
        <h2 className="sub-plans-heading">LIC Money Back Plans</h2>
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
          <h2 className="features-heading">Key Features of LIC Money Back Plans</h2>
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

export default MoneyBack;
