import React from 'react';
import anime from 'animejs';
import '../styles/progressIndicator.css';

const ProgressIndicator = ({ currentSection, totalSections = 5 }) => {
  const sections = [
    { index: 0, label: 'Hero' },
    { index: 1, label: 'Stats' },
    { index: 2, label: 'Learn' },
    { index: 3, label: 'Hack' },
    { index: 4, label: 'Join' }
  ];

  const handleDotClick = (sectionIndex) => {
    const targetY = sectionIndex * window.innerHeight;
    
    anime({
      targets: document.documentElement,
      scrollTop: targetY,
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  };

  return (
    <div className="progress-indicator">
      <div className="progress-dots">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`progress-dot-wrapper ${currentSection === section.index ? 'active' : ''}`}
            onClick={() => handleDotClick(section.index)}
          >
            <div className="progress-dot">
              <div className="dot-inner"></div>
              <div className="dot-ring"></div>
            </div>
            <span className="progress-label">{section.label}</span>
          </div>
        ))}
      </div>
      
      {/* Progress line */}
      <div className="progress-line">
        <div 
          className="progress-line-fill"
          style={{ height: `${(currentSection / (totalSections - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;