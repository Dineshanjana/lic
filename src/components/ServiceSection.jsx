import React from 'react';

const ServiceSection = () => {
  const styles = {
    glassSection: {
      padding: '5rem 2rem',
      position: 'relative',
      background: 'linear-gradient(135deg, var(--near-black), var(--dark-navy), var(--navy))',
    },
    glassContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    glassCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '15px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      padding: '2rem',
      color: 'white',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      overflow: 'hidden',
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column', // Use flex column to control alignment
    },
    glassCardHover: {
      transform: 'translateY(-10px)',
      boxShadow: '0 15px 40px 0 rgba(0, 0, 0, 0.5)',
    },
    gradientCircle: {
      position: 'absolute',
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, var(--gold), transparent)',
      opacity: '0.15',
      top: '-50px',
      right: '-50px',
      zIndex: '1',
    },
    cardBadge: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'linear-gradient(to right, var(--navy), var(--dark-navy))',
      color: 'white',
      fontSize: '0.7rem',
      fontWeight: '600',
      padding: '0.3rem 0.8rem',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      zIndex: '2',
    },
    cardIcon: {
      fontSize: '2.5rem',
      color: 'var(--gold)',
      marginBottom: '1.5rem',
      position: 'relative',
      zIndex: '2',
    },
    cardTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      position: 'relative',
      zIndex: '2',
    },
    cardContent: {
      marginBottom: '1.5rem',
      lineHeight: '1.6',
      fontWeight: '300',
      opacity: '0.9',
      position: 'relative',
      zIndex: '2',
      flex: '1', // Make content take up available space
    },
    buttonContainer: {
      marginTop: 'auto', // Push button to bottom
      position: 'relative',
      zIndex: '2',
    },
    cardButton: {
      display: 'inline-block',
      padding: '0.8rem 1.5rem',
      background: 'linear-gradient(to right, var(--gold), #ffda85)',
      color: 'var(--near-black)',
      border: 'none',
      borderRadius: '50px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      position: 'relative',
      zIndex: '2',
      cursor: 'pointer',
    },
    cardButtonHover: {
      transform: 'translateY(-3px)',
      boxShadow: '0 5px 15px rgba(255, 195, 0, 0.3)',
    },
    sectionTitle: {
      marginBottom: '4rem',
      color: 'white',
      textAlign: 'center',
    },
    mediaQuery: {
      '@media screen and (max-width: 768px)': {
        glassContainer: {
          gridTemplateColumns: '1fr',
        },
      },
    },
    // New styles for the "View More" card
    viewMoreCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15))',
    },
    viewMoreIcon: {
      position: 'relative',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.1)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1.5rem',
      overflow: 'hidden',
    },
    iconRipple: {
      position: 'absolute',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '2px solid var(--gold)',
      animation: 'ripple 2s infinite ease-out',
    },
    largeIconRipple: {
      position: 'absolute',
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '2px solid var(--gold)',
      animation: 'rippleLarge 2s infinite ease-out',
      animationDelay: '0.5s',
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(1)',
        opacity: 0.7,
      },
      '100%': {
        transform: 'scale(1.5)',
        opacity: 0,
      },
    },
    '@keyframes rippleLarge': {
      '0%': {
        transform: 'scale(1)',
        opacity: 0.5,
      },
      '100%': {
        transform: 'scale(2)',
        opacity: 0,
      },
    },
    pulseButton: {
      animation: 'pulse 2s infinite',
    },
    '@keyframes pulse': {
      '0%': {
        boxShadow: '0 0 0 0 rgba(255, 195, 0, 0.4)',
      },
      '70%': {
        boxShadow: '0 0 0 10px rgba(255, 195, 0, 0)',
      },
      '100%': {
        boxShadow: '0 0 0 0 rgba(255, 195, 0, 0)',
      },
    },
  };

  const cards = [
    {
      badge: 'PREMIUM',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      ),
      title: 'Premium Protection Plan',
      content: 'Our most comprehensive coverage package. Includes extended protection for your home, auto, and personal belongings with priority claims processing.',
      buttonText: 'Explore Plan',
    },
    {
      badge: 'POPULAR',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      title: 'Home Shield Plus',
      content: 'Advanced protection for your home and valuables. Includes coverage against natural disasters, theft, and damage with 24/7 emergency assistance.',
      buttonText: 'Get Quote',
    },
    {
      badge: 'NEW',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      title: 'Drive Secure Elite',
      content: 'Ultimate protection for your vehicles. Includes accident coverage, roadside assistance, rental reimbursement, and new car replacement benefit.',
      buttonText: 'Learn More',
    },
    {
      badge: 'FAMILY',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Family Health Complete',
      content: 'Comprehensive health coverage for your entire family. Includes preventive care, hospital stays, prescription drugs, and specialized treatments.',
      buttonText: 'Protect Your Family',
    },
    {
      badge: 'BUSINESS',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      title: 'Business Continuity Plan',
      content: 'Protect your business against interruptions. Includes property damage, liability coverage, income protection, and employee benefits solutions.',
      buttonText: 'Business Solutions',
    },
  ];

  // Card component
  const GlassCard = ({ card }) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isButtonHovered, setIsButtonHovered] = React.useState(false);

    return (
      <div
        style={{
          ...styles.glassCard,
          ...(isHovered ? styles.glassCardHover : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.gradientCircle}></div>
        <div style={styles.cardBadge}>{card.badge}</div>
        
        <div style={styles.cardIcon}>{card.icon}</div>
        <h3 style={styles.cardTitle}>{card.title}</h3>
        <p style={styles.cardContent}>{card.content}</p>
        
        <div style={styles.buttonContainer}>
          <a
            href="#"
            style={{
              ...styles.cardButton,
              ...(isButtonHovered ? styles.cardButtonHover : {}),
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            {card.buttonText}
          </a>
        </div>
      </div>
    );
  };

  // View More Card component with animations
  const ViewMoreCard = () => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isButtonHovered, setIsButtonHovered] = React.useState(false);

    // Use inline styles to handle animations that depend on React state
    const cardStyle = {
      ...styles.glassCard,
      ...styles.viewMoreCard,
      ...(isHovered ? styles.glassCardHover : {}),
    };

    return (
      <div
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.gradientCircle}></div>
        <div style={styles.cardBadge}>MORE</div>
        
        <div style={styles.viewMoreIcon}>
          <div style={styles.iconRipple}></div>
          <div style={styles.largeIconRipple}></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>
        
        <h3 style={styles.cardTitle}>Discover More Plans</h3>
        <p style={styles.cardContent}>
          We offer a wide range of customized insurance solutions to meet your specific needs. 
          Explore our full catalog of protection plans and find the perfect coverage for you.
        </p>
        
        <div style={styles.buttonContainer}>
          <a
            href="#"
            style={{
              ...styles.cardButton,
              ...(isButtonHovered ? styles.cardButtonHover : {}),
              ...(isHovered ? styles.pulseButton : {}), // Add pulse animation when card is hovered
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            View All Plans
          </a>
        </div>
      </div>
    );
  };

  return (
    <section style={styles.glassSection}>
      <div style={styles.sectionTitle}>
        <h2>Premium Insurance Packages</h2>
      </div>
      <div style={styles.glassContainer}>
        {cards.map((card, index) => (
          <GlassCard key={index} card={card} />
        ))}
        <ViewMoreCard />
      </div>

      {/* Adding keyframes styles for animations */}
      <style>
        {`
          @keyframes ripple {
            0% {
              transform: scale(1);
              opacity: 0.7;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
          
          @keyframes rippleLarge {
            0% {
              transform: scale(1);
              opacity: 0.5;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(255, 195, 0, 0.4);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(255, 195, 0, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(255, 195, 0, 0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ServiceSection;