import React from 'react';
import useScrollProgress from './hooks/useScrollProgress';
import useScrollSection from './hooks/useScrollSection';
import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import CentralViz from './components/Visualization/CentralViz';
import HeroSection from './components/Sections/HeroSection';
import StatsSection from './components/Sections/StatsSection';
import LearnSection from './components/Sections/LearnSection';
import HackSection from './components/Sections/HackSection';
import JoinSection from './components/Sections/JoinSection';

function App() {
  // Custom hooks for scroll tracking
  const scrollProgress = useScrollProgress();
  const currentSection = useScrollSection(5);

  return (
    <div className="app-container">
      {/* Fixed Navigation */}
      <Navigation currentSection={currentSection} />

      {/* Fixed Progress Indicator */}
      <ProgressIndicator currentSection={currentSection} totalSections={5} />

      {/* Fixed Central 3D Visualization */}
      <CentralViz scrollProgress={scrollProgress} currentSection={currentSection} />

      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <StatsSection />
        <LearnSection />
        <HackSection />
        <JoinSection />
      </main>
    </div>
  );
}

export default App;