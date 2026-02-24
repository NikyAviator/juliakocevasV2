import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';

// eslint-disable-next-line react/prop-types
const Modal = ({ imageSrc, altText, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} className='relative z-10'>
      {/* Blurry background (Click outside to close) */}
      <DialogBackdrop className='fixed inset-0 bg-black/30 backdrop-blur-sm' />

      <div className='fixed inset-0 z-10 flex items-center justify-center'>
        <DialogPanel className='relative bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-3xl'>
          {/* Close Button */}
          <button
            type='button'
            onClick={onClose}
            className='absolute top-2 right-2 bg-black text-white rounded-full p-2 hover:bg-gray-600'
          >
            X
          </button>

          {/* Enlarged Image */}
          <img
            src={imageSrc}
            alt={altText}
            className='w-full h-auto rounded-lg'
          />
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
