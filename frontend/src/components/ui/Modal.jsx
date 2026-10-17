import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const Modal = ({ imageSrc, altText, onClose }) => {
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
            className='fixed inset-0 bg-ink/40 backdrop-blur-sm'
          />
        </DialogBackdrop>

        <div className='fixed inset-0 z-10 flex items-center justify-center p-4'>
          <DialogPanel className='relative w-full max-w-3xl'>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className='relative w-full border border-border bg-surface p-6 shadow-lg'
            >
              {/* Close Button */}
              <button
                type='button'
                onClick={onClose}
                className='absolute top-2 right-2 rounded-full bg-ink p-2 text-surface hover:bg-ink-muted'
              >
                X
              </button>

              {/* Enlarged Image */}
              <img
                src={imageSrc}
                alt={altText}
                className='w-full h-auto'
              />
            </motion.div>
          </DialogPanel>
        </div>
      </Dialog>
    </AnimatePresence>
  );
};

export default Modal;
