"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import useActiveSectionContext from '@/utils/hooks/useActiveSectionContext';
import { skillsData } from '@/lib/data';
import { IoIosAdd, IoLogoCss3, IoLogoHtml5, IoLogoJavascript, IoMdContacts } from 'react-icons/io';
import { SiFlutter, SiReact, SiRedux, SiTypescript } from 'react-icons/si';
import { useIsSmall } from '@/utils/hooks/useMediaQuery';
import Link from 'next/link';


export default function Skils() {
    const { ref, inView } = useInView();
    const { setActiveSection, timeLastClick } = useActiveSectionContext()
    const isSmall = useIsSmall();

    useEffect(() => {
        if (inView && Date.now() - timeLastClick > 1000) {
            setActiveSection("Skills")
        }
    }, [inView, setActiveSection, timeLastClick])

    const getSize = () => isSmall ? 40 : 30

    return (
        <section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id="skills"
        >
            <SectionHeading>My Skills</SectionHeading>

            <div className="flex md:flex-row flex-col flex-wrap items-center">
                <div className="bg-white w-16 h-16 flex py-2 md:p-4 mb-4 md:m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300">
                    <IoLogoHtml5 size={getSize()} />
                </div>
                <div className="bg-white w-16 h-16 flex py-2 md:p-4 mb-4 md:m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                    <IoLogoCss3 size={getSize()} />
                </div>
                <div className="bg-white w-16 h-16 flex py-2 md:p-4 mb-4 md:m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-300">
                    <IoLogoJavascript size={getSize()} />
                </div>
                <Link href='https://www.typescriptlang.org/' target='_blank'>
                    <div className="bg-white w-16 h-16 flex py-2 md:p-4 mb-4 md:m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
                        <SiTypescript size={getSize()} />
                    </div>
                </Link>
                <Link href={'https://redux.js.org/'} target='_blank'>
                    <div className="bg-white w-16 h-16 flex py-2 md:p-4 mb-4 md:m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
                        <SiRedux size={getSize()} />
                    </div>
                </Link>
                <Link href={'https://reactnative.dev'} target='_blank'>
                    <div className="bg-white w-16 h-16 flex py-2 md:p-4 mb-4 md:m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                        <SiReact size={getSize()} />
                    </div>
                </Link>
                <Link href={'https://flutter.dev/'} target='_blank'>
                    <div className="bg-white w-16 h-16 flex py-2 md:p-4 md:m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
                        <SiFlutter size={getSize()} />
                    </div>
                </Link>

            </div>

        </section>
    )
}
