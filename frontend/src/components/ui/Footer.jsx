const Footer = () => {
  return (
    <footer className='w-full border-t border-border bg-background'>
      <div className='mx-auto max-w-7xl px-6 py-12 sm:justify-center-safe md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex items-center gap-x-4 md:order-2'>
          {/* Text to the left of icons */}
          <p className='text-sm text-muted-foreground'>Follow Julia on social media:</p>

          {/* Social Media Icons */}
          <a
            href='https://www.instagram.com/juliakocevas'
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer text-muted-foreground transition-colors duration-300 hover:text-foreground'
          >
            <span className='sr-only'>Instagram</span>
            <img src='/svg/instagram.svg' alt='Instagram' className='w-6 h-6 invert' />
          </a>

          <a
            href='https://www.tiktok.com/@juliakocevas?_t=ZN-8uVb8GrSvsk&_r=1'
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer text-muted-foreground transition-colors duration-300 hover:text-foreground'
          >
            <span className='sr-only'>TikTok</span>
            <img src='/svg/tiktok.svg' alt='TikTok' className='w-6 h-6 invert' />
          </a>
        </div>

        {/* Copyright Text */}
        <p className='mt-8 text-left text-sm text-muted-foreground md:order-1 md:mt-0'>
          &copy; 2026 Made by: NikyAviator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
