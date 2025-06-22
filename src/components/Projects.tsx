import React from 'react';

const Projects = () => {
  return (
    <div className='mx-6 mt-4'>
      <p className='text-4xl font-bold text-black'>My Projects</p>
      <p className='text-2xl font-bold text-black mt-8'>Open Source</p>
      <div className='flex'>
        <div className='mr-4 shrink-0'>
          <svg
            fill='none'
            stroke='currentColor'
            viewBox='0 0 200 200'
            preserveAspectRatio='none'
            aria-hidden='true'
            className='size-16 border border-gray-300 bg-white text-gray-300'
          >
            <path
              d='M0 0l200 200M0 200L200 0'
              strokeWidth={1}
              vectorEffect='non-scaling-stroke'
            />
          </svg>
        </div>
        <div>
          <h4 className='text-lg font-bold'>Lorem ipsum</h4>
          <p className='mt-1'>
            Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam
            expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
