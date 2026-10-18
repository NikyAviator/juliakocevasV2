import { motion, useReducedMotion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 64 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

// Alternate image sizes/offsets so the chapter doesn't read as a generic grid.
const layoutForIndex = (index) => {
  const pattern = index % 3;
  if (pattern === 0) return 'md:col-span-7';
  if (pattern === 1) return 'md:col-span-5 md:col-start-8 md:mt-24';
  return 'md:col-span-6 md:col-start-4';
};

// eslint-disable-next-line react/prop-types
const ChapterSection = ({ title, images, startIndex, onOpen }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section className='bg-background px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl'>
        <motion.h2
          className='mb-16 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl'
          initial={reduceMotion ? 'visible' : 'hidden'}
          whileInView='visible'
          viewport={{ once: true, amount: 0.6 }}
          variants={reveal}
          custom={0}
        >
          {title}
        </motion.h2>

        <div className='grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-6'>
          {images.map((image, i) => (
            <motion.div
              key={image}
              className={`cursor-pointer overflow-hidden border border-border bg-card ${layoutForIndex(i)}`}
              onClick={() => onOpen(startIndex + i)}
              initial={reduceMotion ? 'visible' : 'hidden'}
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={reveal}
              custom={i * 0.12}
            >
              <img
                src={image}
                alt={`${title} study`}
                className='h-auto w-full object-cover transition-transform duration-500 hover:scale-105'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChapterSection;
