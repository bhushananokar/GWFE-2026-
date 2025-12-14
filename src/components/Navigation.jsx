import React, { useState, useEffect } from 'react';
import '../styles/navigation.css';

const Navigation = ({ currentSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', section: 0, href: '#section-1' },
    { label: 'Stats', section: 1, href: '#section-2' },
    { label: 'Learn', section: 2, href: '#section-3' },
    { label: 'Hack', section: 3, href: '#section-4' },
    { label: 'Join', section: 4, href: '#section-5' }
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, sectionIndex) => {
    e.preventDefault();
    const targetY = sectionIndex * window.innerHeight;
    
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });

    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="#section-1" onClick={(e) => handleNavClick(e, '#section-1', 0)}>
            <span className="logo-gdg">GDG</span>
            <span className="logo-wow">WOW</span>
            <span className="logo-year">2025</span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links desktop-nav">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={currentSection === link.section ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.href, link.section)}
              >
                {link.label}
                <span className="nav-underline"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="nav-cta">
          <button className="nav-register-btn">
            Register Free
            <span className="btn-shine"></span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={link.href}
                className={currentSection === link.section ? 'active' : ''}
                onClick={(e) => handleNavClick(e, link.href, link.section)}
              >
                <span className="mobile-link-number">0{index + 1}</span>
                <span className="mobile-link-text">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-footer">
          <button className="mobile-register-btn">
            Register Free
          </button>
          <div className="mobile-social">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Discord">💬</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;