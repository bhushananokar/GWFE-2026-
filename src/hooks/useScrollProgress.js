import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll progress within the current section
 * @returns {number} Progress value between 0 and 1
 */
const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          
          // Calculate progress within current section (0 to 1)
          const sectionProgress = (scrollPosition % windowHeight) / windowHeight;
          
          setScrollProgress(sectionProgress);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollProgress;
};

export default useScrollProgress;