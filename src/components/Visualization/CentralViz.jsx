import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import OuterRing from './OuterRing';
import InnerRings from './InnerRings';
import TickMarks from './TickMarks';
import DotsGrid from './DotsGrid';
import '../../styles/visualization.css';

const CentralViz = ({ scrollProgress, currentSection }) => {
  const vizRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    if (!vizRef.current) return;

    // Section-based transformations
    switch (currentSection) {
      case 0: // Hero - Circular with rotation
        anime({
          targets: vizRef.current,
          rotateX: 0,
          rotateY: scrollProgress * 360,
          rotateZ: 0,
          scale: 1,
          duration: 100,
          easing: 'linear'
        });
        break;

      case 1: // Stats - Expand and tilt
        anime({
          targets: vizRef.current,
          rotateX: scrollProgress * 45,
          rotateY: 360 + scrollProgress * 180,
          rotateZ: 0,
          scale: 1 + scrollProgress * 0.3,
          duration: 100,
          easing: 'linear'
        });
        break;

      case 2: // Learn - Disassemble
        anime({
          targets: vizRef.current,
          rotateX: 45 + scrollProgress * 45,
          rotateY: 540 + scrollProgress * 180,
          rotateZ: scrollProgress * 180,
          scale: 1.3,
          duration: 100,
          easing: 'linear'
        });
        break;

      case 3: // Hack - Form sphere
        anime({
          targets: vizRef.current,
          rotateX: 90 + scrollProgress * 90,
          rotateY: 720 + scrollProgress * 360,
          rotateZ: 180,
          scale: 1.2,
          duration: 100,
          easing: 'linear'
        });
        break;

      case 4: // Join - Spiral collapse
        anime({
          targets: vizRef.current,
          rotateX: 180,
          rotateY: 1080 + scrollProgress * 720,
          rotateZ: 180 + scrollProgress * 360,
          scale: 1 - scrollProgress * 0.5,
          duration: 100,
          easing: 'linear'
        });
        break;

      default:
        break;
    }
  }, [scrollProgress, currentSection]);

  return (
    <div className="visualization-container">
      <div className="viz-inner" ref={vizRef}>
        {/* Outer colored ring segments */}
        <OuterRing scrollProgress={scrollProgress} currentSection={currentSection} />

        {/* Tick marks around perimeter */}
        <TickMarks />

        {/* Inner decorative rings */}
        <InnerRings scrollProgress={scrollProgress} currentSection={currentSection} />

        {/* Curved decorative arcs */}
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

        {/* Center dots grid - 3D transforming element */}
        <DotsGrid 
          ref={dotsRef}
          scrollProgress={scrollProgress} 
          currentSection={currentSection} 
        />
      </div>
    </div>
  );
};

export default CentralViz;