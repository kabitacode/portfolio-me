"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/utils/hooks';


export default function About() {
  const { ref, inView } = useInView();
  const { setActiveSection, timeLastClick } = useActiveSectionContext()

  useEffect(() => {
    if (inView && Date.now() - timeLastClick > 1000) {
      setActiveSection("About")
    }
  }, [inView, setActiveSection, timeLastClick])

  
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I have the experience to create a Web & Mobile Apps Template from scratch and use the latest technology.
        which will accelerate the development process, with the best design. to produce a responsive, high-quality, and great user experience.
        Use I believe that good relationships with customers and my relationships are based on quality work.
      </p>
      <p>
        My core stack is{" "}
        <span className="font-medium">
          React Native
        </span> My core stack is React Native. I am always looking to learn new technologies, like Flutter & SwiftUI. I am currently looking for a{" "}
        <span className="font-medium">full-time</span> or <span className="font-medium">remote</span> <span className="font-medium">position</span> as a software
        developer.
      </p>
    </motion.section>
  )
}
