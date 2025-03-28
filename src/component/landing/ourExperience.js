import React from "react";
import Slider from "react-slick";

import calender from "../../assets/images/calender.svg";
export const OurExperience = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };
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
          className="work-slider  scroll-text-animation"
          data-animation="fade_from_bottom"
        >
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6]?.map((_, index) => (
              <div className="work-item" key={index}>
                <span>
                  <img src={calender} alt="" /> 2017 - 2019
                </span>
                <h2>Unleash Our Potential</h2>
                <span className="color">Historian</span>
                <p>
                  Increase product sales and increase the There are many
                  variations amount of cash that comes in for futher development
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
