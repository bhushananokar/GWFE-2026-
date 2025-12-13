import React from 'react';
import '../../styles/sections.css';

const LearnSection = () => {
  const features = [
    {
      icon: '💻',
      title: 'Workshops',
      description: 'Hands-on technical workshops on Web, Mobile, Cloud, AI/ML, and more. Build real projects with expert guidance.'
    },
    {
      icon: '🎤',
      title: 'Tech Talks',
      description: 'Inspiring keynotes from industry leaders and Google Developer Experts on cutting-edge technologies.'
    },
    {
      icon: '🎯',
      title: 'Panel Discussions',
      description: 'Thought-provoking discussions on tech trends, career paths, and the future of technology.'
    }
  ];

  return (
    <section className="section learn-section" id="section-3">
      <div className="section-content">
        <h2 className="section-title gradient-text">LEARN & BUILD</h2>
        
        <p className="section-description">
          Master cutting-edge technologies through hands-on workshops, tech talks, 
          and interactive sessions led by industry experts and Google Developer Experts.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="section-highlight">
          <div className="highlight-badge">
            <span className="badge-icon">🌟</span>
            <span className="badge-text">3 Days of Learning</span>
          </div>
          <div className="highlight-text">
            Dive deep into the latest technologies and frameworks that are shaping the future of development
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnSection;