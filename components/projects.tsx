"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import Image from "next/image";
import imagePdam from "@/public/pdam-banner.png";
import imageYOL from "@/public/logo_yol.jpg";
import imagePMJ from "@/public/pmj.png";
import imagePresensi from "@/public/epresensi-banner.png";
import imagePagii from "@/public/pagii-logo.png";
import Link from 'next/link';
import { projectsData } from '@/lib/data';

export default function Projects() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>Projects</SectionHeading>

            <div className='flex flex-wrap flex-col md:flex-row'>
                {
                    projectsData.map((item, index): any => {
                        return (
                            <div className="w-full md:w-1/2 p-2">
                                <div className="flex-1 m-2 overflow-hidden rounded-lg shadow transition hover:shadow-lg dark:shadow-gray-700/25">
                                    <Link href={item.storeAndroid} target='_blank'>
                                        <img
                                            alt="Office"
                                            src={item.imageUrl.src}
                                            className="h-56 w-full object-cover"
                                        />
                                    </Link>
                                    <div className="bg-white p-4 dark:bg-gray-900 sm:p-6">
                                        <Link href={item.storeAndroid} target='_blank'>
                                            <h3 className="mt-0.5 text-lg text-gray-900 dark:text-white">
                                                {item.title}
                                            </h3>
                                        </Link>
                                        <p className="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400">
                                            {item.description}
                                        </p>
                                        <Link href={item.storeAndroid} target='_blank' className="inline-flex mr-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            Android
                                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </Link>
                                        {
                                            item.storeIOS != null && (
                                                <Link href={item.storeIOS} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    IOS
                                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                                    </svg>
                                                </Link>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </motion.section>
    )
}
