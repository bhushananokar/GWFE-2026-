import React, { useEffect, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import '../styles/loading.css';

const LoadingSequence = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 1: Draw outer ring clockwise
    setTimeout(() => {
      setStage(1);
      
      anime({
        targets: '.loading-outer-ring',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 2000,
        easing: 'easeInOutQuad',
        complete: () => {
          // Stage 2: Dots flicker on
          setTimeout(() => {
            setStage(2);
            
            // Flicker effect for dots
            const dots = document.querySelectorAll('.loading-dot');
            
            // First flicker all randomly
            dots.forEach((dot) => {
              const randomDelay = Math.random() * 1000;
              setTimeout(() => {
                anime({
                  targets: dot,
                  opacity: [0, 1, 0, 1, 0, 1],
                  duration: 400,
                  easing: 'linear'
                });
              }, randomDelay);
            });
            
            // Then fade all in from center
            setTimeout(() => {
              anime({
                targets: dots,
                opacity: [0, 1],
                scale: [0.5, 1],
                delay: anime.stagger(20, { from: 'center', grid: [15, 10] }),
                duration: 600,
                easing: 'easeOutQuad',
                complete: () => {
                  // Stage 3: Colored segments fill in
                  setTimeout(() => {
                    setStage(3);
                    
                    // Animate each segment arc
                    const segments = [
                      '.loading-arc-blue',
                      '.loading-arc-green', 
                      '.loading-arc-yellow',
                      '.loading-arc-red'
                    ];
                    
                    segments.forEach((selector, index) => {
                      setTimeout(() => {
                        anime({
                          targets: selector,
                          strokeDashoffset: [anime.setDashoffset, 0],
                          duration: 600,
                          easing: 'easeInOutQuad'
                        });
                      }, index * 200);
                    });
                    
                    // After all segments are done, fade out loading
                    setTimeout(() => {
                      anime({
                        targets: '.loading-sequence',
                        opacity: [1, 0],
                        duration: 800,
                        easing: 'easeOutQuad',
                        complete: () => {
                          onComplete();
                        }
                      });
                    }, 1400);
                  }, 300);
                }
              });
            }, 1200);
          }, 400);
        }
      });
    }, 500);
  }, [onComplete]);

  return (
    <div className="loading-sequence">
      <div className="loading-viz-container">
        {/* Background elements */}
        {stage >= 1 && (
          <>
            {/* Inner rings */}
            <div className="loading-inner-ring loading-ring-1"></div>
            <div className="loading-inner-ring loading-ring-2"></div>
            <div className="loading-inner-ring loading-ring-3"></div>
            
            {/* Tick marks */}
            <div className="loading-ticks-container">
              {Array.from({ length: 120 }).map((_, i) => (
                <div
                  key={i}
                  className={`loading-tick ${i % 10 === 0 ? 'loading-tick-large' : ''}`}
                  style={{ transform: `rotate(${i * 3}deg)` }}
                />
              ))}
            </div>
          </>
        )}

        {/* Outer ring - drawn clockwise */}
        <svg className="loading-ring-svg" viewBox="0 0 600 600">
          <circle
            className="loading-outer-ring"
            cx="300"
            cy="300"
            r="285"
            fill="none"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="4"
            strokeDasharray="1790.49"
            strokeDashoffset="1790.49"
          />
        </svg>

        {/* Dots Grid */}
        {stage >= 2 && (
          <div className="loading-dots-grid">
            {Array.from({ length: 150 }).map((_, i) => (
              <div key={i} className="loading-dot" />
            ))}
          </div>
        )}

        {/* Colored Segment Arcs */}
        {stage >= 3 && (
          <svg className="loading-segments-svg" viewBox="0 0 600 600">
            {/* Blue arc (top right - 0° to 90°) */}
            <path
              className="loading-arc-blue"
              d="M 300,15 A 285,285 0 0,1 585,300"
              fill="none"
              stroke="#4285f4"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="447.62"
              strokeDashoffset="447.62"
            />
            
            {/* Green arc (bottom right - 90° to 180°) */}
            <path
              className="loading-arc-green"
              d="M 585,300 A 285,285 0 0,1 300,585"
              fill="none"
              stroke="#34a853"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="447.62"
              strokeDashoffset="447.62"
            />
            
            {/* Yellow arc (bottom left - 180° to 270°) */}
            <path
              className="loading-arc-yellow"
              d="M 300,585 A 285,285 0 0,1 15,300"
              fill="none"
              stroke="#fbbc04"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="447.62"
              strokeDashoffset="447.62"
            />
            
            {/* Red arc (top left - 270° to 360°) */}
            <path
              className="loading-arc-red"
              d="M 15,300 A 285,285 0 0,1 300,15"
              fill="none"
              stroke="#ea4335"
              strokeWidth="15"
              strokeLinecap="round"
              strokeDasharray="447.62"
              strokeDashoffset="447.62"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default LoadingSequence;