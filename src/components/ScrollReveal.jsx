import React, { useEffect, useRef, useState } from 'react';
import './ScrollReveal.css';

function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // إعداد المراقب (Observer) الذي يكتشف متى يظهر العنصر في الشاشة
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // بمجرد ظهوره، نلغي المراقبة لكي لا يختفي مجدداً عند الصعود
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15, // يظهر عندما يدخل 15% من القسم إلى الشاشة
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`reveal-container ${isVisible ? 'reveal-visible' : ''}`}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;