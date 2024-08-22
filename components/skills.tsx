'use client';

import { Frontend_skill, Other_skill } from '@/constants';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/lib/motion';
import { motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  return (
    <section className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20' style={{ transform: 'scale(0.9)' }}>
      <SkillText />
      <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>
      <div className='flex justify-around flex-wrap mt-4 gap-5 items-center'>
        {Other_skill.map((image, index) => (
          <SkillDataProvider key={index} src={image.Image} width={image.width} height={image.height} index={index} />
        ))}
      </div>

      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video className='w-full h-auto ' preload='false' playsInline loop muted src='/cards-video.webm' />
        </div>
      </div>
    </section>
  );
}

interface SkillDataProviderProps {
  src: string;
  width: number;
  height: number;
  index: number;
}

function SkillDataProvider({ src, width, height, index }: SkillDataProviderProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} width={width} height={height} alt='skill image' />
    </motion.div>
  );
}

function SkillText() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div className='Welcome-box py-[15px] px-[16px] border border-[#7042f88b] opacity-90 ' variants={slideInFromTop}>
        <SparklesIcon className='text-[#b49bff] mr-[10px] size-5' />
        <h1 className='Welcome-text text-[13px] text-white font-bungee'>Think better with Next.js 14</h1>
      </motion.div>
      <motion.div variants={slideInFromLeft(0.5)} className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>
        Making apps with moder technologies
      </motion.div>
      <motion.div variants={slideInFromRight(0.5)} className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>
        Never miss a task deadline or idea
      </motion.div>
    </div>
  );
}
