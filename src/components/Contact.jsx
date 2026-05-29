import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // دالة وهمية لمنع إعادة تحميل الصفحة وإظهار رسالة نجاح
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // يمكن لاحقاً ربطها بخدمة مثل EmailJS لإرسال إيميل حقيقي
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's Build Something Great</h2>
      <p className="contact-subtitle">Whether it's a project, an AI evaluation role, or just a chat about the future of tech.</p>
      
      {isSubmitted ? (
        <div className="success-message">
          <h3>✅ Message Sent Successfully!</h3>
          <p>Thank you for reaching out. I'll get back to you shortly.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required className="full-width" />
          <textarea placeholder="Your Message..." rows="5" required className="full-width"></textarea>
          <button type="submit" className="submit-btn">Send Message 🚀</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
