import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const HeroSection = () => {
  const heroContainerRef = useRef(null);

  useEffect(() => {
    // Hide everything initially
    if (heroContainerRef.current) {
      heroContainerRef.current.style.opacity = '0';
    }

    // After loading completes, fade in the entire hero section
    setTimeout(() => {
      anime({
        targets: heroContainerRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1200,
        easing: 'easeOutQuad'
      });
    }, 5500); // After loading animation completes
  }, []);

  return (
    <section className="hero-section" id="section-1">
      <div className="hero-container" ref={heroContainerRef}>
        {/* WOW Logo */}
        <div className="hero-wow-logo">
          <h1 className="hero-wow-text">
            <span className="wow-letter w-1">W</span>
            <span className="wow-letter o">O</span>
            <span className="wow-letter w-2">W</span>
          </h1>
          <div className="hero-year">2025</div>
        </div>

        {/* Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="hero-badge">
            <span className="badge-text-blue">GOOGLE</span>
            <span className="badge-text-green">DEVELOPER GROUPS</span>
            <span className="badge-text-white">PRESENT</span>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle">
            <h2 className="subtitle-main">Wonder of Wonders</h2>
            <p className="subtitle-tagline">India's Largest Developer Community Festival</p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <button className="cta-primary">
              <span>Register Free</span>
              <span className="cta-arrow">→</span>
            </button>
            <button className="cta-secondary">
              <span>View Schedule</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to Explore</div>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default HeroSection;