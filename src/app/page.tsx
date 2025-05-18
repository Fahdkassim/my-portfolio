import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <>
      <div className=' text-green-500'>
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
      </div>
    </>
  );
}
