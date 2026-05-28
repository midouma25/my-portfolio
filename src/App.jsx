import React from 'react';
import './App.css';
import Navbar from './components/Navbar'; // استدعاء شريط التنقل
// هنا نقوم باستدعاء المكون الذي صنعناه
import Hero from './components/Hero.jsx'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero /> 
    </div>
  );
}

export default App;