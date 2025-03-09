import Image from "next/image";
import React from "react";
import Service1 from "../../assets/images/image.webp";
const Projects = ({ handleClick }) => {
  return (
    <div name="project">
      <section className="tp-project-section section-padding">
        <div className="container">
          <div className="tp-section-title">
            <span>Projects</span>
            <h2>My Latest Project</h2>
          </div>
          <div className="tp-project-wrap">
            <div className="row">
              {[0, 1, 2]?.map((_, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleClick("project");
                  }}
                  className="col col-xl-4 col-lg-6 col-sm-12 col-12"
                >
                  <div className="tp-project-item">
                    <div className="tp-project-img">
                      <Image
                        alt=""
                        src={Service1}
                        width="420"
                        height="483"
                        decoding="async"
                        data-nimg="1"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="tp-project-content">
                      <span>Web Design</span>
                      <h2>Business Website Design</h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="project-btn">
              <span>
                <button className="theme-btn">View all work</button>
              </span>
            </div>
          </div>
        </div>

        <div className="visible-rotate-text">
          <h1>My Projects</h1>
        </div>
      </section>
    </div>
  );
};

export default Projects;
