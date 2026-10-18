import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
  const [isPastThreshold, setIsPastThreshold] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // Show the button once the user has scrolled down a bit.
  useEffect(() => {
    const toggleVisibility = () => {
      setIsPastThreshold(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Hide the button as soon as the footer enters the viewport, so it
  // never sits on top of the footer's content (e.g. the social icons).
  useEffect(() => {
    const footer = document.getElementById('site-footer');
    if (!footer) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { rootMargin: '0px' },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isVisible = isPastThreshold && !isFooterVisible;

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
