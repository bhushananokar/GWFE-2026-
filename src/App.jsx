import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
    </div>
  );
}

export default App;