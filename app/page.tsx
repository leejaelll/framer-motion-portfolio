'use client';

import Hero from '@/components/hero';
import StarCanvas from '@/components/star-canvas';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20 h-[850px]'>
        <Hero />
        <StarCanvas />
      </div>
    </main>
  );
}
