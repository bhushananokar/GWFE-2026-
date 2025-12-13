import React from 'react';
import '../../styles/sections.css';

const HackSection = () => {
  const hackathonFeatures = [
    {
      icon: '⚡',
      title: '24-Hour Hackathon',
      description: 'Code non-stop and build innovative solutions to real-world problems'
    },
    {
      icon: '🏆',
      title: 'Amazing Prizes',
      description: 'Win cash prizes, swag, and opportunities from top tech companies'
    },
    {
      icon: '🤝',
      title: 'Mentorship',
      description: 'Get guidance from experienced developers and industry professionals'
    }
  ];

  const prizes = [
    { place: '1st', amount: '₹50,000', color: '#fbbc04' },
    { place: '2nd', amount: '₹30,000', color: '#4285f4' },
    { place: '3rd', amount: '₹20,000', color: '#ea4335' }
  ];

  return (
    <section className="section hack-section" id="section-4">
      <div className="section-content">
        <h2 className="section-title gradient-text">HACK & CREATE</h2>
        
        <p className="section-description">
          Join our flagship 24-hour hackathon! Build innovative solutions, compete for prizes, 
          and showcase your skills to potential employers and mentors.
        </p>

        <div className="hackathon-info">
          <div className="info-card">
            <div className="info-icon">📅</div>
            <div className="info-content">
              <div className="info-label">Date</div>
              <div className="info-value">Feb 15-17, 2025</div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">⏰</div>
            <div className="info-content">
              <div className="info-label">Duration</div>
              <div className="info-value">24 Hours</div>
            </div>
          </div>
          <div className="info-card">
            <div className="info-icon">👥</div>
            <div className="info-content">
              <div className="info-label">Team Size</div>
              <div className="info-value">2-4 Members</div>
            </div>
          </div>
        </div>

        <div className="features-grid">
          {hackathonFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="prizes-container">
          <h3 className="prizes-title">Prize Pool</h3>
          <div className="prizes-grid">
            {prizes.map((prize, index) => (
              <div 
                key={index} 
                className="prize-card"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  borderColor: prize.color
                }}
              >
                <div className="prize-place" style={{ color: prize.color }}>
                  {prize.place}
                </div>
                <div className="prize-amount">{prize.amount}</div>
              </div>
            ))}
          </div>
          <p className="prizes-note">+ Exclusive swag, certificates, and internship opportunities</p>
        </div>
      </div>
    </section>
  );
};

export default HackSection;