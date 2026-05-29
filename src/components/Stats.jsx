import React from 'react';
import './Stats.css';

function Stats() {
  const statsData = [
    { id: 1, number: "3+", text: "Years of Academic AI Study" },
    { id: 2, number: "5+", text: "Professional Certifications" },
    { id: 3, number: "100+", text: "Hours of Audio QA & Editing" },
    { id: 4, number: "4", text: "Full-Stack & AI Projects" }
  ];

  return (
    <div className="stats-container">
      {statsData.map((stat) => (
        <div key={stat.id} className="stat-item">
          <h3 className="stat-number">{stat.number}</h3>
          <p className="stat-text">{stat.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;