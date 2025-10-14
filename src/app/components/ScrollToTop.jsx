'use client';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 right-4 z-50 p-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-cyan-500/50 animate-bounce cursor-pointer"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={15} />
        </button>
      )}
    </>
  );
}