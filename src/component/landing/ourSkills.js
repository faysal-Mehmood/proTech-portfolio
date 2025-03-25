import React from "react";
import Image from "next/image";
import work1 from "../../assets/images/work/1.png";
import work2 from "../../assets/images/work/2.png";
import work3 from "../../assets/images/work/3.png";
import work4 from "../../assets/images/work/4.png";
import work5 from "../../assets/images/work/5.png";
import work6 from "../../assets/images/work/6.png";
const OurSkills = () => {
  return (
    <section className="skill-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h2 className="fade_bottom">Introduction of Myself</h2>
              <h3 className="fade_bottom">trusted marketplace i connect</h3>
            </div>
          </div>
        </div>
        <div
          className="skill-wraper scroll-text-animation"
          data-animation="fade_from_bottom"
        >
          <div className="item">
            <div className="icon">
              <Image fill src={work1} alt="" />
              <h2>
                <span className="odometer" data-count="92">
                  00
                </span>
                %
              </h2>
            </div>
            <strong>Figma</strong>
          </div>
          <div className="item">
            <div className="icon">
              <Image fill src={work2} alt="" />
              <h2>
                <span className="odometer" data-count="93">
                  00
                </span>
                %
              </h2>
            </div>
            <strong>Framer</strong>
          </div>
          <div className="item">
            <div className="icon">
              <Image fill src={work3} alt="" />
              <h2>
                <span className="odometer" data-count="89">
                  00
                </span>
                %
              </h2>
            </div>
            <strong>Wordpress</strong>
          </div>
          <div className="item">
            <div className="icon">
              <Image fill src={work4} alt="" />
              <h2>
                <span className="odometer" data-count="85">
                  00
                </span>
                %
              </h2>
            </div>
            <strong>Vs Code</strong>
          </div>
          <div className="item">
            <div className="icon">
              <Image fill src={work5} alt="" />
              <h2>
                <span className="odometer" data-count="90">
                  00
                </span>
                %
              </h2>
            </div>
            <strong>Sketch</strong>
          </div>
          <div className="item">
            <div className="icon">
              <Image fill src={work6} alt="" />
              <h2>
                <span className="odometer" data-count="82">
                  00
                </span>
                %
              </h2>
            </div>
            <strong>Webflow</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSkills;
