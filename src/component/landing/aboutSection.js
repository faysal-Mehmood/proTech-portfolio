import React from "react";
import Image from "next/image";

const AboutSection = ({ aboutData }) => {
  return (
    <div name="about">
      <section className="tf-about-section section-padding">
        <div className="container">
          <div className="tf-about-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="tf-about-img">
                  <Image
                    alt={aboutData?.image?.title}
                    src={aboutData?.image?.sourceUrl}
                    width="540"
                    height="636"
                    style={{ color: "transparent" }}
                  />
                  <div className="tf-about-img-text">
                    <div className="tf-about-icon">
                      <h3>{aboutData?.experienceYears}</h3>
                      <span>Years Exprience</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="tf-about-text">
                  <small>{aboutData?.label}</small>
                  <h2>{aboutData?.heading}</h2>
                  <h5>{aboutData?.subheading}</h5>
                  <p>{aboutData?.description}</p>
                  <div className="tf-funfact">
                    {aboutData?.achievements?.map((item) => {
                      return (
                        <div className="tf-funfact-item">
                          <h3>{item?.count}</h3>
                          <p>{item?.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="visible-rotate-text">
          <h1>About Me</h1>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
