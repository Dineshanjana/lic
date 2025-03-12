import { ArrowRight, BarChart2, Target, Calculator, Briefcase, Gift, Check, MessageCircle } from 'lucide-react';
import '../Css/CombinedStyles.css';
import LICLogo from '../assets/img/lic-logo.png';
import TrustSection from '../components/trust';
import BackImg from '../assets/img/page/pension.jpg';
import { Link } from "react-router-dom";

const Pension = () => {

  const subPlans = [
    {
      title: "LIC's New Pension Plus",
      planNo: '867',
      uinNo: '512L347V01',
      icon: <Calculator className="sub-plan-icon" />,
      isSpecial: false,
    },
    {
      title: "LIC's Jeevan Akshay-VII",
      planNo: '857',
      uinNo: '512N337V06',
      icon: <Briefcase className="sub-plan-icon" />,
      isSpecial: false,
    },
    {
      title: "LIC's New Jeevan Shanti",
      planNo: '758',
      uinNo: '512N338V07',
      icon: <Gift className="sub-plan-icon" />,
    },
    {
      title: "LIC's Saral Pension",
      planNo: '862',
      uinNo: '512N342V05',
      icon: <Target className="sub-plan-icon" />,
      isSpecial: false,
    },
    {
      title: "LIC's Smart Pension",
      planNo: '879',
      uinNo: '512N386V01',
      icon: <BarChart2 className="sub-plan-icon" />,
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
    "Guaranteed income for life after retirement",
    "Option for immediate or deferred annuity plans",
    "Joint life pension options for couples",
    "Tax benefits under section 80CCC of Income Tax Act",
    "Return of purchase price option available",
    "Flexible premium payment options",
    "Loan facility available after completion of specified period",
    "Special rates for high purchase price"
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
          <h1>Pension Plans</h1>
          <p className="pages-hero-description">
            A structured financial plan where individuals contribute money during their working years,
            which is later paid out as a lump sum after maturity or in case of an unforeseen event.
            It combines savings and insurance benefits.
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
        <h2 className="sub-plans-heading">LIC Pension Plans</h2>
        <div className="sub-plans-grid">
          {subPlans.map((plan, index) => (
            <div key={index} className={`sub-plan-card ${plan.isSpecial ? 'special-plan-card' : ''}`}>
              {plan.icon}
              <h3 className="sub-plan-title">{plan.title}</h3>
              {plan.planNo && <p className="sub-plan-description">Plan No: {plan.planNo}</p>}
              {plan.uinNo && <p className="sub-plan-description">UIN No: {plan.uinNo}</p>}
              {plan.isSpecial ? (
                <button className="special-apply-now-btn">
                  Apply Now <ArrowRight size={16} />
                </button>
              ) : (
                <a href="#" className="sub-plan-link">
                  Click Here <ArrowRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="key-features-section">
        <div className="key-features-card">
          <h2 className="features-heading">Key Features of LIC Pension Plans</h2>
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

export default Pension;