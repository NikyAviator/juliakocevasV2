import Card from '../ui/Card';

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
  return (
    <section className='py-12 px-6 bg-gradient-to-b from-gray-500 to-gray-800'>
      <h2 className='text-4xl font-lobster font-bold text-center mb-8'>
        Gallery
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {imageFiles.map((image, index) => (
          <Card key={index} imageSrc={image} altText={`Image ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
