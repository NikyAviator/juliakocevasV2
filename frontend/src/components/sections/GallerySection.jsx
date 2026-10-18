import { useState } from 'react';
import Card from '../ui/Card';
import Modal from '../ui/Modal';
import ChapterSection from './ChapterSection';
import { chapters, allImages } from '../../data/chapters';

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const isOpen = lightboxIndex !== null;
  const total = allImages.length;

  const closeLightbox = () => setLightboxIndex(null);
  const showNext = () => setLightboxIndex((i) => (i + 1) % total);
  const showPrev = () => setLightboxIndex((i) => (i - 1 + total) % total);

  let runningIndex = 0;

  return (
    <>
      {chapters.map((chapter) => {
        const startIndex = runningIndex;
        runningIndex += chapter.images.length;
        return (
          <ChapterSection
            key={chapter.title}
            title={chapter.title}
            images={chapter.images}
            startIndex={startIndex}
            onOpen={setLightboxIndex}
          />
        );
      })}

      <section className='bg-background px-6 py-24'>
        <h2 className='mb-16 text-center font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl'>
          Full Gallery
        </h2>
        <div className='mx-auto max-w-7xl columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4'>
          {allImages.map((image, index) => (
            <Card
              key={image}
              imageSrc={image}
              altText={`Image ${index + 1}`}
              index={index}
              onOpen={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </section>

      {isOpen && (
        <Modal
          imageSrc={allImages[lightboxIndex]}
          altText={`Image ${lightboxIndex + 1}`}
          onClose={closeLightbox}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </>
  );
};

export default GallerySection;
