import React, { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const HeroSection = () => {
  const wowLogoRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Set WOW to fixed position on left from start
    if (wowLogoRef.current) {
      wowLogoRef.current.style.opacity = '0';
    }
    if (contentRef.current) {
      contentRef.current.style.opacity = '0';
    }

    // After loading completes, fade in WOW and content
    setTimeout(() => {
      // Fade in WOW logo
      anime({
        targets: wowLogoRef.current,
        opacity: [0, 1],
        translateY: [-30, 0],
        duration: 1000,
        easing: 'easeOutQuad'
      });

      // Fade in content
      anime({
        targets: contentRef.current,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        delay: 300,
        easing: 'easeOutQuad'
      });
    }, 5500); // After loading animation completes
  }, []);

  return (
    <section className="hero-section" id="section-1">
      <div className="hero-container">
        {/* Fixed WOW Logo on left */}
        <div className="hero-wow-fixed" ref={wowLogoRef}>
          <h1 className="hero-wow-text">
            <span className="wow-letter w-1">W</span>
            <span className="wow-letter o">O</span>
            <span className="wow-letter w-2">W</span>
          </h1>
          <div className="hero-year">2025</div>
        </div>

        {/* Content below WOW */}
        <div className="hero-content" ref={contentRef}>
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