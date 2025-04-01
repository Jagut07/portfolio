import React, { useState, useEffect } from 'react';



import Education from './components/Education';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import Contact from './components/ContactSection';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import ProjectsSection from './components/Project';




const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar
      />
      <HeroSection />
      <AboutSection />
      <Skills/>
      <ProjectsSection/>
      <Education />
      <Contact />
    </div>
  );
};

export default App;