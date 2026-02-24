import { useState } from 'react';
import Modal from './Modal';

// eslint-disable-next-line react/prop-types
const Card = ({ imageSrc, altText }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Image Thumbnail (Click to Open Modal) */}
      <div
        className='rounded-lg overflow-hidden shadow-lg cursor-pointer'
        onClick={() => setSelectedImage(imageSrc)}
      >
        <img
          src={imageSrc}
          alt={altText}
          className='w-full h-64 object-cover'
        />
      </div>

      {/* Modal (Only Shows When an Image is Selected) */}
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
