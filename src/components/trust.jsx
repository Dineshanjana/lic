import React from 'react';
import '../Css/TrustSection.css';
import LICLogo from '../assets/img/lic-logo.png';
import {Users, Shield, Award} from 'lucide-react';

const TrustSection = () => {
    // Quotes related to LIC plans
    const quotes = {
        clients: "Securing dreams for generations of Indian families",
        security: "Protecting what matters most with trusted financial solutions",
        years: "Building a secure future with reliable insurance plans"
    };

    return (
        <div className="trust-badges-section">
            <div className="trust-content-container">
                <div className="trust-logo-wrapper">
                    <img src={LICLogo} alt="LIC Logo" className="lic-logo" />
                    <div className="certified-badge">
                        <Shield size={16} className="certified-icon" />
                        <span className="certified-text">Officially Certified</span>
                    </div>
                </div>

                <div className="trust-badges-wrapper">
                    <div className="trust-badge">
                        <div className="badge-icon-container">
                            <Users className="trust-icon" />
                        </div>
                        <div className="trust-text">
                            <span className="trust-quote">{quotes.clients}</span>
                        </div>
                    </div>

                    <div className="trust-badge">
                        <div className="badge-icon-container">
                            <Shield className="trust-icon" />
                        </div>
                        <div className="trust-text">
                            <span className="trust-quote">{quotes.security}</span>
                        </div>
                    </div>

                    <div className="trust-badge">
                        <div className="badge-icon-container">
                            <Award className="trust-icon" />
                        </div>
                        <div className="trust-text">
                            <span className="trust-quote">{quotes.years}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="trust-divider">
                <div className="divider-line"></div>
                <div className="slogan-container">
                    <p className="hindi-slogan">आपकी सुरक्षा, हमारी जिम्मेदारी</p>
                </div>
                <div className="divider-line"></div>
            </div>
        </div>
    )
}

export default TrustSection;