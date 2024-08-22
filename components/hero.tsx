import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/lib/motion';
import { SparklesIcon } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <Image
        src={'/blackhole.gif'}
        alt='blackhole'
        width={500}
        height={500}
        className='rotate-180 w-full absolute object-cover z-[1] right-0 top-[-80px] sm:top-[-320px]'
      />

      <motion.div
        initial='hidden'
        animate='visible'
        className='flex flex-col lg:flex-row items-center justify-center md:px-20 mt-24 lg:mt-40 z-[20] gap-4'
      >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
          <motion.div className='Welcome-box py-[15px] px-[16px] border border-[#7042f88b] opacity-90 ' variants={slideInFromTop}>
            <SparklesIcon className='text-[#b49bff] mr-[10px] size-5' />

            <h1 className='Welcome-text text-[13px] text-white font-bungee'>Frontend Developer Portfolio</h1>
            <SparklesIcon className='text-[#b49bff] ml-[10px] size-5' />
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-2 lg:gap-6 mt-6 text-5xl lg:text-6xl text-bold text-white max-w-[600px] w-auto h-auto font-bungee'
          >
            Providing
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>the best</span>
            project expreience
          </motion.div>
          <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
            {`I'm a Frontend Software Engineer with experience in Website, Mobile, and Software development.
                  Check out my projects and skills.`}
          </motion.p>
          <motion.a variants={slideInFromLeft(1)} className='py-2 button-primary text-center text-white rounded-lg max-w-[200px]'>
            Learn More!
          </motion.a>
        </div>
        <motion.div variants={slideInFromRight(0.8)} className='w-full h-full flex justify-center items-center'>
          <Image src='/mainIconsdark.svg' alt='work icons' height={650} width={650} />
        </motion.div>
      </motion.div>
    </div>
  );
}
