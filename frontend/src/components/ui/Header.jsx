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
          <h2 className='text-5xl font-semibold tracking-tight text-white sm:text-7xl'>
            Welcome
          </h2>
          <p className='mt-8 text-lg font-medium text-gray-300 sm:text-xl/8'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
      </div>
    </div>
  );
}
