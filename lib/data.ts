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
      "I graduated as an Informatics Engineer",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Mobile Developer",
    location: "Bandung (West Java) - Indonesia",
    description:
      "I worked as a mobile developer (React Native) for 2 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Mobile Developer",
    location: "Bandung (West Java) - Indonesia",
    description:
      "I worked as a mobile developer (React Native) for 1.5 years. I was also assigned as an outsourcer at Yogya Group to maintain their applications. I also improve skills like Flutter and SwiftUI.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
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