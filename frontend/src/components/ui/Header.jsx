import { motion, useReducedMotion } from 'framer-motion';
import headerVideo from '/movie0000.mp4';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Header() {
  const reduceMotion = useReducedMotion();

  return (
    <div className='relative isolate flex min-h-screen items-center overflow-hidden bg-background'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 -z-10 size-full object-cover'
      >
        <source src={headerVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div aria-hidden='true' className='absolute inset-0 -z-10 bg-background/80' />

      <div className='mx-auto w-full max-w-7xl px-6 lg:px-8'>
        <motion.div
          className='mx-auto max-w-2xl lg:mx-0'
          initial={reduceMotion ? 'visible' : 'hidden'}
          animate='visible'
          variants={fadeUp}
        >
          <p className='font-sans text-xs tracking-[0.3em] text-muted-foreground uppercase'>
            Fine Art
          </p>
          <h1 className='mt-4 font-display text-6xl font-medium tracking-tight text-foreground sm:text-7xl'>
            Julia Kocevas
          </h1>
        </motion.div>
      </div>

      {/* Scroll cue */}
      {!reduceMotion && (
        <motion.div
          className='absolute inset-x-0 bottom-10 flex justify-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            className='flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5'
            aria-hidden='true'
          >
            <motion.span
              className='h-1.5 w-1.5 rounded-full bg-foreground'
              animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
