import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";


import imagePdam from "@/public/pdam-banner.png";
import imageYOL from "@/public/logo_yol.jpg";
import imagePMJ from "@/public/pmj.png";
import imagePresensi from "@/public/epresensi-banner.png";
import imagePagii from "@/public/pagii-logo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Yogya Online Mobile",
    description: " Yogya Online makes it easy for you to shop for your daily needs. Shopping for household products as well as the latest fashion needs can be done through easy, practical and reliable online shopping. You can also get the best and most economical prices with the promos presented at Yogya Online.",
    tags: ["React Native", "Javascript", "Sails.Js"],
    imageUrl: imageYOL,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.yogyagroup.its.yom&hl=id",
    storeIOS: "https://apps.apple.com/id/app/yogya-online/id1532864110"
  },
  {
    title: "Pagii",
    description: "Easy Way to Check Attendance. Smart application to make it easier for employees and managers to manage attendance.",
    tags: ["React Native", "Javascript"],
    imageUrl: imagePagii,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.pagii&pcampaignid=web_share",
    storeIOS: "https://apps.apple.com/id/app/pagii-solusi-absensi/id1610290503"
  },
  {
    title: "PDAM GO",
    description: "PDAM Go Ponorogo application has several service features such as billing, bill payment information, independent metering, new installation services, and complaint services which can be accessed anytime and anywhere.    ",
    tags: ["React Native", "Javascript"],
    imageUrl: imagePdam,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.pdamgo",
    storeIOS: null
  },
  {
    title: "PMJ",
    description: "PMJ Smart brings solutions for your company in the digital era. It is a software-as-a-service (SaaS) based HRIS application that can contribute to increasing the efficiency of HR work. Monitor employee performance comprehensively in just one application.",
    tags: ["React Native", "Javascript"],
    imageUrl: imagePMJ,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.pulomasjaya&hl=en",
    storeIOS: null
  },
  {
    title: "E-Presensi",
    description: "E-Presence brings solutions for your company in the digital era. It is a software-as-a-service (SaaS) based HRIS application that can contribute to increasing the efficiency of HR work. Monitor employee performance comprehensively in just one application.",
    tags: ["React Native", "Javascript"],
    imageUrl: imagePresensi,
    storeAndroid: "https://play.google.com/store/apps/details?id=id.co.basicteknologi.epresensi&hl=id&gl=US",
    storeIOS: null
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;