import React from "react";
import stert from "../../assets/images/stert-2.svg";
import partners1 from "../../assets/images/partners/1.png";
import partners2 from "../../assets/images/partners/2.png";
import partners3 from "../../assets/images/partners/3.png";
import partners4 from "../../assets/images/partners/4.png";
import partners5 from "../../assets/images/partners/5.png";

import Image from "next/image";
export const MarqueeSection = () => {
  return (
    <section className="marquee-section">
      <div className="marquee_container">
        <div className="marquee">
          {[
            "branding",
            "product design",
            "digital marketing",
            " product design",
            "art direction",
            "motion graphics",
          ]?.map((item, index) => (
            <h2 key={index}>
              <Image fill src={stert} alt="" /> {item}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export const PartnerSection = () => {
  return (
    <section className="partners-section fade_bottom">
      <h2 className="d-none">No Content</h2>
      <div className="container">
        <ul className="partners-slider">
          <li>
            <div>
              <img src={partners1} alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src={partners2} alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src={partners3} alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src={partners4} alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src={partners5} alt="" />
            </div>
          </li>
          <li>
            <div>
              <img src={partners2} alt="" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export const MarqueSection2 = () => {
  return (
    <section className="marquee-section-s2">
      <div className="marquee_container">
        <div className="marquee">
          <h2>
            <span>arketing</span>_<span className="color">digital</span>_
            <span>creative</span> agencyent _ Chemication
          </h2>
        </div>
        <div className="marquee">
          <h2>
            <span>arketing</span>_<span className="color">digital</span>_
            <span>creative</span> agencyent _ Chemication
          </h2>
        </div>
      </div>
    </section>
  );
};
