import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';
import OuterRing from './OuterRing';
import InnerRings from './InnerRings';
import TickMarks from './TickMarks';
import DotsGrid from './DotsGrid';
import '../../styles/visualization.css';

const CentralViz = ({ scrollProgress, currentSection }) => {
  const vizRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!vizRef.current || !containerRef.current) return;

    // Position transitions based on section
    let position = { x: '50%', y: '50%' }; // Default center

    switch (currentSection) {
      case 0: // Hero - Right
        position = { x: '70%', y: '50%' };
        break;
      case 1: // Stats - Center
        position = { x: '50%', y: '50%' };
        break;
      case 2: // Learn - Left
        position = { x: '30%', y: '50%' };
        break;
      case 3: // Hack - Left
        position = { x: '30%', y: '50%' };
        break;
      case 4: // Join - Left
        position = { x: '30%', y: '50%' };
        break;
      default:
        position = { x: '50%', y: '50%' };
    }

    // Animate container position
    anime({
      targets: containerRef.current,
      left: position.x,
      top: position.y,
      duration: 1000,
      easing: 'easeInOutQuad'
    });

    // Base state rotation - only subtle rotation based on scroll within section
    anime({
      targets: vizRef.current,
      rotateX: 0,
      rotateY: scrollProgress * 90, // Gentle rotation
      rotateZ: 0,
      scale: 1,
      duration: 600,
      easing: 'easeOutQuad'
    });

  }, [scrollProgress, currentSection]);

  return (
    <div className="visualization-container" ref={containerRef}>
      <div className="viz-inner" ref={vizRef}>
        <OuterRing scrollProgress={scrollProgress} currentSection={currentSection} />
        <TickMarks />
        <InnerRings scrollProgress={scrollProgress} currentSection={currentSection} />
        
        <div className="curved-arcs">
          <div 
            className="curved-arc arc-1" 
            style={{ 
              bottom: '15%', 
              right: '12%', 
              transform: 'translate(-50%, -50%) rotate(45deg)' 
            }}
          />
          <div 
            className="curved-arc arc-2" 
            style={{ 
              top: '15%', 
              left: '12%', 
              transform: 'translate(-50%, -50%) rotate(-135deg)' 
            }}
          />
        </div>

        <DotsGrid scrollProgress={scrollProgress} currentSection={currentSection} />
      </div>
    </div>
  );
};

export default CentralViz;