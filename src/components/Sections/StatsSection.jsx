import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import '../../styles/sections.css';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { number: 5000, label: 'Developers', suffix: '+' },
    { number: 100, label: 'Speakers', suffix: '+' },
    { number: 50, label: 'Sessions', suffix: '+' },
    { number: 600, label: 'GDSCs', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Animate stat numbers
          statsRef.current.forEach((el, index) => {
            if (el) {
              anime({
                targets: el,
                innerHTML: [0, stats[index].number],
                duration: 2000,
                delay: index * 150,
                round: 1,
                easing: 'easeOutExpo'
              });
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section className="section stats-section" id="section-2" ref={sectionRef}>
      <div className="section-content">
        <h2 className="section-title gradient-text">BY THE NUMBERS</h2>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number">
                <span ref={el => statsRef.current[index] = el}>0</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-bar"></div>
            </div>
          ))}
        </div>

        <p className="section-description">
          India's largest collaborative event by Google Developer Student Clubs, 
          bringing together the brightest minds in tech for an unforgettable experience.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;