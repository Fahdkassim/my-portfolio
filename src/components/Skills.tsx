import React from 'react';

const Skills = () => {
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
      <p className='text-2xl font-bold text-black mt-8'>💻 Technical Skills</p>
      <div>
        <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
          <p className='text-xl font-bold text-black my-4'>
            Languages & Markup
          </p>
          <ul className='list-disc pl-5 space-y-1'>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
          <p className='text-xl font-bold text-black my-4'>
            Frameworks & Libraries
          </p>
          <ul className='list-disc pl-5 space-y-1'>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Redux</li>
            <li>Storybook</li>
            <li>React Hook Form / Formik</li>
          </ul>
        </div>
        <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
          <p className='text-xl font-bold text-black my-4'>Tools & Platforms</p>
          <ul className='list-disc pl-5 space-y-1'>
            <li>Git / GitHub</li>
            <li>NX (monorepo architecture)</li>
            <li>Firebase</li>
            <li>Vercel</li>
            <li>Postman</li>
            <li>VS Code</li>
          </ul>
        </div>
        <div className='mt-8 text-pretty text-xl font-medium text-gray-500 lg:text-justify'>
          <p className='text-xl font-bold text-black my-4'>Other</p>
          <ul className='list-disc pl-5 space-y-1'>
            <li>Component Design & UI/UX Principles</li>
            <li>API Integration & Testing</li>
            <li>Agile Workflow Experience</li>
            <li>Accessibility</li>
            <li>Performance Optimization</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
