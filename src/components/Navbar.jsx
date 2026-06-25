import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  // حالة لفتح وإغلاق القائمة في الهاتف
  const [isOpen, setIsOpen] = useState(false);

  // دالة لعكس الحالة (فتح/إغلاق)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // دالة لإغلاق القائمة تلقائياً عند الضغط على أي رابط
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home">Gherbi<span className="highlight-dot">.AI</span></a>
      </div>

{/* زر الهامبرغر الجديد (محصن ضد التشوه) */}
      <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div> 

      {/* روابط التنقل (تأخذ كلاس active إذا كانت مفتوحة) */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-item" onClick={closeMenu}><b>Home</b></a></li>
        <li><a href="#projects" className="nav-item" onClick={closeMenu}><b>Projects</b></a></li>
        <li><a href="#media" className="nav-item" onClick={closeMenu}><b>Audio QA</b></a></li>
        <li><a href="#education" className="nav-item" onClick={closeMenu}><b>Education</b></a></li>
        
        {/* زر التواصل يظهر داخل القائمة في الهاتف فقط */}
        <li className="mobile-only">
          <a href="#contact" className="nav-contact-btn" onClick={closeMenu}>Let's Talk</a>
        </li>
      </ul>

      {/* زر التواصل العادي (يظهر في الكمبيوتر فقط) */}
      <div className="nav-action desktop-only">
        <a href="#contact" className="nav-contact-btn">Let's Talk</a>
      </div>
    </nav>
  );
}

export default Navbar;