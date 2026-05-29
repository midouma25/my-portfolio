import React from 'react';
import './Footer.css';

function Footer() {
  return (
    // نستخدم id="contact" لكي يتمكن شريط التنقل من النزول إلى هنا
    <footer id="contact" className="footer-container">
      <div className="footer-content">
        <h2 className="footer-title">Let's Connect</h2>
        <p className="footer-text">
          I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        {/* روابط التواصل */}
        <div className="social-links">
          {/* استبدل الايميل بايميلك الحقيقي */}
          <a href="midouma25@gmail.com" className="social-link">📧 Email Me</a>
          
          {/* رابط الغيتهوب الخاص بك */}
          <a href="https://github.com/midouma25" target="_blank" rel="noreferrer" className="social-link">💻 GitHub</a>
          
          {/* يمكنك إضافة رابط لينكد إن هنا */}
          <a href="https://www.linkedin.com/in/mohamed-cherif-gherbi-8930513bb/" target="_blank" rel="noreferrer" className="social-link">🌐 LinkedIn</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Gherbi Mohamed Cherif. Built from scratch with React & Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;