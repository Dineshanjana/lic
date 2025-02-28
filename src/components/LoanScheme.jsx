import React from 'react';
import '../Css/LoanScheme.css';
const SchemeCard = ({ 
  title, 
  schemes, 
  details, 
  buttonText, 
  icon 
}) => {
  return (
    <div className="scheme-card">
      <div className="corner-decoration">
        <div className="icon-container">
          {icon}
        </div>
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <div className="schemes-available">
          <span>{schemes} Scheme{schemes > 1 ? 's' : ''} Available</span>
          <span className="info-icon">ⓘ</span>
        </div>
        <ul className="details-list">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <button className="action-button">{buttonText}</button>
      </div>
    </div>
  );
};

const LoanSchemes = () => {
  return (
    <div className="schemes-container">
      <SchemeCard
        title="e-Kisan Upaj Nidhi"
        schemes={1}
        details={[
          "Use your electronic- Negotiable Warehouse Receipts (e-NWR) to apply for secured credit from banks.",
          "e-NWRs can be issued only by WDRA registered warehouses.",
          "Financing for agricultural commodities against e-NWRs available from Banks / Financial Institutions."
        ]}
        buttonText="Apply Now"
        icon={<span className="material-icon">🏠</span>}
      />
      
      <SchemeCard
        title="Agri Loan - Kisan Credit Card"
        schemes={2}
        details={[
          "KCC Crop Loan and KCC Fisheries",
          "Aims to provide farmers with timely and adequate credit to meet their credit needs.",
          "To meet the short term credit requirements",
          "Post harvest expenses."
        ]}
        buttonText="Check Eligibility"
        icon={<span className="material-icon">🌱</span>}
      />
    </div>
  );
};

export default LoanSchemes;