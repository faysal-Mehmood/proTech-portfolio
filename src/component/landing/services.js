import React from "react";
import Service1 from "../../assets/images/project/1.jpg";
import Service2 from "../../assets/images/project/2.jpg";
import Service3 from "../../assets/images/project/3.jpg";
import Image from "next/image";
export const Services = ({ handleClick, ourServices }) => {
  return (
    <section className="project-section">
      <div className="container">
        <div
          className="title scroll-text-animation"
          data-animation="fade_from_bottom"
        >
          <h2>
            <span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M17.275 12.0032L12.3655 9L17.2749 5.99682C17.3593 5.94507 17.4199 5.86192 17.443 5.76551C17.4662 5.6691 17.4501 5.56745 17.3986 5.483L15.9559 3.12481C15.8485 2.9488 15.6181 2.89331 15.4421 3.00093L10.7556 5.8679V0.373692C10.7556 0.167414 10.5882 0 10.3819 0H7.61791C7.41163 0 7.24422 0.167414 7.24422 0.373692V5.8679L2.55756 3.00112C2.38117 2.8935 2.15135 2.9488 2.04373 3.125L0.601093 5.48318C0.549523 5.56764 0.533455 5.66928 0.556623 5.7657C0.579792 5.86211 0.64033 5.94525 0.724785 5.99701L5.63435 9L0.724785 12.0032C0.64033 12.0547 0.579792 12.1381 0.556623 12.2343C0.533455 12.3309 0.549523 12.4325 0.601093 12.517L2.04373 14.875C2.15135 15.051 2.38117 15.1067 2.55756 14.9991L7.24422 12.1321V17.6263C7.24422 17.8326 7.41163 18 7.61791 18H10.3819C10.5882 18 10.7556 17.8326 10.7556 17.6263V12.1323L15.4423 14.9989C15.6183 15.1065 15.8487 15.051 15.9561 14.8752L17.3987 12.517C17.4503 12.4325 17.4664 12.3309 17.4432 12.2345C17.4202 12.1379 17.3595 12.0549 17.275 12.0032Z"
                  fill="#EE3736"
                />
              </svg>
            </span>
            Introduction of Myself
          </h2>
          <h3>some of my features work.</h3>
        </div>
      </div>
      <div className="project-wrapper">
        {[1, 2, 3]?.map((item, index) => (
          <div className="project-card project-item-upp">
            <div className="image">
              <Image fill src={Service1} alt="" />
            </div>
            <div className="content">
              <div className="text">
                <span>Project no:2</span>
                <h2>
                  <a href="project-single.html">Artificial intelligence</a>
                </h2>
              </div>
              <a
                href="project-single.html"
                className="slingle-page-link btn-wrapper btn-move"
              >
                <i className="ti-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
