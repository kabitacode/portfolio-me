import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { SiFlutter, SiRedux, SiTypescript } from "react-icons/si";


import imagePdam from "@/public/pdam-banner.png";
import imageYOL from "@/public/logo_yol.jpg";
import imagePMJ from "@/public/pmj.png";
import imagePresensi from "@/public/epresensi-banner.png";
import imagePagii from "@/public/pagii-logo.png";
import imageAHB from "@/public/ahb.png";
import imageMyYogya from "@/public/myYogya.png";

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
    title: "Faletehan University",
    location: "Bandung (West Java) - Indonesia",
    description:
      "Bachelor of Computer Science (Informatics Engineering)",
    icon: React.createElement(LuGraduationCap),
    date: "October 2020 - October 2024",
  },
  {
    title: "Mobile Developer",
    location: "Bandung (West Java) - Indonesia",
    description:
      "I have 2.7 years of experience working as a Mobile Developer specializing in React Native.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2020 - June 2022",
  },
  {
    title: "Mobile Developer",
    location: "Bandung (West Java) - Indonesia",
    description:
      "I have 2.6 years of experience as a Mobile Developer specializing in React and React Native. For 1 year, I was outsourced to Yogya Group, where I was responsible for maintaining their mobile e-commerce applications.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2022 - May 2025",
  },
] as const;

export const projectsData = [
  {
    title: "Amanah Hartanah Bumiputera",
    description: "AHB is sponsored by PHB, and was previously managed by Maybank Asset Management Sdn Bhd (MAM) until PHBAM took over as manager on 1 July 2024. AHB’s Trustee is AmanahRaya Trustees Berhad.",
    tags: ["React Native", "Typescript"],
    imageUrl: imageAHB,
    storeAndroid: "",
    storeIOS: "",
    detail: "https://www.phbam.com.my/",
  },
  {
    title: "MyYOGYA 2.0",
    description: "MyYOGYA is here as a digital application from YOGYA Group to provide new experiences and provide for YOGYA consumers.",
    tags: ["React Native", "Javascript"],
    imageUrl: imageMyYogya,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.yogyagroup.its.myyogya&hl=id",
    storeIOS: "https://apps.apple.com/id/app/myyogya/id1468672431",
    detail: "",
  },
  {
    title: "Yogya Online Mobile",
    description: "Yogya Online makes it easy for you to shop for your daily needs. Shopping for household products as well as the latest fashion needs can be done through easy, practical and reliable online shopping. You can also get the best and most economical prices with the promos presented at Yogya Online.",
    tags: ["React Native", "Javascript", "Sails.Js"],
    imageUrl: imageYOL,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.yogyagroup.its.yom&hl=id",
    storeIOS: "https://apps.apple.com/id/app/yogya-online/id1532864110",
    detail: "",
  },
  {
    title: "Pagii",
    description: "Easy Way to Check Attendance. Smart application to make it easier for employees and managers to manage attendance.",
    tags: ["React Native", "Javascript"],
    imageUrl: imagePagii,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.pagii&pcampaignid=web_share",
    storeIOS: "https://apps.apple.com/id/app/pagii-solusi-absensi/id1610290503",
    detail: ""
  },
  {
    title: "PDAM GO",
    description: "PDAM Go Ponorogo application has several service features such as billing, bill payment information, independent metering, new installation services, and complaint services which can be accessed anytime and anywhere.    ",
    tags: ["React Native", "Javascript"],
    imageUrl: imagePdam,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.pdamgo",
    storeIOS: null,
    detail: ""
  },
  {
    title: "PMJ",
    description: "PMJ Smart brings solutions for your company in the digital era. It is a software-as-a-service (SaaS) based HRIS application that can contribute to increasing the efficiency of HR work. Monitor employee performance comprehensively in just one application.",
    tags: ["React Native", "Javascript"],
    imageUrl: imagePMJ,
    storeAndroid: "https://play.google.com/store/apps/details?id=com.pulomasjaya&hl=en",
    storeIOS: null,
    detail: ""
  },
  {
    title: "E-Presensi",
    description: "E-Presence brings solutions for your company in the digital era. It is a software-as-a-service (SaaS) based HRIS application that can contribute to increasing the efficiency of HR work. Monitor employee performance comprehensively in just one application.",
    tags: ["React Native", "Javascript"],
    imageUrl: imagePresensi,
    storeAndroid: "https://play.google.com/store/apps/details?id=id.co.basicteknologi.epresensi&hl=id&gl=US",
    storeIOS: null,
    detail: ""
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    icon: React.createElement(IoLogoHtml5),

  },
  {
    title: "CSS",
    icon: React.createElement(IoLogoCss3),
  },
  {
    title: "Javascript",
    icon: React.createElement(IoLogoJavascript),
  },
  {
    title: "TypeScript",
    icon: React.createElement(SiTypescript),
  },
  {
    title: "Redux",
    icon: React.createElement(SiRedux),
  },
  {
    title: "React Native",
    icon: React.createElement(FaReact),
  },
  {
    title: "Flutter",
    icon: React.createElement(SiFlutter),
  },
] as const;