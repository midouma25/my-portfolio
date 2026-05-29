import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Let's Build Something Great</h2>
      <p className="contact-subtitle">Whether it's a project, an AI evaluation role, or just a chat about the future of tech.</p>
      
      {/* ضع الرابط الذي ستحصل عليه من Formspree مكان "YOUR_FORMSPREE_LINK_HERE" 
        مثال: action="https://formspree.io/f/mbdbbooq"
      */}
      <form 
        action="https://formspree.io/f/mbdbbooq" 
        method="POST" 
        className="contact-form"
      >
        <div className="input-group">
          {/* يجب وضع name="name" و name="email" لكي يتعرف عليها النظام */}
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <input type="text" name="subject" placeholder="Subject" required className="full-width" />
        <textarea name="message" placeholder="Your Message..." rows="5" required className="full-width"></textarea>
        
        <button type="submit" className="submit-btn">Send Message 🚀</button>
      </form>
    </section>
  );
}

export default Contact;