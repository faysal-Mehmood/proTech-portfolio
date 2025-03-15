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
import { myPortfolioSchema } from "@/data/schema";
import { Link } from "react-scroll";

export default function LandingPage() {
  const [openPopup, setOpenPopup] = useState(false);
  const [dataObj, setdataObj] = useState({});
  const handleClose = () => {
    setOpenPopup(false);
  };
  const handleClick = (data) => {
    setOpenPopup(true);
    setdataObj(data);
  };
  return (
    <>
      <Header myPortfolioSchema={myPortfolioSchema} />
      <HeroSection myPortfolioSchema={myPortfolioSchema} />
      <AboutSection aboutData={myPortfolioSchema?.aboutMe} />
      <Services
        handleClick={handleClick}
        ourServices={myPortfolioSchema?.services}
      />
      <Digitaltrack digitalTrack={myPortfolioSchema?.digitalTrack} />
      <Projects handleClick={handleClick} {...myPortfolioSchema} />
      <Testonomials testimonialData={myPortfolioSchema.testimonials} />
      <Blogs />
      <OurPricing {...myPortfolioSchema} />
      <ContactUs />
      <ServiceDialogue />
      {/* <Footer /> */}
      <DialogueModel
        handleClose={handleClose}
        openPopup={openPopup}
        dataObj={dataObj}
      />
      <div className="col-lg-12">
        <div className="header-menu">
          <ul className="smothscroll">
            <li>
              {/* <a href="#__next">
               
              </a> */}

              <Link
                to="__next"
                smooth={true}
                duration={1000}
                style={{ cursor: "pointer" }}
              >
                {" "}
                <i className="ti-arrow-up"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
