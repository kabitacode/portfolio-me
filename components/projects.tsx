"use client"
import React, { useEffect, useRef } from 'react'
import SectionHeading from './section-heading'
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { projectsData } from '@/lib/data';
import { useIsSmall } from '@/utils/hooks/useMediaQuery';
import { useInView } from 'react-intersection-observer';
import useActiveSectionContext from '@/utils/hooks/useActiveSectionContext';



type propsProject = (typeof projectsData)[number];


export default function Projects() {
    const { scrollYProgress } = useScroll()
    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.6]);
    const isSmall = useIsSmall();
    const { ref, inView } = useInView();
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection('Projects')
        }
    }, [inView, setActiveSection])


    const storeAndroidComponent = (param: string) => {
        return (
            <Link href={param} className="w-full mb-3 md:mb-0 sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="me-3 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Get in on</div>
                    <div className="-mt-1 font-sans text-xs font-semibold">Google Play</div>
                </div>
            </Link>
        )
    }

    const storeIOSComponent = (param: string) => {
        return (
            <Link href={param} className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-1 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                <svg className="me-3 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Download on</div>
                    <div className="-mt-1 font-sans text-xs font-semibold">App Store</div>
                </div>
            </Link>
        )
    }

    const ProjectSection = ({ title, description, imageUrl, storeAndroid, storeIOS }: propsProject) => (
        <motion.div
            style={title != 'E-Presensi' && isSmall ? {scale} : {}}
            className="w-full md:w-1/2 p-2">
            <div className="flex-1 m-2 overflow-hidden rounded-lg shadow-md transition hover:shadow-2xl dark:shadow-gray-700/25">
                <Link href={storeAndroid} target='_blank'>
                    <Image
                        alt="Office"
                        src={imageUrl}
                        className="h-56 w-full object-cover"
                        quality={99}
                    />
                </Link>
                <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
                    <Link href={storeAndroid} target='_blank'>
                        <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                            {title}
                        </h3>
                    </Link>
                    <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                        {description}
                    </p>
                    <div className="flex md:flex-row flex-col justify-around items-center">
                        {storeAndroidComponent(storeAndroid)}
                        {storeIOS != null && storeIOSComponent(storeIOS)}
                    </div>
                </div>
            </div>
        </motion.div>
    )

    return (
        <motion.section
        ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="projects"
        >
            <SectionHeading>Projects</SectionHeading>

            <div className='flex flex-wrap flex-col md:flex-row'>
                {
                    projectsData.map((item, index): any => {
                        return (
                            <React.Fragment key={index}>
                                <ProjectSection {...item} />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </motion.section>
    )
}
