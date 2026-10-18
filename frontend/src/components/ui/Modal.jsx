import { useEffect, useRef } from 'react';
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const SWIPE_THRESHOLD = 50; // px

// eslint-disable-next-line react/prop-types
const Modal = ({ imageSrc, altText, onClose, onNext, onPrev }) => {
  const touchStartX = useRef(null);

  // Keyboard navigation: Left/Right to switch images, Escape is already
  // handled by headlessui's Dialog onClose.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') onNext?.();
      if (event.key === 'ArrowLeft') onPrev?.();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD) onPrev?.();
    else if (deltaX < -SWIPE_THRESHOLD) onNext?.();
    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      <Dialog static open={true} onClose={onClose} className='relative z-10'>
        {/* Blurry background (Click outside to close) */}
        <DialogBackdrop>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-0 bg-background/80 backdrop-blur-sm'
          />
        </DialogBackdrop>

        <div
          className='fixed inset-0 z-10 flex items-center justify-center p-4'
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <DialogPanel className='relative w-full max-w-3xl'>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className='relative w-full border border-border bg-card p-6 shadow-lg'
            >
              {/* Close Button */}
              <button
                type='button'
                onClick={onClose}
                aria-label='Close'
                className='absolute top-2 right-2 cursor-pointer rounded-full bg-accent p-2 text-on-accent transition-colors duration-300 hover:bg-foreground'
              >
                <XMarkIcon className='h-5 w-5' />
              </button>

              {/* Previous arrow */}
              {onPrev && (
                <button
                  type='button'
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  aria-label='Previous image'
                  className='absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-background/70 p-2 text-foreground transition-colors duration-300 hover:bg-background'
                >
                  <ChevronLeftIcon className='h-5 w-5' />
                </button>
              )}

              {/* Next arrow */}
              {onNext && (
                <button
                  type='button'
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  aria-label='Next image'
                  className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-background/70 p-2 text-foreground transition-colors duration-300 hover:bg-background'
                >
                  <ChevronRightIcon className='h-5 w-5' />
                </button>
              )}

              {/* Enlarged Image */}
              <img
                src={imageSrc}
                alt={altText}
                className='w-full h-auto select-none'
                draggable={false}
              />
            </motion.div>
          </DialogPanel>
        </div>
      </Dialog>
    </AnimatePresence>
  );
};

export default Modal;
