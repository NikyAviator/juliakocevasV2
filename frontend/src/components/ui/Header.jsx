import headerVideo from '/movie0000.mp4';

export default function Header() {
  return (
    <div className='relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32'>
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

      {/* Blurred Overlay */}
      <div aria-hidden='true' className='absolute inset-0 -z-10 bg-black/40' />

      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h2 className='text-5xl font-lobster tracking-tight text-white sm:text-7xl'>
            Welcome
          </h2>
        </div>
      </div>
    </div>
  );
}
