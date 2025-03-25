import React from "react";
import Image from "next/image";
import Award1 from "../../assets/images/awards/1.jpg";
import Award2 from "../../assets/images/awards/2.jpg";
import Award3 from "../../assets/images/awards/3.jpg";
import item2 from "../../assets/images/awards/item-02.jpg";
import item3 from "../../assets/images/awards/item-03.jpg";
import vector from "../../assets/images/awards/vector.svg";
const SkillsAward = () => {
  return (
    <section className="award-section section-padding">
      <div className="container">
        <div className="title">
          <h2 className="poort-text poort-in-right">
            <span>Awards & Recognition</span>
          </h2>
          <div className="poort-text poort-in-right">
            <h3>My expensive list of skills</h3>
          </div>
        </div>
        <div className="row align-items-center">
          <div
            className="col-lg-5 col-12 scroll-text-animation"
            data-animation="fade_from_left"
          >
            <div className="image">
              <div className="image-1">
                <Image fill src={Award1} alt="" />
              </div>
              <div className="image-2">
                <Image fill src={Award2} alt="" />
              </div>
              <div className="image-3">
                <Image fill src={Award3} alt="" />
              </div>
              <div className="image-4">
                <Image fill src={Award3} alt="" />
              </div>
              <div className="bg-text">
                <h1>Awwards</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="content">
              <ul>
                <li
                  className="scroll-text-animation awward-item item active"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <span>2012</span>
                    <h2>
                      <a href="#">Awards 2020</a>
                      <span>X2</span>
                    </h2>
                  </div>
                  <a href="#">
                    <i className="ti-arrow-top-right"></i>
                  </a>
                  <div className="image-item">
                    <Image fill src={item3} alt="" />
                  </div>
                </li>
                <li
                  className="scroll-text-animation awward-item item"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <span>2015</span>
                    <h2>
                      <a href="#">Visionary Minds Award</a>
                      <span>X2</span>
                    </h2>
                  </div>
                  <a href="#">
                    <i className="ti-arrow-top-right"></i>
                  </a>
                  <div className="image-item">
                    <Image fill src={item2} alt="" />
                  </div>
                </li>
                <li
                  className="scroll-text-animation awward-item item"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <span>2017</span>
                    <h2>
                      <a href="#">Global Innovation</a>
                      <span>X2</span>
                    </h2>
                  </div>
                  <a href="#">
                    <i className="ti-arrow-top-right"></i>
                  </a>
                  <div className="image-item">
                    <Image fill src={item3} alt="" />
                  </div>
                </li>
                <li
                  className="scroll-text-animation awward-item item"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <span>2019</span>
                    <h2>
                      <a href="#">Delight Star Award</a>
                      <span>X2</span>
                    </h2>
                  </div>
                  <a href="#">
                    <i className="ti-arrow-top-right"></i>
                  </a>
                  <div className="image-item">
                    <Image fill src={item2} alt="" />
                  </div>
                </li>
                <li
                  className="scroll-text-animation awward-item item"
                  data-animation="fade_from_right"
                >
                  <div className="text">
                    <span>2022</span>
                    <h2>
                      <a href="#">Outstanding Leadership</a>
                      <span>X2</span>
                    </h2>
                  </div>
                  <a href="#">
                    <i className="ti-arrow-top-right"></i>
                  </a>
                  <div className="image-item">
                    <Image fill src={item3} alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape">
        <img src={vector} alt="" />
      </div>
    </section>
  );
};

export default SkillsAward;
