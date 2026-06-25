import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // دالة لمراقبة التمرير وإظهار/إخفاء الزر
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // دالة الصعود السلس للأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    // تنظيف الحدث عند الخروج من المكون
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-btn" title="Go to top">
          ↑
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;