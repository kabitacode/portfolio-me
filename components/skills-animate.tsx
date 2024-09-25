"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { SiAndroidstudio, SiFigma, SiFlutter, SiGit, SiNextdotjs, SiReact, SiRedux, SiTypescript, SiXcode } from 'react-icons/si';
import Link from 'next/link';
import { useActiveSectionContext, useIsMedium, useIsSmall } from '@/utils/hooks';
import OrbitingCircles from "@/components/magicui/orbiting-circles";


export default function Skils() {
    const { ref, inView } = useInView();
    const { setActiveSection, timeLastClick } = useActiveSectionContext()
    const isSmall = useIsSmall();
    const isMedium = useIsMedium();

    useEffect(() => {
        if (inView && Date.now() - timeLastClick > 1000) {
            setActiveSection("Skills")
        }
    }, [inView, setActiveSection, timeLastClick])

    const getSize = () => isSmall ? 50 : 30

    return (
        <section
            ref={ref}
            className="relative max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id="skills"
        >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Skills
            </span>

            <OrbitingCircles
                 className="size-[30px] border-none bg-transparent"
                 duration={10}
                 delay={10}
                 radius={20}
            >
                <div className="bg-white dark:bg-red-500 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300">
                    <IoLogoHtml5 size={getSize()} />
                </div>
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={80}
            >
                <div className="bg-white w-16 h-16 dark:bg-blue-500 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                    <IoLogoCss3 size={getSize()} />
                </div>
            </OrbitingCircles>

            {/* Outer Circles (reverse) */}
            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                reverse
            >
                <div className="bg-white dark:bg-yellow-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-300">
                    <IoLogoJavascript size={getSize()} />
                </div>
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={200}
            >
                <div className="bg-white dark:bg-indigo-300 w-16 h-16 flex py-2 md:p-4 mb-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
                    <SiTypescript size={getSize()} />
                </div>
            </OrbitingCircles>

            <OrbitingCircles
                className="size-[50px] border-none bg-transparent"
                radius={190}
                duration={20}
                delay={20}

            >
                <div className="bg-white dark:bg-indigo-400 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
                    <SiRedux size={getSize()} />
                </div>
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={20}
                delay={10}
                radius={250}

            >
                <div className="bg-white dark:bg-blue-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                    <SiReact size={getSize()} />
                </div>
            </OrbitingCircles>
            <OrbitingCircles
                className="size-[30px] border-none bg-transparent"
                duration={8}
                delay={2}
                radius={140}
            >
                <div className="bg-white dark:bg-blue-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                    <SiNextdotjs size={getSize()} />
                </div>
            </OrbitingCircles>
        </section>
    )
}

