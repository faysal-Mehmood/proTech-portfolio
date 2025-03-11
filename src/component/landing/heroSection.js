import Image from "next/image";
import React from "react";
import Profile from "../../assets/images/profile.webp";
import Link from "next/link";
const HeroSection = ({ myPortfolioSchema }) => {
  const { heroSection, footer } = myPortfolioSchema;
  return (
    <div name="home">
      <section className="tp-hero-section-1">
        <div className="container">
          <div className="row">
            <div className="col col-xs-7 col-lg-7">
              <div className="tp-hero-section-text">
                <div className="tp-hero-title">
                  <h2>{heroSection?.title}</h2>
                </div>
                <div className="tp-hero-sub">
                  <p>{heroSection?.name}</p>
                </div>
                <div className="btns">
                  <Link href={heroSection?.button?.link} className="theme-btn">
                    {heroSection?.button?.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-vec">
          <div className="right-img">
            <Image
              alt={heroSection?.image?.title}
              src={heroSection?.image?.sourceUrl}
              width="687"
              height="959"
              style={{ color: "transparent" }}
            />
          </div>
        </div>
        <div className="social-link">
          <ul>
            {footer?.socialLinks?.slice(0, 3)?.map((item, index) => (
              <li key={index}>
                <Link href={item?.url} target="_blank">
                  {item.platform}
                </Link>
              </li>
            ))}
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
