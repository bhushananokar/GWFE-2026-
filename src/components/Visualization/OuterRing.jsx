import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const OuterRing = ({ scrollProgress, currentSection }) => {
  const segmentsRef = useRef([]);

  const segments = [
    { color: 'blue', className: 'segment-blue' },
    { color: 'green', className: 'segment-green' },
    { color: 'yellow', className: 'segment-yellow' },
    { color: 'red', className: 'segment-red' }
  ];

  useEffect(() => {
    // Rotate segments based on scroll
    segmentsRef.current.forEach((segment, index) => {
      if (segment) {
        anime({
          targets: segment,
          rotate: scrollProgress * 360,
          duration: 100,
          easing: 'linear'
        });
      }
    });
  }, [scrollProgress]);

  return (
    <div className="outer-ring">
      {segments.map((segment, index) => (
        <div
          key={index}
          ref={el => segmentsRef.current[index] = el}
          className={`ring-segment ${segment.className}`}
          data-color={segment.color}
        />
      ))}
    </div>
  );
};

export default OuterRing;