import Image from "next/image";
import React from "react";
import Profile from "../../assets/images/profile.webp";
const HeroSection = () => {
  return (
    <div name="home">
      <section className="tp-hero-section-1">
        <div className="container">
          <div className="row">
            <div className="col col-xs-7 col-lg-7">
              <div className="tp-hero-section-text">
                <div className="tp-hero-title">
                  <h2>App &amp; Software Developer</h2>
                </div>
                <div className="tp-hero-sub">
                  <p>Robert Miller</p>
                </div>
                <div className="btns">
                  <a className="theme-btn">Contact Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-vec">
          <div className="right-img">
            <Image
              alt=""
              src={Profile}
              width="687"
              height="959"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="social-link">
          <ul>
            <li>
              <a href="index.html">Facebook</a>
            </li>
            <li>
              <a href="index.html">Twitter</a>
            </li>
            <li>
              <a href="index.html">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="visible-text">
          <h1>Developer</h1>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
