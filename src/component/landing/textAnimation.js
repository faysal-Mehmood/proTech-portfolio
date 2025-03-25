import React from "react";
import Image from "next/image";
import Stert from "../../assets/images/stert.svg";

const TextAnimation = () => {
  return (
    <section className="text-animation fade_bottom">
      <div className="marquee_container text-slider">
        <div className="marquee">
          <div className="item">
            <div>
              <Image fill src={Stert} alt="" />
              <h2>pweb develoment</h2>
            </div>
            <div>
              <Image fill src={Stert} alt="" />
              <h2 className="text-stroke-color">digital marketing</h2>
            </div>
            <div>
              <Image fill src={Stert} alt="" />
              <h2>graphics design</h2>
            </div>
          </div>
        </div>
        <div className="marquee">
          <div className="item">
            <div>
              <Image fill src={Stert} alt="" />
              <h2 className="text-stroke-color">pweb develoment</h2>
            </div>
            <div>
              <Image fill src={Stert} alt="" />
              <h2>digital marketing</h2>
            </div>
            <div>
              <Image fill src={Stert} alt="" />
              <h2 className="text-stroke-color">graphics design</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextAnimation;
