import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently active
 * @param {number} totalSections - Total number of sections (default: 5)
 * @returns {number} Current section index (0-based)
 */
const useScrollSection = (totalSections = 5) => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate which section we're in
      const sectionIndex = Math.min(
        Math.floor(scrollPosition / windowHeight),
        totalSections - 1
      );
      
      // Only update if section changed
      if (sectionIndex !== currentSection) {
        setCurrentSection(sectionIndex);
      }
    };

    // Initial calculation
    handleScroll();

    // Add scroll listener with throttling
    let ticking = false;
    
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [currentSection, totalSections]);

  return currentSection;
};

export default useScrollSection;