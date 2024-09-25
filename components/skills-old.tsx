"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from 'react-icons/io';
import { SiAndroidstudio, SiFigma, SiFlutter, SiGit, SiNextdotjs, SiReact, SiRedux, SiTypescript, SiXcode } from 'react-icons/si';
import Link from 'next/link';
import { useActiveSectionContext, useIsMedium, useIsSmall } from '@/utils/hooks';


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
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id="skills"
        >
            <SectionHeading>My Skills</SectionHeading>

            <div className="flex md:flex-row flex-wrap md:items-center">
                <div className="bg-white dark:bg-red-500 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-400 duration-300">
                    <IoLogoHtml5 size={getSize()} />
                </div>
                <div className="bg-white w-16 h-16 dark:bg-blue-500 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                    <IoLogoCss3 size={getSize()} />
                </div>
                <div className="bg-white dark:bg-yellow-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-300 duration-300">
                    <IoLogoJavascript size={getSize()} />
                </div>
                <Link href='https://www.typescriptlang.org/' target='_blank'>
                    <div className="bg-white dark:bg-indigo-300 w-16 h-16 flex py-2 md:p-4 mb-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
                        <SiTypescript size={getSize()} />
                    </div>
                </Link>
            </div>
            <div className="flex md:flex-row flex-wrap md:items-center">

                <Link href={'https://redux.js.org/'} target='_blank'>
                    <div className="bg-white dark:bg-indigo-400 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 duration-300">
                        <SiRedux size={getSize()} />
                    </div>
                </Link>
                <Link href={'https://reactnative.dev'} target='_blank'>
                    <div className="bg-white dark:bg-blue-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                        <SiReact size={getSize()} />
                    </div>
                </Link>
                <Link href={'https://nextjs.org/'} target='_blank'>
                    <div className="bg-white dark:bg-blue-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                        <SiNextdotjs size={getSize()} />
                    </div>
                </Link>
            </div>
            <div className="flex md:flex-row flex-wrap md:items-center">
                <Link href={' https://www.figma.com/'} target='_blank'>
                    <div className="bg-white dark:bg-blue-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                        <SiFigma size={getSize()} />
                    </div>
                </Link>
                <Link href={'https://git-scm.com/'} target='_blank'>
                    <div className="bg-white dark:bg-blue-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                        <SiGit size={getSize()} />
                    </div>
                </Link>
                <Link href={'https://developer.android.com/'} target='_blank'>
                    <div className="bg-white dark:bg-blue-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                        <SiAndroidstudio size={getSize()} />
                    </div>
                </Link>
                <Link href={'https://developer.apple.com/xcode/'} target='_blank'>
                    <div className="bg-white dark:bg-blue-300 w-16 h-16 flex py-2 md:p-4 m-2 rounded-full shadow-md items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 duration-300">
                        <SiXcode size={getSize()} />
                    </div>
                </Link>
            </div>
        </section>
    )
}
