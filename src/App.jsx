import React from 'react';
import './App.css';
// هنا نقوم باستدعاء المكون الذي صنعناه
import Hero from './components/Hero'; 

function App() {
  return (
    <div className="app-container">
      <Hero /> 
    </div>
  );
}

export default App;