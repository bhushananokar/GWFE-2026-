import React, { useState } from 'react';
import useScrollProgress from './hooks/useScrollProgress';
import useScrollSection from './hooks/useScrollSection';
import Navigation from './components/Navigation';
import ProgressIndicator from './components/ProgressIndicator';
import CentralViz from './components/Visualization/CentralViz';
import LoadingSequence from './components/LoadingSequence';
import HeroSection from './components/Sections/HeroSection';
import StatsSection from './components/Sections/StatsSection';
import LearnSection from './components/Sections/LearnSection';
import HackSection from './components/Sections/HackSection';
import JoinSection from './components/Sections/JoinSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const scrollProgress = useScrollProgress();
  const currentSection = useScrollSection(5);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingSequence onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="app-container">
      <Navigation currentSection={currentSection} />
      <ProgressIndicator currentSection={currentSection} totalSections={5} />
      <CentralViz scrollProgress={scrollProgress} currentSection={currentSection} />

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