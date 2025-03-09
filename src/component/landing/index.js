"use client";
import { useState } from "react";
import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import HeroSection from "@/component/landing/heroSection";
import AboutSection from "@/component/landing/aboutSection";
import Services from "@/component/landing/services";
import Digitaltrack from "@/component/landing/digitaltrack";
import Projects from "@/component/landing/projects";
import ServiceDialogue from "@/component/popups";
import Testonomials from "@/component/landing/testonomials";
import Blogs from "@/component/landing/blogs";
import OurPricing from "@/component/landing/our-pricing";
import ContactUs from "@/component/landing/contactUs";
import DialogueModel from "@/component/popups";

export default function LandingPage() {
  const [openPopup, setOpenPopup] = useState(false);
  const handleClose = () => {
    setOpenPopup("");
  };
  const handleClick = (value) => {
    setOpenPopup(value);
  };
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Services handleClick={handleClick} />
      <Digitaltrack />
      <Projects handleClick={handleClick} />
      <Testonomials />
      <Blogs />
      <OurPricing />
      <ContactUs />
      <ServiceDialogue />
      {/* <Footer /> */}
      <DialogueModel handleClose={handleClose} openPopup={openPopup} />
      <div className="col-lg-12">
        <div className="header-menu">
          <ul className="smothscroll">
            <li>
              <a href="#__next">
                <i className="ti-arrow-up"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
