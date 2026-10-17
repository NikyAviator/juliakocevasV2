import { useState } from 'react';
import Card from '../ui/Card';
import Modal from '../ui/Modal';

// Define image sources (assuming they are in `/public/`)
const imageFiles = [
  '/0001.jpg',
  '/0002.jpg',
  '/0003.jpg',
  '/0004.jpg',
  '/0005.jpg',
  '/0006.jpg',
  '/0007.jpg',
  '/0008.jpg',
  '/0009.jpg',
  '/0010.jpg',
  '/0011.jpg',
  '/0012.jpg',
  '/0013.jpg',
  '/0014.jpg',
  '/0015.jpg',
  '/0016.jpg',
  '/0017.jpg',
  '/0018.jpg',
  '/0019.jpg',
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const isOpen = lightboxIndex !== null;
  const total = imageFiles.length;

  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i + 1) % total);
  const showPrev = () => setLightboxIndex((i) => (i - 1 + total) % total);

  return (
    <section className='bg-canvas py-24 px-6'>
      <h2 className='font-display text-center text-4xl text-ink mb-16'>
        Gallery
      </h2>
      <div className='mx-auto max-w-7xl columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4'>
        {imageFiles.map((image, index) => (
          <Card
            key={image}
            imageSrc={image}
            altText={`Image ${index + 1}`}
            index={index}
            onOpen={() => setLightboxIndex(index)}
          />
        ))}
      </div>

      {isOpen && (
        <Modal
          imageSrc={imageFiles[lightboxIndex]}
          altText={`Image ${lightboxIndex + 1}`}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </section>
  );
};

export default GallerySection;
