"use client";
import { useState } from "react";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import { HeroSection } from "./heroSection";
import { MarqueeSection, MarqueSection2 } from "./marqueeSection";
import { AboutSection } from "./aboutSection";
import { PartnerSection } from "./marqueeSection";
import { Services } from "@/component/landing/services";
import { Projects } from "@/component/landing/projects";
import Blogs from "@/component/landing/blogs";
import { myPortfolioSchema } from "@/data/schema";
import { OurExperience } from "./ourExperience";
import SkillsAward from "./skillsAward";
import TextAnimation from "./textAnimation";
import OurSkills from "./ourSkills";
import GetInTouch from "@/component/common/getInTouch";
export default function LandingPage() {
  return (
    <>
      <Header myPortfolioSchema={myPortfolioSchema} />
      <HeroSection myPortfolioSchema={myPortfolioSchema} />
      <MarqueeSection />
      <AboutSection />
      <Projects />
      <PartnerSection />
      <OurExperience />
      <Services />
      <SkillsAward />
      <TextAnimation />
      <OurSkills />
      <GetInTouch />
      <Blogs />
      <MarqueSection2 />
      <Footer />
    </>
  );
}
