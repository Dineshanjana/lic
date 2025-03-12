import { ArrowRight, BarChart2, Target, Calculator, Briefcase, Gift, Check } from 'lucide-react';
import '../Css/CombinedStyles.css';
import LICLogo from '../assets/img/lic-logo.png';
import TrustSection from '../components/trust';
import BackImg from '../assets/img/page/ulip.png';
import { Link } from 'react-router-dom';

const UlipPlans = () => {

  const subPlans = [
    {
      title: "LIC's Endowment Plus",
      planNo: '802',
      uinNo: '512L287V02',
      icon: <Calculator className="sub-plan-icon" />,
    },
    {
      title: "LIC's Nivesh Plus",
      planNo: '849',
      uinNo: '512L331V02',
      icon: <Briefcase className="sub-plan-icon" />,
    },
    {
      title: "LIC's SIIP",
      planNo: '852',
      uinNo: '512L335V02',
      icon: <Gift className="sub-plan-icon" />,
    },
    {
      title: "LIC's New Pension Plus",
      planNo: '867',
      uinNo: '512L347V01',
      icon: <Target className="sub-plan-icon" />,
    },
    {
      title: "LIC's Index Plus",
      planNo: '875',
      uinNo: '512L377V01',
      icon: <BarChart2 className="sub-plan-icon" />,
    },
    {
      title: "Apply Now for ULIP Plan with Full Digital Process",
      planNo: '',
      uinNo: '',
      icon: <img src={LICLogo} alt="LIC Logo" className="lic-logo" />,
      isSpecial: true,
    }
  ];

  const keyFeatures = [
    "Combination of investment and life insurance",
    "Market-linked returns with different fund options",
    "Flexibility to switch funds as per market conditions",
    "Tax benefits under section 80C and 10(10D) of Income Tax Act",
    "Partial withdrawal facility after lock-in period",
    "Multiple premium payment options",
    "Life cover protection with financial security",
    "Transparency in investment with fund value tracking"
  ];


  return (
    <div className="pages-sprout-container">
      <div className="pages-hero-section"
        style={{
          backgroundImage: `url(${BackImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="pages-hero-content-centered">
          <h1>LIC ULIP Plans</h1>
          <p className="pages-hero-description">
            LIC ULIP Plans offer a unique combination of investment and insurance, allowing policyholders to benefit from market-linked returns while ensuring financial security for their loved ones. Choose the right plan that aligns with your financial goals.
          </p>

          <div className="hero-cta-buttons">
          <Link to="/application-form" className="apply-now-btn">
              Apply Now <ArrowRight className="btn-icon" size={20} />
            </Link>
            <Link to="/contact-us" className="contact-us-btn">
              Contact Us <ArrowRight className="btn-icon" size={20} />
            </Link>
          </div>
        </div>
      </div>

      <TrustSection />

      <div className="sub-plans-container">
        <h2 className="sub-plans-heading">LIC ULIP Plans</h2>
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

      <div className="key-features-section">
        <div className="key-features-card">
          <h2 className="features-heading">Key Features of LIC ULIP Plans</h2>
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

export default UlipPlans;
