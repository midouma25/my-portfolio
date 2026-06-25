import React from 'react';
import './Education.css';

function Education() {
  // 1. مصفوفة التعليم الأكاديمي
  const academics = [
    {
      id: 1,
      degree: "Master's Degree, Artificial Intelligence",
      institution: "Abdelhamid Mehri Constantine 2 University",
      date: "Sep 2023 – Present",
      status: "In Progress"
    },
    {
      id: 2,
      degree: "Bachelor's Degree, Information Technology",
      institution: "Abdelhamid Mehri Constantine 2 University",
      date: "2020 – 2023",
      status: "Graduated"
    }
  ];

  // 2. مصفوفة الشهادات الاحترافية
  const certifications = [
     {
      id: 1,
      name: "Getting Started with Git and GitHub",
      issuer: "IBM",
      date: "May 2026"
    },
     {
      id: 2,
      name: "HTML, CSS, & JavaScript for Web Developers",
      issuer: "IBM",
      date: "April 2026"
    },
    {
      id: 3,
      name: "Developing Front-End Apps with React",
      issuer: "IBM",
      date: "May 2026"
    },
        {
      id: 4,
      name: "Developing Back-End Apps with Node.js and Express",
      issuer: "IBM",
      date: "June 2026"
    },
    {
      id: 5,
      name: "Cloud Computing & Full Stack Dev",
      issuer: "IBM",
      date: "Apr 2026"
    },
    {
      id: 6,
      name: "Crash Course on Python",
      issuer: "Google",
      date: "Nov 2025"
    },
    {
      id: 7,
      name: "Algorithmic Forex Trading System",
      issuer: "Udemy",
      date: "Jul 2025"
    }
  ];

  return (
    <section id="education" className="education-container">
      <h2 className="section-title">Education & Certifications</h2>
      
      <div className="education-content">
        
        {/* العمود الأول: التعليم الجامعي */}
        <div className="academic-section">
          <h3 className="sub-title">🎓 Academic Background</h3>
          <div className="timeline">
            {academics.map((edu) => (
              <div key={edu.id} className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="degree-title">{edu.degree}</h4>
                <p className="institution">{edu.institution}</p>
                <span className="date-badge">{edu.date} • {edu.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* العمود الثاني: الشهادات */}
        <div className="cert-section">
          <h3 className="sub-title">📜 Professional Certifications</h3>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="cert-card">
                <h4 className="cert-name">{cert.name}</h4>
                <div className="cert-footer">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;