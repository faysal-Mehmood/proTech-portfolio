import React from "react";
import Image from "next/image";

import Profile from "../../assets/images/slider/profile.png";
export const HeroSection = ({ myPortfolioSchema }) => {
  const { heroSection, footer } = myPortfolioSchema;
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-wrap">
          <h2 className="poort-text poort-in-right">
            20+ years of experience in design
          </h2>
          <h3 className="poort-text poort-in-right">
            HI, I’M
            <span>
              TAYLER.
              <span className="shape">
                <svg width="317" height="91" viewBox="0 0 317 91" fill="none">
                  <path
                    d="M262.93 6.61038C204.017 -0.745882 72.1727 -4.69987 16.0967 38.3343C-53.9984 92.1269 155.991 93.5509 235.928 85.2304C283.757 80.2519 315 68.0711 315 50.4478C315 35.2755 260.748 12.4724 162.56 16.7826"
                    stroke="white"
                    strokeOpacity="0.26"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h3>
          <h4 className="poort-text poort-in-right">UI/UX Designer</h4>
          <p className="poort-text poort-in-right">
            A creative director based in London. Create identities and digital
            experiences.
          </p>
        </div>
      </div>

      <div className="image new_img-animet">
        <Image fill src={Profile} alt="Profile Image" />
      </div>
    </section>
  );
};
