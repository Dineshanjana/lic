import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Css/GlassCard.css';

// Import Swiper styles and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ServiceSection = () => {
  // Extract unique categories from cards
  const cards = [
    // Pension Plans
    { badge: 'PENSION', category: 'pension', title: 'New Jeevan Shanti', content: 'Guaranteed lifelong income with flexible options.', buttonText: 'Explore Plans', route: '/pension-plan' },
    { badge: 'PENSION', category: 'pension', title: 'Saral Pension', content: 'Simplified pension plan with secure returns.', buttonText: 'Explore Plans', route: '/pension-plan' },
    { badge: 'PENSION', category: 'pension', title: 'Jeevan Akshay-VII', content: 'Immediate annuity plan with guaranteed income.', buttonText: 'Explore Plans', route: '/pension-plan' },
    { badge: 'PENSION', category: 'pension', title: 'Smart Pension', content: 'Flexible retirement plan for secure future.', buttonText: 'Explore Plans', route: '/pension-plan' },
  
    // ULIP Plans
    { badge: 'ULIP', category: 'ulip', title: 'Endowment Plus', content: 'Insurance protection with investment growth.', buttonText: 'Get Quote', route: '/ulip-plan' },
    { badge: 'ULIP', category: 'ulip', title: 'Nivesh Plus', content: 'Single premium ULIP with flexible options.', buttonText: 'Get Quote', route: '/ulip-plan' },
    { badge: 'ULIP', category: 'ulip', title: 'SIIP', content: 'Systematic investment insurance plan.', buttonText: 'Get Quote', route: '/ulip-plan' },
    { badge: 'ULIP', category: 'ulip', title: 'New Pension Plus', content: 'ULIP for secure retirement planning.', buttonText: 'Get Quote', route: '/ulip-plan' },
    { badge: 'ULIP', category: 'ulip', title: 'Index Plus', content: 'Market-linked ULIP with index investment options.', buttonText: 'Get Quote', route: '/ulip-plan' },
  
    // Term Plans
    { badge: 'TERM', category: 'term', title: 'Saral Jeevan Bima', content: 'Simple term plan with secure life cover.', buttonText: 'Learn More', route: '/term-plan' },
    { badge: 'TERM', category: 'term', title: 'Yuva Term', content: 'Youth-focused term plan with affordable premiums.', buttonText: 'Learn More', route: '/term-plan' },
    { badge: 'TERM', category: 'term', title: 'Yuva Credit Life', content: 'Life cover for young professionals.', buttonText: 'Learn More', route: '/term-plan' },
    { badge: 'TERM', category: 'term', title: 'New Jeevan Amar', content: 'Affordable term insurance with flexible options.', buttonText: 'Learn More', route: '/term-plan' },
  
    // MoneyBack Plans
    { badge: 'MONEYBACK', category: 'moneyback', title: 'MoneyBack (20 Year)', content: '20-year money back plan with periodic returns.', buttonText: 'Protect Your Future', route: '/money-back-plan' },
    { badge: 'MONEYBACK', category: 'moneyback', title: 'MoneyBack (25 Year)', content: '25-year money back plan with secure returns.', buttonText: 'Protect Your Future', route: '/money-back-plan' },
    { badge: 'MONEYBACK', category: 'moneyback', title: 'Bima Shree', content: 'Guaranteed returns and life cover.', buttonText: 'Protect Your Future', route: '/money-back-plan' },
    { badge: 'MONEYBACK', category: 'moneyback', title: 'Bima Ratna', content: 'Enhanced coverage and financial benefits.', buttonText: 'Protect Your Future', route: '/money-back-plan' },
  
    // Wholelife Plans
    { badge: 'WHOLELIFE', category: 'wholelife', title: 'Jeevan Umang', content: 'Whole life cover with periodic returns.', buttonText: 'Know More', route: '/whole-life-plan' },
    { badge: 'WHOLELIFE', category: 'wholelife', title: 'Jeevan Utsav', content: 'Lifetime financial security with flexible options.', buttonText: 'Know More', route: '/whole-life-plan' },
  
    // Child Plans
    { badge: 'CHILD', category: 'child', title: 'Child Money Back', content: 'Child plan with periodic payouts for education.', buttonText: 'Secure Future', route: '/child-plan' },
    { badge: 'CHILD', category: 'child', title: 'Jeevan Tarun', content: 'Plan for your child’s secure financial future.', buttonText: 'Secure Future', route: '/child-plan' },
    { badge: 'CHILD', category: 'child', title: 'Amritbaal', content: 'Comprehensive child plan for financial stability.', buttonText: 'Secure Future', route: '/child-plan' },
  
    // Endowment Plans
    { badge: 'ENDOWMENT', category: 'endowment', title: 'New Endowment', content: 'Savings and protection under one plan.', buttonText: 'View Details', route: '/endowment-plan' },
    { badge: 'ENDOWMENT', category: 'endowment', title: 'New Jeevan Anand', content: 'Endowment plan with enhanced benefits.', buttonText: 'View Details', route: '/endowment-plan' },
    { badge: 'ENDOWMENT', category: 'endowment', title: 'Single Premium Endowment', content: 'Single premium plan with savings benefits.', buttonText: 'View Details', route: '/endowment-plan' },
    { badge: 'ENDOWMENT', category: 'endowment', title: 'Jeevan Lakshya', content: 'Life cover with guaranteed savings.', buttonText: 'View Details', route: '/endowment-plan' },
    { badge: 'ENDOWMENT', category: 'endowment', title: 'Jeevan Labh', content: 'Combination of protection and savings.', buttonText: 'View Details', route: '/endowment-plan' },
    { badge: 'ENDOWMENT', category: 'endowment', title: 'Bima Jyoti', content: 'Guaranteed returns with life protection.', buttonText: 'View Details', route: '/endowment-plan' },
    { badge: 'ENDOWMENT', category: 'endowment', title: 'Jeevan Azad', content: 'Comprehensive endowment plan with flexibility.', buttonText: 'View Details', route: '/endowment-plan' },
  ];

  const uniqueCategories = ['all', ...new Set(cards.map(card => card.category))];

  const [activeTab, setActiveTab] = useState('pension');

  const [filteredCards, setFilteredCards] = useState(cards);

  // Filter cards when activeTab changes
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter(card => card.category === activeTab));
    }
  }, [activeTab]);

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const GlassCard = ({ card }) => {
    return (
      <div className="glassCard">
        <div className="gradientCircle"></div>
        <div className="cardBadge">{card.badge}</div>
        <div className="cardIcon">{card.icon}</div>
        <h3 className="cardTitle">{card.title}</h3>
        <p className="cardContent">{card.content}</p>

        <div className="buttonContainer">
          <Link
            to={card.route}
            className="cardButton"
          >
            {card.buttonText}
          </Link>
        </div>
      </div>
    );
  };

  // Format category name for display
  const formatCategoryName = (category) => {
    if (category === 'all') return 'All Plans';
    return category.charAt(0).toUpperCase() + category.slice(1) + ' Plans';
  };

  return (
    <section className="glassSection">
      <div className="sectionTitle">
        <h2>Premium Insurance Packages</h2>
      </div>

      {/* Tab Navigation */}
      <div className="tabsContainer">
        <div className="tabsWrapper">
          {uniqueCategories.map(category => (
            <button
              key={category}
              className={`tabPill ${activeTab === category ? 'activeTab' : ''}`}
              onClick={() => handleTabClick(category)}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        key={activeTab} // Force re-render of Swiper when activeTab changes
      >
        {filteredCards.map((card, index) => (
          <SwiperSlide key={index}>
            <GlassCard card={card} />
          </SwiperSlide>
        ))}

        {/* Custom Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
};

export default ServiceSection;