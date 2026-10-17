const Footer = () => {
  return (
    <footer className='absolute w-full border-t border-border bg-canvas'>
      <div className='mx-auto max-w-7xl px-6 py-12 sm:justify-center-safe md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex items-center gap-x-4 md:order-2'>
          {/* Text to the left of icons */}
          <p className='text-sm text-ink-muted'>Follow Julia on social media:</p>

          {/* Social Media Icons */}
          <a
            href='https://www.instagram.com/juliakocevas'
            target='_blank'
            rel='noopener noreferrer'
            className='text-ink-muted hover:text-accent'
          >
            <span className='sr-only'>Instagram</span>
            <img src='/svg/instagram.svg' alt='Instagram' className='w-6 h-6' />
          </a>

          <a
            href='https://www.tiktok.com/@juliakocevas?_t=ZN-8uVb8GrSvsk&_r=1'
            target='_blank'
            rel='noopener noreferrer'
            className='text-ink-muted hover:text-accent'
          >
            <span className='sr-only'>TikTok</span>
            <img src='/svg/tiktok.svg' alt='TikTok' className='w-6 h-6' />
          </a>
        </div>

        {/* Copyright Text */}
        <p className='mt-8 text-left text-sm text-ink-muted md:order-1 md:mt-0'>
          &copy; 2026 Made by: NikyAviator. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
