import React, { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  // استخدام useRef للتحكم المباشر والسريع جداً بدون إعادة تحميل المكون
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // تحديث الموقع مباشرة في الـ DOM (سرعة فائقة)
    const updatePosition = (e) => {
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
        
        // إعطاء الهالة تأخيراً صغيراً جداً برمجياً لتتبع النقطة بنعومة
        setTimeout(() => {
          if (outlineRef.current) {
            outlineRef.current.style.left = `${e.clientX}px`;
            outlineRef.current.style.top = `${e.clientY}px`;
          }
        }, 50); // تأخير 50 جزء من الثانية فقط
      }
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className={`cursor-dot ${isHovering ? 'hovering' : ''}`}
      ></div>
      
      <div 
        ref={outlineRef}
        className={`cursor-outline ${isHovering ? 'hovering' : ''}`}
      ></div>
    </>
  );
}

export default CustomCursor;