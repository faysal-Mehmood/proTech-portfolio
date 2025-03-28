import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Profile from "../../assets/images/slider/profile.png";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = ({ myPortfolioSchema }) => {
  const { heroSection, footer } = myPortfolioSchema;
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".new_img-animet");

    elements.forEach((element) => {
      let image = element.querySelector("img");
      console.log("ima", image);
      if (!image) return;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 50%",
          toggleActions: "play none none none",
        },
      });

      tl.set(element, { autoAlpha: 1 });
      tl.from(element, { duration: 1.5, xPercent: -100, ease: "power2.out" });
      tl.from(
        image,
        {
          duration: 1.5,
          xPercent: 100,
          scale: 1.3,
          ease: "power2.out",
        },
        "-=1.5"
      );
    });
  }, []);

  return (
    <section className="hero-section" ref={containerRef}>
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

      <div className="imgage new_img-animet">
        <Image
          src={Profile}
          alt="Profile Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};
