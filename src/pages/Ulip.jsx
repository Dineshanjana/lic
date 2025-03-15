import { ArrowRight, BarChart2, Target, Calculator, Briefcase, Gift, Check } from 'lucide-react';
import '../Css/CombinedStyles.css';
import LICLogo from '../assets/img/lic-logo.png';
import TrustSection from '../components/trust';
import BackImg from '../assets/img/page/ulip.png';
import { Link } from 'react-router-dom';

const Ulip = () => {
  const subPlans = [
    {
      title: "LIC's Endowment Plus",
      description: "A balanced Unit Linked that offers both insurance coverage and wealth creation over time.",
      icon: <Calculator className="sub-plan-icon" />,
    },
    {
      title: "LIC's Nivesh Plus",
      description: "A single premium Unit Linked designed for long-term wealth accumulation with market-linked returns.",
      icon: <Briefcase className="sub-plan-icon" />,
    },
    {
      title: "LIC's SIIP",
      description: "Systematic investment insurance plan that provides financial protection with high growth potential.",
      icon: <Gift className="sub-plan-icon" />,
    },
    {
      title: "LIC's New Pension Plus",
      description: "A retirement-focused Unit Linked that helps build a financial corpus for post-retirement security.",
      icon: <Target className="sub-plan-icon" />,
    },
    {
      title: "LIC's Index Plus",
      description: "A market-linked plan with index-based investments, ensuring disciplined growth over time.",
      icon: <BarChart2 className="sub-plan-icon" />,
    },
    {
      title: "Apply Now for Unit Linked Plan with Full Digital Process",
      icon: <img src={LICLogo} alt="LIC Logo" className="lic-logo" />,
      isSpecial: true,
    }
  ];

  const keyFeatures = [
    "Combination of investment and life insurance",
    "Market-linked returns with different fund options",
    "Flexibility to switch funds as per market conditions",
    "Tax benefits under Section 80C and 10(10D) of the Income Tax Act",
    "Partial withdrawal facility after the lock-in period",
    "Multiple premium payment options",
    "Life cover protection with financial security",
    "Transparency in investment with fund value tracking"
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
          <h1>LIC Unit Linked Plans</h1>
          <p className="pages-hero-description">
            LIC Unit Linked Plans offer a unique combination of investment and insurance, allowing policyholders to benefit from market-linked returns while ensuring financial security for their loved ones. Choose the right plan that aligns with your financial goals.
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

      {/* Trust Badges Section */}
      <TrustSection />

      {/* Sub Plans Section */}
      <div className="sub-plans-container">
        <h2 className="sub-plans-heading">LIC Unit Linked Plans</h2>
        <div className="sub-plans-grid">
          {subPlans.map((plan, index) => (
            <div key={index} className={`sub-plan-card ${plan.isSpecial ? 'special-plan-card' : ''}`}>
              {plan.icon}
              <h3 className="sub-plan-title">{plan.title}</h3>
              <p className="sub-plan-description">{plan.description}</p>
              {plan.isSpecial &&
                <Link className="special-apply-now-btn" to="/application-form">
                  Apply Now <ArrowRight size={16} />
                </Link>
              }
            </div>
          ))}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="key-features-section">
        <div className="key-features-card">
          <h2 className="features-heading">Key Features of LIC Unit Linked Plans</h2>
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

export default Ulip;