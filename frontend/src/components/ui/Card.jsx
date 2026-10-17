import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// eslint-disable-next-line react/prop-types
const Card = ({ imageSrc, altText, index = 0 }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <motion.div
        className='mb-6 overflow-hidden border border-border bg-surface break-inside-avoid cursor-pointer'
        onClick={() => setSelectedImage(imageSrc)}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={(index % 6) * 0.08}
      >
        <img src={imageSrc} alt={altText} className='w-full h-auto object-cover' />
      </motion.div>

      {selectedImage && (
        <Modal
          imageSrc={selectedImage}
          altText={altText}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default Card;
