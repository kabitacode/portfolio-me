"use client";

import Image from 'next/image';
import React from 'react';
import profile from "@/public/profile.jpg";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineArrowRight, AiOutlineCloudDownload, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
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
              src={profile}
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

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='relative mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className='font-bold'>Hello, I'm Muhamad Zulfiqor.</span> I'm a{" "}
        <span className='font-bold'>Front End Developer</span> with{" "}
        <span className='font-bold'>3 years</span> of experience. I enjoy
        building <span className='italic'>sites & apps</span>. My Focus is{" "}
        <span className='underline'>React Native</span>.

      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
        className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
        <Link href={'#contact'} className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>Contact me here <AiOutlineArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
        <a download={true} href='/public/CV - Muhamad Zulfiqor.pdf' className='bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 group active:scale-105 transition cursor-pointer border border-black/10'>Download CV <AiOutlineCloudDownload className='opacity-60 group-hover:translate-y-1 cursor-pointer'/></a>
        <a className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full border border-black/10'><AiFillLinkedin /></a>
        <a className='bg-white p-4 flex text-gray-700 items-center gap-2 text-[1.35rem] rounded-full border border-black/10'><AiFillGithub /></a>
      </motion.div>
    </section>
  )
}
