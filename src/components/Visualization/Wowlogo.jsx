import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const WowLogo = ({ scrollProgress, currentSection }) => {
  const wLettersRef = useRef([]);
  const oLetterRef = useRef(null);

  useEffect(() => {
    // Section 0: Hero - Letters together forming WOW
    if (currentSection === 0) {
      // W letters
      wLettersRef.current.forEach((letter, index) => {
        if (letter) {
          anime({
            targets: letter,
            translateX: index === 0 ? -120 : 120,
            translateY: 0,
            translateZ: 0,
            rotateZ: 0,
            opacity: 1,
            scale: 1,
            duration: 600,
            easing: 'easeOutQuad'
          });
        }
      });

      // O letter (center)
      if (oLetterRef.current) {
        anime({
          targets: oLetterRef.current,
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateZ: scrollProgress * 360,
          opacity: 1,
          scale: 1,
          duration: 100,
          easing: 'linear'
        });
      }
    }

    // Section 1: Stats - Letters expand outward
    else if (currentSection === 1) {
      wLettersRef.current.forEach((letter, index) => {
        if (letter) {
          anime({
            targets: letter,
            translateX: index === 0 ? -120 - scrollProgress * 100 : 120 + scrollProgress * 100,
            translateY: scrollProgress * -80,
            translateZ: scrollProgress * 100,
            rotateZ: scrollProgress * 45 * (index === 0 ? -1 : 1),
            scale: 1 + scrollProgress * 0.3,
            duration: 300,
            easing: 'easeOutQuad'
          });
        }
      });

      if (oLetterRef.current) {
        anime({
          targets: oLetterRef.current,
          translateZ: scrollProgress * 50,
          rotateZ: scrollProgress * 720,
          scale: 1 + scrollProgress * 0.5,
          duration: 300,
          easing: 'easeOutQuad'
        });
      }
    }

    // Section 2: Learn - Letters disassemble/explode
    else if (currentSection === 2) {
      wLettersRef.current.forEach((letter, index) => {
        if (letter) {
          const angle = index === 0 ? -Math.PI / 3 : Math.PI / 3;
          anime({
            targets: letter,
            translateX: Math.cos(angle) * scrollProgress * 300,
            translateY: Math.sin(angle) * scrollProgress * 300,
            translateZ: scrollProgress * 200,
            rotateX: scrollProgress * 180,
            rotateY: scrollProgress * 180,
            rotateZ: scrollProgress * 360,
            opacity: 1 - scrollProgress * 0.5,
            scale: 0.5 + scrollProgress * 0.5,
            duration: 300,
            easing: 'easeOutQuad'
          });
        }
      });

      if (oLetterRef.current) {
        anime({
          targets: oLetterRef.current,
          translateZ: scrollProgress * 150,
          rotateX: scrollProgress * 360,
          rotateY: scrollProgress * 360,
          scale: 1 + scrollProgress,
          opacity: 1 - scrollProgress * 0.3,
          duration: 300,
          easing: 'easeOutQuad'
        });
      }
    }

    // Section 3: Hack - Letters form 3D arrangement
    else if (currentSection === 3) {
      wLettersRef.current.forEach((letter, index) => {
        if (letter) {
          anime({
            targets: letter,
            translateX: index === 0 ? -150 : 150,
            translateY: Math.sin(scrollProgress * Math.PI) * 100,
            translateZ: 100,
            rotateY: scrollProgress * 180,
            rotateZ: 0,
            scale: 1.2,
            opacity: 0.9,
            duration: 600,
            easing: 'easeOutQuad'
          });
        }
      });

      if (oLetterRef.current) {
        anime({
          targets: oLetterRef.current,
          translateZ: 50,
          rotateY: scrollProgress * 360,
          scale: 1.3,
          duration: 600,
          easing: 'easeOutQuad'
        });
      }
    }

    // Section 4: Join - Letters spiral and collapse
    else if (currentSection === 4) {
      const spiralAngle = scrollProgress * Math.PI * 4;
      const radius = (1 - scrollProgress) * 150;

      wLettersRef.current.forEach((letter, index) => {
        if (letter) {
          const offset = index === 0 ? 0 : Math.PI;
          anime({
            targets: letter,
            translateX: Math.cos(spiralAngle + offset) * radius,
            translateY: Math.sin(spiralAngle + offset) * radius,
            translateZ: (1 - scrollProgress) * 100,
            rotateZ: spiralAngle * 180 / Math.PI,
            scale: 1 - scrollProgress * 0.7,
            opacity: 1 - scrollProgress * 0.8,
            duration: 300,
            easing: 'easeOutQuad'
          });
        }
      });

      if (oLetterRef.current) {
        anime({
          targets: oLetterRef.current,
          translateZ: (1 - scrollProgress) * 50,
          rotateZ: spiralAngle * 180 / Math.PI,
          scale: 1 - scrollProgress * 0.8,
          opacity: 1 - scrollProgress * 0.9,
          duration: 300,
          easing: 'easeOutQuad'
        });
      }
    }
  }, [scrollProgress, currentSection]);

  return (
    <div className="wow-logo-container">
      {/* First W */}
      <div 
        ref={el => wLettersRef.current[0] = el}
        className="wow-letter w-letter-1"
      >
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path
            d="M 10,20 L 25,80 L 40,40 L 55,80 L 70,20"
            stroke="url(#gradientW1)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradientW1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285f4" />
              <stop offset="50%" stopColor="#ea4335" />
              <stop offset="100%" stopColor="#fbbc04" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* O (center) - with star/flower pattern */}
      <div 
        ref={oLetterRef}
        className="wow-letter o-letter"
      >
        <svg viewBox="0 0 120 120" width="120" height="120">
          {/* Outer petals */}
          <g className="petals">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <path
                key={i}
                d="M 60,60 Q 60,30 75,25 Q 90,30 90,45 Q 75,50 60,60"
                fill={['#4285f4', '#ea4335', '#fbbc04', '#34a853', '#4285f4', '#ea4335', '#fbbc04', '#34a853'][i]}
                transform={`rotate(${angle} 60 60)`}
                opacity="0.9"
              />
            ))}
          </g>
          {/* Center circle */}
          <circle
            cx="60"
            cy="60"
            r="20"
            fill="#fbbc04"
            stroke="#fff"
            strokeWidth="3"
          />
          {/* Inner symbol */}
          <text
            x="60"
            y="68"
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
            fill="white"
            fontFamily="Bangers"
          >
            O
          </text>
        </svg>
      </div>

      {/* Second W */}
      <div 
        ref={el => wLettersRef.current[1] = el}
        className="wow-letter w-letter-2"
      >
        <svg viewBox="0 0 100 100" width="100" height="100">
          <path
            d="M 30,20 L 45,80 L 60,40 L 75,80 L 90,20"
            stroke="url(#gradientW2)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradientW2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34a853" />
              <stop offset="50%" stopColor="#4285f4" />
              <stop offset="100%" stopColor="#ea4335" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default WowLogo;