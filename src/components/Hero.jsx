import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/Hero.css';

const Hero = () => {
  const animationRef = useRef(null);

  useEffect(() => {
    // Mandala pattern animation
    const mandalaPetals = animationRef.current.querySelectorAll('.mandala-petal');
    const dots = animationRef.current.querySelectorAll('.decorative-dot');
    const patterns = animationRef.current.querySelectorAll('.pattern-line');
    const floatingElements = animationRef.current.querySelectorAll('.floating-element');

    // Rotating mandala petals
    gsap.to(mandalaPetals, {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1
    });

    // Pulsating dots
    gsap.to(dots, {
      scale: 1.5,
      opacity: 1,
      duration: 1.5,
      stagger: 0.2,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });

    // Pattern lines animation
    gsap.fromTo(patterns, 
      { strokeDashoffset: 100 },
      {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      }
    );

    // Floating elements
    gsap.to(floatingElements, {
      y: 20,
      duration: 3,
      stagger: 0.3,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-logo-container">
            <div className="logo-placeholder">
              <div className="rotating-border"></div>
              <span className="logo-text">GDGoC</span>
            </div>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Week of</span>
            <span className="title-line highlight">Wonders</span>
            <span className="title-line">Pune 2025</span>
          </h1>
          
          <p className="hero-description">
            Experience the convergence of tradition and technology. Join us for an extraordinary 
            journey through innovation, learning, and community.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">
              <span className="btn-text">Book Tickets</span>
              <div className="btn-decoration"></div>
            </button>
            <button className="btn-secondary">
              <span className="btn-text">Learn More</span>
            </button>
          </div>

          <div className="hero-details">
            <div className="detail-item">
              <span className="detail-icon">📅</span>
              <span className="detail-text">Coming Soon</span>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <span className="detail-text">Pune, India</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual" ref={animationRef}>
          {/* Central Mandala */}
          <div className="mandala-container">
            <svg viewBox="0 0 400 400" className="mandala">
              {/* Outer petals */}
              {[...Array(8)].map((_, i) => (
                <g key={`outer-${i}`} className="mandala-petal" style={{ transformOrigin: '200px 200px' }}>
                  <path
                    d={`M 200 200 Q ${200 + 80 * Math.cos((i * 45 * Math.PI) / 180)} ${200 + 80 * Math.sin((i * 45 * Math.PI) / 180)} 200 120`}
                    fill="none"
                    stroke="#ea4335"
                    strokeWidth="2"
                    opacity="0.7"
                  />
                  <circle
                    cx={200 + 100 * Math.cos((i * 45 * Math.PI) / 180)}
                    cy={200 + 100 * Math.sin((i * 45 * Math.PI) / 180)}
                    r="8"
                    fill="#fbbc04"
                    className="floating-element"
                  />
                </g>
              ))}

              {/* Middle layer */}
              {[...Array(12)].map((_, i) => (
                <g key={`middle-${i}`} style={{ transformOrigin: '200px 200px' }}>
                  <line
                    x1="200"
                    y1="200"
                    x2={200 + 60 * Math.cos((i * 30 * Math.PI) / 180)}
                    y2={200 + 60 * Math.sin((i * 30 * Math.PI) / 180)}
                    stroke="#4285f4"
                    strokeWidth="3"
                    className="pattern-line"
                    opacity="0.6"
                  />
                </g>
              ))}

              {/* Inner circles */}
              <circle cx="200" cy="200" r="50" fill="none" stroke="#34a853" strokeWidth="2" opacity="0.8" />
              <circle cx="200" cy="200" r="35" fill="none" stroke="#ea4335" strokeWidth="2" opacity="0.8" />
              <circle cx="200" cy="200" r="20" fill="#fbbc04" opacity="0.9" />

              {/* Decorative dots */}
              {[...Array(16)].map((_, i) => (
                <circle
                  key={`dot-${i}`}
                  cx={200 + 130 * Math.cos((i * 22.5 * Math.PI) / 180)}
                  cy={200 + 130 * Math.sin((i * 22.5 * Math.PI) / 180)}
                  r="4"
                  fill="#4285f4"
                  className="decorative-dot"
                  opacity="0.7"
                />
              ))}
            </svg>
          </div>

          {/* Decorative corner elements */}
          <div className="corner-decoration top-right">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path d="M 0 0 Q 50 0 100 50 L 100 0 Z" fill="#ea4335" opacity="0.2" />
            </svg>
          </div>
          <div className="corner-decoration bottom-left">
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path d="M 0 100 Q 0 50 50 0 L 0 0 Z" fill="#4285f4" opacity="0.2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="bg-pattern"></div>
    </section>
  );
};

export default Hero;
