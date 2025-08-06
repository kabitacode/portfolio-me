"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/utils/hooks';
import { BorderBeam } from "@/components/magicui/border-beam";


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
      className="relative mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <BorderBeam size={250} duration={12} delay={9} />

      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I have experience building web and mobile applications from scratch using the latest technologies.
        My focus is on accelerating the development process while delivering clean design and a high-quality user experience.
      </p>
      <p className="mb-3">
        I believe strong client relationships are built on trust and the consistent delivery of quality work.
      </p>
      <p>
        My core stack is <span className="font-medium">React</span> & <span className="font-medium">React Native</span>, and I’m currently sharpening my skills in <span className="font-medium">Kotlin</span> and <span className="font-medium">SwiftUI</span>.
        I also have experience with hybrid frameworks like <span className="font-medium">Flutter</span>.
        I'm open to <span className="font-medium">full-time</span> or <span className="font-medium">remote</span> positions as a <span className="font-medium">Software Engineer</span>.
      </p>

    </motion.section>
  )
}
