"use client";

import React, { useEffect, useState } from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/utils/hooks';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

interface DataProps {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { ref, inView } = useInView();
  const { setActiveSection, timeLastClick } = useActiveSectionContext()

  const { register, reset, handleSubmit, formState, formState: { errors, isSubmitSuccessful, isLoading } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  useEffect(() => {
    if (inView && Date.now() - timeLastClick > 1000) {
      setActiveSection("Contact")
    }

  }, [inView, setActiveSection, timeLastClick])



  const onSubmit = async (data: DataProps) => {

    try {

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      if (res.ok) {
        reset({ name: '', email: '', message: '' })
        toast.success(response.message);
      }

     
      
      if (res.status == 400) {
        toast.error(response.message);
      }


    } catch (error) {
      reset({ name: '', email: '', message: '' })
      toast('Failed Get Response');
    }
  };


  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at{" "}
        <a href="mailto:muhamadzulfiqor77@gmail.com" className='underline'>
          muhamadzulfiqor77@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className='mt-10 flex flex-col' onSubmit={handleSubmit(onSubmit)}>
        <input type="text" id='name' className='h-14 px-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none mb-4 dark:text-black' placeholder='Your Name' {...register('name', { required: true })} maxLength={500} />
        {errors.name && <p className='text-red-400 mb-4 text-left text-base'>{errors.name.type}</p>}

        <input type="email" id='email' className='h-14 px-4 mb-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none dark:text-black' placeholder='Your Email' {...register('email', { required: true })} maxLength={500} />
        {errors.email && <p className='text-red-400 mb-4 text-left text-base'>{errors.email.type}</p>}
        <textarea id='message' className='h-52 my-3 rounded-lg borderBlack dark:text-black p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' placeholder='Your message' {...register('message', { required: true })} maxLength={500}></textarea>
        {errors.message && <p className='text-red-400 mb-4 text-left text-base'>{errors.message.type}</p>}

        <button type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-10 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10">
          Submit<FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  )
}
