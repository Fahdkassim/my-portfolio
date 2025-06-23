import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <div>
        <section>
          <Navbar />
        </section>
        <section id='home'>
          <HeroSection />
        </section>
        <section id='about' className='mt-24 scroll-mt-20'>
          <AboutSection />
        </section>
        <section id='skills' className='mt-24 scroll-mt-20'>
          <Skills />
        </section>
        {/* <section id='projects' className='mt-24 scroll-mt-20'>
          <Projects />
        </section> */}
      </div>
    </>
  );
}
