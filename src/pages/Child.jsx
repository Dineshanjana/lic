import { ArrowRight, BarChart2, Target, Calculator, Briefcase, Gift, Check, MessageCircle } from 'lucide-react';
import '../Css/CombinedStyles.css';
import LICLogo from '../assets/img/lic-logo.png';
import TrustSection from '../components/trust';
import BackImg from '../assets/img/page/child.jpg';
import { Link } from "react-router-dom";

const ChildPlan = () => {

  const subPlans = [
    {
      title: "LIC's Jeevan Tarun",
      icon: <Briefcase className="sub-plan-icon" />,
      description: "A flexible plan that offers survival benefits during your child's growth milestones, ensuring educational and career needs are met.",
      isSpecial: false,
    },
    {
      title: "LIC's Amritbaal",
      icon: <BarChart2 className="sub-plan-icon" />,
      description: "A secure investment plan that ensures guaranteed returns for your child's future aspirations, with added life cover benefits.",
      isSpecial: false,
    },
    {
      title: "Apply Now for Child Plan with Full Digital",
      icon: <img src={LICLogo} alt="LIC Logo" className="lic-logo" />,
      isSpecial: true,
    }
  ];

  const keyFeatures = [
    "Financial security for child's future education and marriage",
    "Money-back options at different stages of child's growth",
    "Flexible premium payment terms",
    "Guaranteed survival benefits at key life stages",
    "Tax benefits under section 80C of Income Tax Act",
    "Option to add premium waiver rider in case of parent's demise",
    "Maturity benefits with bonus options",
    "Loan facility available after a certain period"
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
          <h1>Child Plans</h1>
          <p className="pages-hero-description">
            Secure your child's future with LIC's specially designed child plans, ensuring financial stability during their crucial milestones.
          </p>

          <div className="hero-cta-buttons">
            <Link to="/application-form" className="apply-now-btn">
              Apply Now <ArrowRight className="btn-icon" size={20} />
            </Link>
            <Link className="contact-us-btn" to="/contact-us">
              Contact Us <MessageCircle className="btn-icon" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Trust Badges Section */}
      <TrustSection />

      {/* Sub Plans Section */}
      <div className="sub-plans-container">
        <h2 className="sub-plans-heading">LIC Child Plans</h2>
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
          <h2 className="features-heading">Key Features of LIC Child Plans</h2>
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

export default ChildPlan;
