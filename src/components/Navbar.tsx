'use client';
import React from 'react';
import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  // { name: 'Projects', href: '#projects' },
  // { name: 'Blogs', href: '#' },
  // { name: 'Contact', href: '#' },
];
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className=''>
      <header className='fixed w-full bg-white z-50'>
        <div className='absolute mx-auto bg-white w-full'>
          <div className='px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0 pb-4'>
            <nav
              aria-label='Global'
              className='flex items-center justify-between lg:justify-start'
            >
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Home</span>
                <img
                  alt='Fahd'
                  src='images/fahd.webp'
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
                      onClick={() => setMobileMenuOpen(false)}
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
    </div>
  );
};

export default Navbar;
