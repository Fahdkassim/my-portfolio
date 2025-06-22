import React from 'react';

const Skills = () => {
  const techLanguages = ['TypeScript', 'JavaScript', 'HTML', 'CSS'];
  const frontendTools = [
    'React.js',
    'Next.js',
    'Tailwind CSS',
    'Redux',
    'Storybook',
    'React Hook Form / Formik',
  ];
  const devTools = [
    'Git / GitHub',
    'NX (monorepo architecture)',
    'Firebase',
    'Vercel',
    'Postman',
    'VS Code',
  ];
  const devSkills = [
    'Component Design & UI/UX Principles',
    'API Integration & Testing',
    'Agile Workflow Experience',
    'Accessibility',
    'Performance Optimization',
  ];
  return (
    <div className='mx-6 mt-4'>
      <p className='text-4xl font-bold text-black'>My Skills</p>
      <p className='text-2xl font-bold text-black mt-8'>Soft Skills</p>
      <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
        <ul className='list-disc pl-5 space-y-2'>
          <li>
            <span className='font-semibold'>Effective Communication</span> –
            Clear, confident, and empathetic in teamwork
          </li>
          <li>
            <span className='font-semibold'>Detail-Oriented</span> –
            Perfectionist mindset, focused on high-quality results
          </li>
          <li>
            <span className='font-semibold'>Problem Solving</span> – Enjoy
            fixing things, figuring out technical and practical issues
          </li>
          <li>
            <span className='font-semibold'>Adaptability</span> – Successfully
            transitioned careers through learning and persistence
          </li>
          <li>
            <span className='font-semibold'>Strong Planning</span> – Organized,
            structured, and hate working in chaos
          </li>
          <li>
            <span className='font-semibold'>Philosophical Thinking</span> – Deep
            thinker with a reflective mindset
          </li>
          <li>
            <span className='font-semibold'>Team Collaboration</span> – Enjoy
            helping others and working together
          </li>
          <li>
            <span className='font-semibold'>Motivated & Reliable</span> –
            Committed, hardworking, and always aiming to improve
          </li>
          <li>
            <span className='font-semibold'>Multilingual</span> – Fluent in
            English, Arabic, and Urdu – connects easily across cultures
          </li>
          <li>
            <span className='font-semibold'>Fun-Loving</span> – Brings energy
            and good humor to any team
          </li>
        </ul>
      </div>
      <div>
        <p className='text-2xl font-bold text-black mt-8'>
          💻 Technical Skills
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8'>
          <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
            <p className='text-xl font-bold text-black my-4'>
              Languages & Markup
            </p>
            <ul className='pl-2 space-y-1 disc'>
              {techLanguages.map((lang, index) => (
                <li key={index} className='my-2'>
                  <div className='inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20'>
                    {lang}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
            <p className='text-xl font-bold text-black my-4'>
              Frameworks & Libraries
            </p>
            <ul className='pl-2 space-y-1 disc'>
              {frontendTools.map((lang, index) => (
                <li key={index} className='my-2'>
                  <div className='inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20'>
                    {lang}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
            <p className='text-xl font-bold text-black my-4'>
              Tools & Platforms
            </p>
            <ul className='pl-2 space-y-1 disc'>
              {devTools.map((lang, index) => (
                <li key={index} className='my-2'>
                  <div className='inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20'>
                    {lang}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
            <p className='text-xl font-bold text-black my-4'>Other</p>
            <ul className='pl-2 space-y-1 disc'>
              {devSkills.map((lang, index) => (
                <li key={index} className='my-2'>
                  <div className='inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20'>
                    {lang}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className='text-2xl font-bold text-black mt-8'>Badges</p>
        <div className='flex flex-col'>
          <img
            alt='github-badge'
            src='https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png'
            className=' ml-4 mt-4'
            height='100'
            width='100'
          />
          <p className='hover:text-blue-400'>
            <a
              href='https://github.com/users/Fahdkassim/achievements/pull-shark'
              target='_blank'
            >
              Github - Pull Shark
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
