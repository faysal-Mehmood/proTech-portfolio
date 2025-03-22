import React from "react";
import Image from "next/image";
import SlotCounter from "react-slot-counter";

const AboutSection = ({ aboutData }) => {
  return (
    <div name="about" id="about">
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
                    {aboutData?.achievements?.map((item, index) => {
                      return (
                        <div key={index} className="tf-funfact-item">
                          <h3>
                            <SlotCounter
                              value={item?.count} // The final value to display
                              duration={5} // Duration of the animation in seconds
                              startValue={0} // Optional: Starting value
                              autoAnimationStart={true} // Automatically start the animation
                              separator="," // Optional: Add a separator (e.g., for thousands)
                            />
                          </h3>
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
