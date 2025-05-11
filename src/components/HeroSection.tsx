'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Skills', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <div className='mx-auto fixed bg-white lg:bg-transparent w-full'>
          <div className='px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0 pb-4'>
            <nav
              aria-label='Global'
              className='flex items-center justify-between lg:justify-start'
            >
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Home</span>
                <img
                  alt='Fahd'
                  src='images/fahd.png'
                  className='h-8 w-auto rounded-full'
                />
              </a>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(true)}
                className='-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden'
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon aria-hidden='true' className='size-6' />
              </button>
              <div className='hidden lg:ml-12 lg:flex lg:gap-x-14'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='text-sm/6 font-semibold text-gray-900'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className='lg:hidden'
        >
          <div className='fixed inset-0 z-50' />
          <DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Home</span>
                <img
                  alt=''
                  src='/images/fahd.png'
                  className='h-8 w-auto rounded-full'
                />
              </a>
              <button
                type='button'
                onClick={() => setMobileMenuOpen(false)}
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon aria-hidden='true' className='size-6' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className='relative'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative z-10 pt-14 lg:w-full lg:max-w-2xl'>
            <svg
              viewBox='0 0 100 100'
              preserveAspectRatio='none'
              aria-hidden='true'
              className='absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block'
            >
              <polygon points='0,0 90,0 50,100 0,100' />
            </svg>

            <div className='relative px-6 py-32 sm:py-40 lg:px-8 lg:py-48 lg:pr-0'>
              <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-xl'>
                <h1 className='animate-typing overflow-hidden whitespace-nowrap  text-pretty text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl'>
                  Hi, I'm Fahd
                </h1>
                <p className='mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8'>
                  I'm a frontend developer with hands-on experience in building
                  scalable UI component libraries, integrating APIs, and
                  collaborating with backend teams. I’ve worked with
                  technologies like Next.js, Storybook, and Nx to create
                  maintainable and efficient codebases focused on performance
                  and usability.
                </p>
                <div className='mt-10'>
                  <a href='#' className='text-sm/6 font-semibold text-gray-900'>
                    Learn more <span aria-hidden='true'>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
          <img
            alt=''
            src='images/fahd.png'
            className=' object-cover lg:size-full'
          />
        </div>
      </div>
    </div>
  );
}
