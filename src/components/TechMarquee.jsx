import React from 'react';
import './TechMarquee.css';

function TechMarquee() {
  // قائمة التقنيات والبرامج التي تتقنها
  const techList = [
    "React", "Python", "Adobe Audition", "Node.js", "MongoDB", 
    "Sony Vegas Pro", "Audio QA", "Git/GitHub", "Tailwind CSS", 
    "Machine Learning", "Express.js", "REST APIs"
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {/* نكرر القائمة مرتين لكي لا ينقطع الشريط أثناء الدوران */}
        {techList.map((tech, index) => (
          <span key={index} className="tech-item">{tech}</span>
        ))}
        {techList.map((tech, index) => (
          <span key={index + 'duplicate'} className="tech-item">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default TechMarquee;
