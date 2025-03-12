import { ArrowRight, Check } from 'lucide-react';
import '../Css/CombinedStyles.css';
import LICLogo from '../assets/img/lic-logo.png';
import TrustSection from '../components/trust';
import BackImg from '../assets/img/page/worklife.jpg';
import { Link } from 'react-router-dom';

const WholeLifePlans = () => {
  const subPlans = [
    {
      title: "Jeevan Umang",
      planNo: '945',
      uinNo: '512N312V02',
    },
    {
      title: "Jeevan Utsav",
      planNo: '871',
      uinNo: '512N350V01',
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
    "Lifelong coverage with guaranteed payouts",
    "Survival benefits throughout policy term",
    "Flexible premium payment options",
    "Tax benefits under section 80C and 10(10D) of Income Tax Act",
    "Financial security for loved ones with death benefits",
    "Loan facility available against the policy"
  ];

  return (
    <div className="pages-sprout-container">
      <div className="pages-hero-section"
        style={{
          backgroundImage: `url(${BackImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="pages-hero-content-centered">
          <h1>Whole Life LIC Plans</h1>
          <p className="pages-hero-description">
            LIC Whole Life Plans provide lifelong protection and financial stability with assured benefits. These plans ensure your family's security while offering survival benefits and flexible payout options.
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
        <h2 className="sub-plans-heading">LIC Whole Life Plans</h2>
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

      <div className="key-features-section">
        <div className="key-features-card">
          <h2 className="features-heading">Key Features of LIC Whole Life Plans</h2>
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

export default WholeLifePlans;