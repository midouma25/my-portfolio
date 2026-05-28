// استدعاء مكتبة رياكت الأساسية لبناء المكون
import React from 'react';
import './Hero.css';
// مكون القسم الرئيسي للموقع
function Hero() {
  return (
    // نستخدم className بدلاً من class في JSX
    <div className="hero-container">
      
      {/* الاسم الكامل */}
      <h1 className="hero-title">Gherbi Mohamed Cherif</h1>
      
      {/* المسمى الوظيفي الذي يدمج بين تخصصاتك */}
      <h2 className="hero-subtitle">Software Engineer & AI Developer</h2>
      
      {/* نبذة مختصرة وقوية تعكس مهاراتك في البرمجة والذكاء الاصطناعي وتحليل الصوت/الصورة */}
      <p className="hero-description">
        Bridging the gap between software engineering, audio/visual data analysis, 
        and multimodal AI to build intelligent future systems.
      </p>
      
      {/* أزرار اتخاذ القرار (Call to Action) */}
      <div className="hero-buttons">
        <button className="primary-btn">View Projects</button>
        <button className="secondary-btn">Contact Me</button>
      </div>

    </div>
  );
}

// تصدير المكون لكي يتمكن ملف App.js من قراءته
export default Hero;