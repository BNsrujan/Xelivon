"use client"
import AboutCompany from "@/components/AboutCompany";
import Blogs from "@/components/Blogs";
import ConsultationSection from "@/components/ConsultationSection";
import Contact from "@/components/Contact";
import Emply from "@/components/Emply";
import Founder from "@/components/Founder";
import Services from "@/components/Services";
import VC from "@/components/VC";
import { motion } from "motion/react"
import {styles } from "@/app/style"
import {staggerContainer} from '@/utils/motion'
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <div>
      <HeroSection/>
      <VC/>
      <AboutCompany/>
      <Services/>
      <Blogs/>
      <Founder/>
      <Emply/>
      <ConsultationSection/>
      <Contact/>
    </div>
  );
}
