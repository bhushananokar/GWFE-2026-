import React, { useState } from 'react';
import '../../styles/sections.css';

const JoinSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Email submitted:', email);
    alert('Thank you for registering! We\'ll send you more details soon.');
    setEmail('');
  };

  const benefits = [
    { icon: '🎓', text: 'Learn from industry experts' },
    { icon: '🚀', text: 'Build real projects' },
    { icon: '🌐', text: 'Network with 5000+ developers' },
    { icon: '🎁', text: 'Win prizes and swag' },
    { icon: '📜', text: 'Get certificates' },
    { icon: '💼', text: 'Career opportunities' }
  ];

  return (
    <section className="section join-section" id="section-5">
      <div className="section-content">
        <h2 className="section-title gradient-text">JOIN THE MOVEMENT</h2>
        
        <p className="section-description">
          Be part of India's biggest developer celebration. Register now and 
          secure your spot at WOW 2025! <strong>It's completely FREE!</strong>
        </p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="benefit-icon">{benefit.icon}</span>
              <span className="benefit-text">{benefit.text}</span>
            </div>
          ))}
        </div>

        <div className="registration-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="form-submit">
                Register Free
                <span className="btn-arrow">→</span>
              </button>
            </div>
            <p className="form-note">
              🎉 Limited spots available! Join 5000+ developers already registered
            </p>
          </form>
        </div>

        <div className="social-proof">
          <div className="proof-item">
            <div className="proof-number">600+</div>
            <div className="proof-label">GDSCs Participating</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">50+</div>
            <div className="proof-label">Cities Across India</div>
          </div>
          <div className="proof-item">
            <div className="proof-number">100%</div>
            <div className="proof-label">Free Event</div>
          </div>
        </div>

        <div className="cta-buttons">
          <button className="cta-btn cta-primary">
            Register Now
          </button>
          <button className="cta-btn cta-secondary">
            Download Brochure
          </button>
        </div>

        <div className="footer-links">
          <a href="#faq">FAQ</a>
          <a href="#schedule">Schedule</a>
          <a href="#speakers">Speakers</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;