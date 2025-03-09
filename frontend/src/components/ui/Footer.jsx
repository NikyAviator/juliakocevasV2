const Footer = () => {
  return (
    <footer className='bg-gray-900 absolute w-full'>
      <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center gap-x-6 md:order-2'>
          <a
            href='https://www.instagram.com/juliakocevas'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-gray-300'
          >
            <span className='sr-only'>Instagram</span>

            <img src='/svg/instagram.svg' alt='TikTok' className='w-6 h-6' />
          </a>
          <a
            href='https://www.tiktok.com/@juliakocevas?_t=ZN-8uVb8GrSvsk&_r=1'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-400 hover:text-gray-300'
          >
            <span className='sr-only'>TikTok</span>
            <img src='/svg/tiktok.svg' alt='TikTok' className='w-6 h-6' />
          </a>
        </div>
        <p className='mt-8 text-center text-sm/6 text-gray-400 md:order-1 md:mt-0'>
          &copy; 2025 NikyAviator, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
