import React from "react";
import Image from "next/image";

import about1 from "../../assets/images/about-1.jpg";
import about2 from "../../assets/images/about-2.jpg";
import about3 from "../../assets/images/about-3.jpg";

export const AboutSection = ({ aboutData }) => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-12 scroll-text-animation"
            data-animation="fade_from_left"
          >
            <div className="about-image">
              <div className="left-Image">
                <Image src={about1} fill alt="About Left Image" />
              </div>
              <div className="right-Image">
                <Image src={about2} fill alt="About Right Image" />
              </div>
              <div
                className="main-image"
                style={{
                  maskImage: "url(/assets/images/ab-arrow.png)",
                  WebkitMaskImage: "url(/assets/images/ab-arrow.png)",
                }}
              >
                <Image src={about3} fill alt="About Main Image" />
              </div>
              <div className="shape-round"></div>
              <div className="mid-text">
                <h2>About me</h2>
                <span>About me</span>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-12 scroll-text-animation"
            data-animation="fade_from_right"
          >
            <div className="about-content">
              <h2>Introduction of Myself</h2>
              <h3>Digital product designer focused on development.</h3>
              <p>
                They use analytics tools to track and measure the performance of
                digital campaigns, gaining insights into user behavior,
                engagement, and conversion rates.
              </p>
              <div className="funfact-wrap">
                <div className="item">
                  <h2>
                    <span className="odometer" data-count="370">
                      00
                    </span>
                    <span className="icon">+</span>
                  </h2>
                  <h3>creating and optimizing projects</h3>
                </div>
                <div className="item">
                  <h2>
                    <span className="odometer" data-count="4">
                      00
                    </span>
                    <span className="icon">x</span>
                  </h2>
                  <h3>creating and optimizing projects</h3>
                </div>
              </div>
              <ul>
                <li className="item">
                  <span>born In</span>
                  <strong>New york</strong>
                </li>
                <li className="item">
                  <span>experience</span>
                  <strong>20+ Years</strong>
                </li>
                <li className="item">
                  <span>date of birth</span>
                  <strong>date of birth</strong>
                </li>
              </ul>
              <a href="about.html" className="theme-btn">
                About myself
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
