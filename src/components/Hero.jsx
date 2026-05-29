import React, { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ["Software Engineer", "n AI Audio Evaluator", "Full-Stack Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="hero-container">
      
      {/* القسم الأيسر: النصوص والأزرار */}
      <div className="hero-text">
        <div className="hero-badge">🚀 Welcome to my Universe</div>
        <h1 className="hero-title">Gherbi Mohamed <br/> <span className="highlight-text">Cherif</span></h1>
        
        <h2 className="hero-subtitle">
          I am a <span className="typing-text">{text}</span><span className="cursor">|</span>
        </h2>
        
        <p className="hero-description">
          Bridging the gap between software engineering, audio data analysis, 
          and multimodal AI to build intelligent future systems.
        </p>
        
        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">View Projects</a>
          <a href="/Mohamed_Cherif_Gherbi_CV_Improved.docx" download className="cv-btn">📄 Download CV</a>
        </div>
      </div>

      {/* القسم الأيمن: الجانب البصري والتفاعلي */}
      <div className="hero-visual">
        <div className="image-wrapper">
          {/* سنضع مسار صورتك الحقيقية هنا لاحقاً */}
          <img src="..\public\74390e84-ee87-4bc6-b917-e34eacce65f3.jpg" alt="Mohamed Cherif" className="profile-img" />
          
          {/* دائرة تنبض خلف الصورة لتعطي إيحاء الذكاء الاصطناعي */}
          <div className="pulse-ring"></div>
        </div>

        {/* موجات صوتية مبرمجة بالـ CSS تعبر عن تخصصك في الـ Audio QA */}
        <div className="css-audio-waves">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

    </div>
  );
}

export default Hero;