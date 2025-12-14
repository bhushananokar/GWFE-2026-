import React, { useRef, useState } from 'react';
import RadioButtonAnimation from '../visualizations/RadioButtonAnimation';
import '../styles/Navigation.css';

const Navigation = () => {
  const [activeTab, setActiveTab] = useState('home');
  const animationRef = useRef(new RadioButtonAnimation());

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'speaker', label: 'Speaker' },
    { id: 'sponsor', label: 'Sponsor' },
    { id: 'glimpses', label: 'Glimpses' },
    { id: 'faq', label: 'FAQ' }
  ];

  const handleTabChange = (tabId, event) => {
    const container = event.target.closest('.radio-btn-group');
    animationRef.current.handleChange(container);
    setActiveTab(tabId);
  };

  return (
    <nav className="navigation">
      <div className="nav-logo">GDGoC</div>
      <div className="nav-container">
        {navItems.map((item) => (
          <div className="radio-btn-group" key={item.id}>
            <input
              type="radio"
              name="nav-radio-group"
              value={item.id}
              id={`nav-${item.id}`}
              checked={activeTab === item.id}
              onChange={(e) => handleTabChange(item.id, e)}
            />
            <label htmlFor={`nav-${item.id}`}>
              <span>{item.label}</span>
              <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <g className="pink">
                  <rect x="-100%" y="0" width="100%" height="5" />
                  <rect x="-100%" y="5" width="100%" height="5" />
                  <rect x="-100%" y="10" width="100%" height="5" />
                  <rect x="-100%" y="15" width="100%" height="5" />
                  <rect x="-100%" y="20" width="100%" height="5" />
                  <rect x="-100%" y="25" width="100%" height="5" />
                  <rect x="-100%" y="30" width="100%" height="5" />
                  <rect x="-100%" y="35" width="100%" height="5" />
                  <rect x="-100%" y="40" width="100%" height="5" />
                  <rect x="-100%" y="45" width="100%" height="5" />
                </g>

                <g className="blue">
                  <rect x="-100%" y="0" width="100%" height="5" />
                  <rect x="-100%" y="5" width="100%" height="5" />
                  <rect x="-100%" y="10" width="100%" height="5" />
                  <rect x="-100%" y="15" width="100%" height="5" />
                  <rect x="-100%" y="20" width="100%" height="5" />
                  <rect x="-100%" y="25" width="100%" height="5" />
                  <rect x="-100%" y="30" width="100%" height="5" />
                  <rect x="-100%" y="35" width="100%" height="5" />
                  <rect x="-100%" y="40" width="100%" height="5" />
                  <rect x="-100%" y="45" width="100%" height="5" />
                </g>
              </svg>
            </label>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;