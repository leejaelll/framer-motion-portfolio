'use client';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '@/lib/motion';
import { SparklesIcon } from 'lucide-react';

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className='flex flex-col gap-20 h-[850px]'>
        {/* hero section */}
        <div className='relative flex flex-col h-full w-full'>
          <video autoPlay muted loop className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'>
            <source src='/blackhole.webm' type='video/webm' />
          </video>
          {/* hero content section */}
          <motion.div initial='hidden' animate='visible' className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
              <motion.div className='Welcome-box py-[15px] px-[4px] border border-[#7042f88b] opacity-90' variants={slideInFromTop}>
                <SparklesIcon className='text-[#b49bff] mr-[10px] size-5' />
                <h1 className='Welcome-text text-[13px] text-white'>Frontend Developer Portfolio</h1>
              </motion.div>
              <motion.div
                variants={slideInFromLeft(0.5)}
                className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto font-bungee'
              >
                Providing
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>the best</span>
                project expreience
              </motion.div>
              <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'></motion.p>
            </div>
          </motion.div>
        </div>
        {/* hero section end */}
      </div>
    </main>
  );
}
