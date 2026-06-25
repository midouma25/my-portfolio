import React from 'react';
import './Languages.css';

function Languages() {
  const languages = [
    {
      id: 1,
      flag: "🇩🇿",
      name: "Arabic",
      level: "Native / Mother Tongue",
      desc: "Deep understanding of cultural context, dialects, and emotional vocal nuances."
    },
    {
      id: 2,
      flag: "🇬🇧",
      name: "English",
      level: "Professional / B2 Level",
      desc: "Certified B1+/B2 (Chalabi Institute). Duolingo Level 100 (B2). Highly proficient in technical documentation and communication."
    },
    {
      id: 3,
      flag: "🇫🇷",
      name: "French",
      level: "Academic Proficiency",
      desc: "Official university attestation. Conducted my entire University CS studies and academic research in French."
    },
    {
      id: 4,
      flag: "🇯🇵",
      name: "Japanese",
      level: "Audio Comprehension",
      desc: "Strong critical listening skills. Excellent at understanding, repeating, and dubbing audio accurately without written text."
    }
  ];

  return (
    <section id="languages" className="languages-container">
      <h2 className="section-title">Languages & Vocal Comprehension</h2>
      <p className="languages-subtitle">A multilingual ear trained for global AI audio evaluation and precise communication.</p>
      
      <div className="languages-grid">
        {languages.map((lang) => (
          <div key={lang.id} className="language-card">
            <div className="lang-header">
              <span className="lang-flag">{lang.flag}</span>
              <h3 className="lang-name">{lang.name}</h3>
            </div>
            <div className="lang-level">{lang.level}</div>
            <p className="lang-desc">{lang.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Languages;