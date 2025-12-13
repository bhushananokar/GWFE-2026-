import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const InnerRings = ({ scrollProgress, currentSection }) => {
  const ringsRef = useRef([]);

  const rings = [
    { size: 95, className: 'ring-1' },
    { size: 85, className: 'ring-2' },
    { size: 75, className: 'ring-3' }
  ];

  useEffect(() => {
    ringsRef.current.forEach((ring, index) => {
      if (!ring) return;

      if (currentSection === 1) {
        // Stats section - Pulse effect
        anime({
          targets: ring,
          scale: 1 + Math.sin(scrollProgress * Math.PI * 4) * 0.1,
          opacity: 1,
          duration: 100,
          easing: 'linear'
        });
      } else if (currentSection === 2) {
        // Learn section - Explode outward
        anime({
          targets: ring,
          scale: 1 + (index + 1) * scrollProgress * 0.5,
          opacity: 1 - scrollProgress * 0.5,
          duration: 300,
          easing: 'easeOutQuad'
        });
      } else if (currentSection === 4) {
        // Join section - Fade out
        anime({
          targets: ring,
          opacity: 1 - scrollProgress,
          duration: 300,
          easing: 'easeOutQuad'
        });
      } else {
        // Default state
        anime({
          targets: ring,
          scale: 1,
          opacity: 1,
          duration: 300,
          easing: 'easeOutQuad'
        });
      }

      // Continuous gentle rotation
      anime({
        targets: ring,
        rotate: scrollProgress * 180,
        duration: 100,
        easing: 'linear'
      });
    });
  }, [scrollProgress, currentSection]);

  return (
    <>
      {rings.map((ring, index) => (
        <div
          key={index}
          ref={el => ringsRef.current[index] = el}
          className={`inner-ring ${ring.className}`}
          style={{
            width: `${ring.size}%`,
            height: `${ring.size}%`
          }}
        />
      ))}
    </>
  );
};

export default InnerRings;