import Image from "next/image";
import Link from "next/link";
import React from "react";

// Importing images statically
import shapeImage from "../../assets/images/service/shape.png";
import serviceImage1 from "../../assets/images/service/1.jpg";
import serviceImage2 from "../../assets/images/service/2.jpg";
import serviceImage3 from "../../assets/images/service/3.jpg";
import serviceIcon1 from "../../assets/images/service/icon-1.svg";
import serviceIcon2 from "../../assets/images/service/icon-2.svg";
import serviceIcon3 from "../../assets/images/service/icon-3.svg";

export const Projects = ({ handleClick, portfolio }) => {
  const services = [
    {
      id: 1,
      title: "Branding Design",
      image: serviceImage1,
      icon: serviceIcon1,
    },
    {
      id: 2,
      title: "Web Development",
      image: serviceImage2,
      icon: serviceIcon2,
    },
    {
      id: 3,
      title: "Content Marketing",
      image: serviceImage3,
      icon: serviceIcon3,
    },
    {
      id: 4,
      title: "App Development",
      image: serviceImage2,
      icon: serviceIcon2,
    },
  ];

  return (
    <section className="service-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12">
            <div className="section-title">
              <h2 className="fade_bottom">Introduction of Myself</h2>
              <h3 className="fade_bottom">My expensive list Of skills</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid g-0">
        <div className="service-slider owl-carousel">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <Image
                className="image"
                src={service.image}
                alt={service.title}
                width={500}
                height={300}
                priority
              />
              <div className="content">
                <div className="icon">
                  <Image
                    src={service.icon}
                    alt={`Icon ${service.id}`}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text">
                  <span>{`0${service.id}`}</span>
                  <h2>
                    <Link href="/service-single">{service.title}</Link>
                  </h2>
                  <p>Sed ut perspiciatis unde is voluptatem accusant</p>
                  <Link href="/service-single" className="service-single-link">
                    <i className="ti-arrow-top-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shape">
        <Image src={shapeImage} alt="Shape" width={500} height={300} priority />
      </div>

      <div className="shape-round">
        <svg width="1813" height="1409" viewBox="0 0 1813 1409" fill="none">
          <g filter="url(#filter0_f_1153_143)">
            <path
              d="M822.239 771.307C642.551 724.551 526.103 637.539 655.931 609.389C772.81 584.047 988.965 617.678 1112.23 670.903C1239.73 725.957 1257.13 802.768 1093.76 807.911C999.78 810.869 918.497 796.353 822.239 771.307Z"
              fill="#F14948"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_1153_143"
              x="0.630249"
              y="0.781738"
              width="1811.44"
              height="1407.51"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="300"
                result="effect1_foregroundBlur_1153_143"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};
