const Card = ({ imageSrc, altText }) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-lg'>
      <img src={imageSrc} alt={altText} className='w-full h-64 object-cover' />
    </div>
  );
};

export default Card;
