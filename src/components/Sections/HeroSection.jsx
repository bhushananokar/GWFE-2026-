import React from 'react';
import '../../styles/sections.css';

const HeroSection = () => {
  return (
    <section className="section hero-section" id="section-1">
      <div className="section-content">
        <div className="hero-badge">
          <span className="google-text">GOOGLE</span>
          <span className="developer-text">DEVELOPER GROUPS</span>
          <span className="present-text">PRESENT</span>
        </div>
        
        <h1 className="hero-title">
          <span className="title-word">
            <span className="title-char">W</span>
            <span className="title-char">O</span>
            <span className="title-char">W</span>
          </span>
        </h1>

        <div className="hero-year">
          <span className="year-digit">2</span>
          <span className="year-digit">0</span>
          <span className="year-digit">2</span>
          <span className="year-digit">5</span>
        </div>

        <p className="hero-subtitle">
          Wonder of Wonders - India's Largest Developer Community Festival
        </p>

        <p className="hero-description">
          Join <strong>5000+ developers</strong> for 3 days of workshops, tech talks, 
          hackathons, and networking with industry leaders and Google Developer Experts.
        </p>

        <div className="hero-cta">
          <button className="cta-btn cta-primary">
            Register Free
          </button>
          <button className="cta-btn cta-secondary">
            View Schedule
          </button>
        </div>

        <div className="scroll-indicator">
          <span className="scroll-text">Scroll to explore</span>
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;