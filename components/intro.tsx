"use client";

import Image from 'next/image';
import React, { useEffect } from 'react';
import me from "@/public/me.jpeg";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineCloudDownload, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/utils/hooks';

export default function Intro() {

  const { ref, inView } = useInView();
  const { setActiveSection, timeLastClick, setTimeLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeLastClick > 1000) {
      setActiveSection("Home")
    }
  }, [inView, setActiveSection, timeLastClick])

  return (
    <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0'>
      <div className="flex items-center justify-center">
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2
            }}
          >
            <Image
              alt='me'
              src={me}
              width='200'
              height='200'
              quality={'95'}
              priority
              className=' h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.7,
              stiffness: 125,
              delay: 0.1
            }}
            className='absolute text-4xl bottom-0 right-0'>
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className='font-bold'>Hello, I'm Muhamad Zulfiqor.</span> I'm a{" "}
        <span className='font-bold'>Front End Developer</span> with{" "}
        <span className='font-bold'>3 years</span> of experience. I enjoy
        building <span className='italic'>web & apps</span>. My Focus is{" "}
        <span className='underline'>React Native</span>.

      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
        <Link href={'#contact'} onClick={() => {
          setActiveSection("Contact");
          setTimeLastClick(Date.now());
        }} className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me here <AiOutlineArrowRight className='opacity-70 group-hover:translate-x-1 transition' /></Link>
        <Link href={`${process.env.MY_CV}`} target='_blank'><p className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 group active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10'>Download CV <AiOutlineCloudDownload className='opacity-60 group-hover:translate-y-1 cursor-pointer' /></p></Link>
        <div className='flex sm:flex-row flex-wrap sm:mt-0  mt-3'>
          <a className='bg-white p-4 flex text-gray-700 mr-1 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] group active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60' href={`${process.env.LINKEDIN}`} target='_blank'><AiFillLinkedin /></a>
          <a className='bg-white p-4 flex text-gray-700 items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] group active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950 dark:bg-white/10 dark:text-white/60' href={`${process.env.GITHUB}`} target='_blank'><AiFillGithub /></a>
        </div>
      </motion.div>
    </section>
  )
}
