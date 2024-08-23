'use client';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col lg:gap-20'>
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
