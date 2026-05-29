import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import VoiceAndMedia from './components/VoiceAndMedia';
import Education from './components/Education';
import Footer from './components/Footer'; // <--- الاستدعاء الجديد

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Projects />
      <VoiceAndMedia />
      <Education />
      <Footer /> {/* <--- نهاية الموقع */}
    </div>
  );
}

export default App;