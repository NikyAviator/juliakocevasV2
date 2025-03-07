'use client';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Modal = ({ imageSrc, altText, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose} className='relative z-10'>
      {/* Dark Background (Click outside to close) */}
      <DialogBackdrop className='fixed inset-0 bg-black bg-opacity-50' />

      <div className='fixed inset-0 z-10 flex items-center justify-center'>
        <DialogPanel className='relative bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl'>
          {/* Close Button */}
          <button
            type='button'
            onClick={onClose}
            className='absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600'
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
