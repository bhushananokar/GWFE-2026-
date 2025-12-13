import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const TickMarks = () => {
  const ticksContainerRef = useRef(null);
  const ticksCount = 120;

  useEffect(() => {
    // Continuous rotation of tick marks
    if (ticksContainerRef.current) {
      anime({
        targets: ticksContainerRef.current,
        rotate: 360,
        duration: 60000,
        loop: true,
        easing: 'linear'
      });
    }
  }, []);

  const renderTicks = () => {
    const ticks = [];
    for (let i = 0; i < ticksCount; i++) {
      const isLarge = i % 10 === 0;
      ticks.push(
        <div
          key={i}
          className={`tick ${isLarge ? 'tick-large' : ''}`}
          style={{
            transform: `rotate(${i * 3}deg)`
          }}
        />
      );
    }
    return ticks;
  };

  return (
    <div className="ticks-container" ref={ticksContainerRef}>
      {renderTicks()}
    </div>
  );
};

export default TickMarks;