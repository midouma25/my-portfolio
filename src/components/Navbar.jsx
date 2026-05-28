import React from 'react';
import './Navbar.css'; // سنقوم بإنشاء هذا الملف في الخطوة القادمة

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* قسم الشعار (اللوجو) */}
      <div className="navbar-logo">
        <h2>Cherif<span className="highlight">.AI</span></h2>
      </div>

      {/* روابط التنقل */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;