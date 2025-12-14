import React, { useEffect, useRef } from 'react';
import '../styles/cardStack.css';

const CardStack = () => {
  const stackRef = useRef(null);

  const cards = [
    {
      title: 'HERO',
      subtitle: 'Welcome to WOW 2025',
      description: 'Wonder of Wonders - India\'s Largest Developer Community Festival',
      icon: '🎉',
      gradient: 'linear-gradient(135deg, #4285f4, #ea4335)'
    },
    {
      title: 'STATS',
      subtitle: 'By The Numbers',
      description: '5000+ Developers, 100+ Speakers, 50+ Sessions across India',
      icon: '📊',
      gradient: 'linear-gradient(135deg, #ea4335, #fbbc04)'
    },
    {
      title: 'LEARN',
      subtitle: 'Learn & Build',
      description: 'Master cutting-edge technologies through hands-on workshops and tech talks',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #fbbc04, #34a853)'
    },
    {
      title: 'HACK',
      subtitle: 'Hack & Create',
      description: '24-hour hackathon with amazing prizes and mentorship opportunities',
      icon: '⚡',
      gradient: 'linear-gradient(135deg, #34a853, #4285f4)'
    },
    {
      title: 'JOIN',
      subtitle: 'Join The Movement',
      description: 'Register now for India\'s biggest developer celebration - It\'s FREE!',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #4285f4, #fbbc04)'
    }
  ];

  useEffect(() => {
    // Import anime.js dynamically for the card animation
    import('animejs/lib/anime.es.js').then((anime) => {
      const animeModule = anime.default;

      // Create scroll-linked animation
      const handleScroll = () => {
        const container = document.querySelector('.sticky-container');
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress (0 to 1)
        const scrollStart = rect.top;
        const scrollRange = containerHeight - windowHeight;
        const progress = Math.max(0, Math.min(1, -scrollStart / scrollRange));

        // Animate cards based on scroll progress
        const cardElements = document.querySelectorAll('.stack-card');
        const isLandscape = window.matchMedia('(orientation: landscape)').matches;

        cardElements.forEach((card, index) => {
          const cardProgress = Math.max(0, Math.min(1, (progress * cardElements.length - index) / 1));
          
          if (isLandscape) {
            // Landscape animation - cards come from left
            const startX = -window.innerWidth * 0.6;
            const endX = (index - (cardElements.length - 1) / 2) * 20; // Spread cards
            const x = startX + (endX - startX) * cardProgress;
            
            const startY = (index % 2 === 0 ? -1 : 1) * window.innerHeight * 0.4;
            const endY = 0;
            const y = startY + (endY - startY) * cardProgress;
            
            const rotate = (index - (cardElements.length - 1) / 2) * 30 * (1 - cardProgress);
            
            card.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
            card.style.opacity = cardProgress;
          } else {
            // Portrait animation - cards come from bottom
            const startY = window.innerHeight * 1.5;
            const endY = (index - (cardElements.length - 1) / 2) * 20;
            const y = startY + (endY - startY) * cardProgress;
            
            const rotate = (index % 2 === 0 ? -20 : 20) * (1 - cardProgress);
            
            card.style.transform = `translateY(${y}px) rotate(${rotate}deg)`;
            card.style.opacity = cardProgress;
          }
        });
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial call

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  }, []);

  return (
    <>
      <section className="spacer"></section>
      <section className="sticky-container">
        <div className="sticky-content">
          <div className="stack" ref={stackRef}>
            {cards.map((card, index) => (
              <div key={index} className="stack-card">
                <div className="card-front" style={{ background: card.gradient }}>
                  <div className="card-icon">{card.icon}</div>
                  <h2 className="card-title">{card.title}</h2>
                  <h3 className="card-subtitle">{card.subtitle}</h3>
                  <p className="card-description">{card.description}</p>
                </div>
                <div className="card-back"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="spacer"></section>
    </>
  );
};

export default CardStack;