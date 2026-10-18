import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  });

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        aria-label='Scroll to top'
        className='fixed bottom-8 right-8 z-20 cursor-pointer rounded-full bg-accent p-3 text-on-accent shadow-lg transition-colors duration-300 hover:bg-foreground'
      >
        <ChevronUpIcon className='h-6 w-6' />
      </button>
    )
  );
};

export default ScrollToTopButton;
