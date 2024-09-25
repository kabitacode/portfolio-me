"use client"
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { experiencesData } from '@/lib/data';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useActiveSectionContext, useTheme } from '@/utils/hooks';


export default function Experience() {
    const { ref, inView } = useInView();
    const { setActiveSection, timeLastClick } = useActiveSectionContext()
    const { theme } = useTheme();


    useEffect(() => {
        if (inView && Date.now() - timeLastClick > 1000) {
            setActiveSection("Experience")
        }
    }, [inView, setActiveSection, timeLastClick])



    return (
        <section ref={ref} className='scroll-mt-28 mb-28 sm:mb-40' id='experience'>
            <SectionHeading>Experience</SectionHeading>
            <VerticalTimeline lineColor={theme === "light" ? "#37415140" : "#F7F7F7"}>
                {
                    experiencesData.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{
                                        background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                                        boxShadow: "none",
                                        border: "1px solid rgba(0,0,0,0.05)",
                                        textAlign: 'left',
                                        padding: "1.3rem 2rem"
                                    }}
                                    contentArrowStyle={{
                                        borderRight:
                                            theme === "light"
                                                ? "0.4rem solid #9ca3af"
                                                : "0.4rem solid rgba(255, 255, 255, 0.5)",
                                    }}
                                    date={item.date}
                                    icon={item.icon}
                                    iconStyle={{
                                        background:
                                            theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                                        fontSize: "1.5rem"
                                    }}
                                >
                                    <h3 className='font-semibold capitalize'>{item.title}</h3>
                                    <p className='font-normal !-mt-0'>{item.location}</p>
                                    <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>{item.description}</p>
                                </VerticalTimelineElement>
                            </React.Fragment>
                        )
                    })
                }
            </VerticalTimeline>
        </section>
    )
}
