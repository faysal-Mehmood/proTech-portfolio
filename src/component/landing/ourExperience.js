import React from "react";
import calender from "../../assets/images/calender.svg";
export const OurExperience = () => {
  return (
    <section className="work-section section-padding">
      <div className="container">
        <div
          className="title scroll-text-animation"
          data-animation="fade_from_bottom"
        >
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <h2>Introduction of Myself</h2>
              <h3>real experience.</h3>
            </div>
            <div className="col-lg-6 col-12">
              <div className="work-btn">
                <a href="contact.html" className="theme-btn">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="work-slider owl-carousel scroll-text-animation"
          data-animation="fade_from_bottom"
        >
          <div className="work-item">
            <span>
              <img src={calender} alt="" /> 2017 - 2019
            </span>
            <h2>Unleash Our Potential</h2>
            <span className="color">Historian</span>
            <p>
              Increase product sales and increase the There are many variations
              amount of cash that comes in for futher development
            </p>
          </div>
          <div className="work-item">
            <span>
              <img src={calender} alt="" /> 2017 - 2019
            </span>
            <h2>Experience Our Mastery</h2>
            <span className="color">Archivist</span>
            <p>
              Increase product sales and increase the There are many variations
              amount of cash that comes in for futher development
            </p>
          </div>
          <div className="work-item">
            <span>
              <img src={calender} alt="" /> 2017 - 2019
            </span>
            <h2>Professional Insights</h2>
            <span className="color">Researcher</span>
            <p>
              Increase product sales and increase the There are many variations
              amount of cash that comes in for futher development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
