import React from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TechMarquee from './components/TechMarquee';
import Projects from './components/Projects';
import VoiceAndMedia from './components/VoiceAndMedia';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal'; // <-- الاستدعاء

function App() {
  return (
    <div className="app-container">
      <CustomCursor />
      <Navbar />
      
      {/* قسم الـ Hero لا نغلفه لأنه يجب أن يكون ظاهراً فور فتح الموقع */}
      <Hero />
      <Stats />
      <TechMarquee />
      
      {/* نغلف بقية الأقسام بصندوق الـ ScrollReveal */}
      <ScrollReveal>
        <Projects />
      </ScrollReveal>

      <ScrollReveal>
        <VoiceAndMedia />
      </ScrollReveal>

      <ScrollReveal>
        <Education />
      </ScrollReveal>

      <ScrollReveal>
        <Contact />
      </ScrollReveal>

      <Footer />
    </div>
  );
}

export default App;