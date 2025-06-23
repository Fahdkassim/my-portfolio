'use client';

export default function HeroSection() {
  return (
    <div className=''>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-1/2'>
          <div className='pt-14 lg:w-full lg:max-w-2xl'>
            <div className='px-6 py-32 sm:py-40 lg:px-8 lg:py-48 lg:pr-0'>
              <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
                <h1 className='animate-typing overflow-hidden whitespace-nowrap  text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
                  Hi, I'm Fahd
                </h1>
                <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl text-justify leading-loose'>
                  I'm a Software Engineer working as a frontend developer with
                  hands-on experience in building scalable UI component
                  libraries, integrating APIs, and collaborating with backend
                  teams. I’ve worked with technologies like Next.js, Storybook,
                  and Nx to create maintainable and efficient codebases focused
                  on performance and usability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 w-full'>
          <img
            alt='fahd'
            src='images/fahd.webp'
            className='object-cover mx-auto overflow-hidden lg:clip-path-slant-left'
            height='600'
            width='800'
          />
        </div>
      </div>
    </div>
  );
}
