import React, { useEffect, useRef, forwardRef } from 'react';
import anime from 'animejs';

const DotsGrid = forwardRef(({ scrollProgress, currentSection }, ref) => {
  const dotsRef = useRef([]);
  const dotsCount = 150;
  const gridCols = 15;
  const gridRows = 10;

  useEffect(() => {
    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;

      const row = Math.floor(i / gridCols);
      const col = i % gridCols;
      const centerX = 7;
      const centerY = 5;

      switch (currentSection) {
        case 0: // Hero - Flat grid
          anime({
            targets: dot,
            translateX: 0,
            translateY: 0,
            translateZ: 0,
            scale: 1,
            opacity: 0.8,
            duration: 300,
            easing: 'easeOutQuad'
          });
          break;

        case 1: // Stats - Expand from center
          {
            const distance = Math.sqrt(
              Math.pow(col - centerX, 2) + 
              Math.pow(row - centerY, 2)
            );
            
            anime({
              targets: dot,
              translateX: 0,
              translateY: 0,
              translateZ: distance * scrollProgress * 30,
              scale: 1 + scrollProgress * 0.5,
              opacity: 0.8 + scrollProgress * 0.2,
              duration: 300,
              easing: 'easeOutQuad'
            });
          }
          break;

        case 2: // Learn - Scatter/Disassemble
          {
            const angle = (i / dotsCount) * Math.PI * 2;
            const radius = scrollProgress * 150;
            
            anime({
              targets: dot,
              translateX: Math.cos(angle) * radius,
              translateY: Math.sin(angle) * radius,
              translateZ: (row * col) * scrollProgress * 5,
              scale: 0.5 + scrollProgress,
              opacity: 1 - scrollProgress * 0.3,
              duration: 300,
              easing: 'easeOutQuad'
            });
          }
          break;

        case 3: // Hack - Form sphere
          {
            const phi = (row / gridRows) * Math.PI;
            const theta = (col / gridCols) * Math.PI * 2;
            const radius = 150;
            
            const x = radius * Math.sin(phi) * Math.cos(theta) * scrollProgress;
            const y = radius * Math.sin(phi) * Math.sin(theta) * scrollProgress;
            const z = radius * Math.cos(phi) * scrollProgress;
            
            anime({
              targets: dot,
              translateX: x,
              translateY: y,
              translateZ: z,
              scale: 1.2,
              opacity: 0.9,
              duration: 300,
              easing: 'easeOutQuad'
            });
          }
          break;

        case 4: // Join - Spiral collapse
          {
            const angle = (i / dotsCount) * Math.PI * 8 + scrollProgress * Math.PI * 4;
            const radius = (1 - scrollProgress) * 200;
            const z = (i - dotsCount / 2) * (1 - scrollProgress) * 2;
            
            anime({
              targets: dot,
              translateX: Math.cos(angle) * radius,
              translateY: Math.sin(angle) * radius,
              translateZ: z,
              scale: 1 - scrollProgress * 0.8,
              opacity: 1 - scrollProgress * 0.7,
              duration: 300,
              easing: 'easeOutQuad'
            });
          }
          break;

        default:
          break;
      }
    });
  }, [scrollProgress, currentSection]);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < dotsCount; i++) {
      dots.push(
        <div
          key={i}
          ref={el => dotsRef.current[i] = el}
          className="dot"
          data-index={i}
        />
      );
    }
    return dots;
  };

  return (
    <div className="dots-layer" ref={ref}>
      {renderDots()}
    </div>
  );
});

DotsGrid.displayName = 'DotsGrid';

export default DotsGrid;