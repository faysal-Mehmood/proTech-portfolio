import React from "react";
import Image from "next/image";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectGreenLand from "../../assets/images/blog.webp";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ProjectDetail = () => {
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted before rendering the slider
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Auto-play the slider
    autoplaySpeed: 2000, // Auto-play speed in milliseconds
    arrows: false, // Show navigation arrows
  };

  const images = [
    { id: 1, src: ProjectGreenLand, alt: "Project Image 1" },
    { id: 2, src: ProjectGreenLand, alt: "Project Image 2" },
    { id: 3, src: ProjectGreenLand, alt: "Project Image 3" },
  ];

  return (
    <>
      <button className="modal-close">
        <i className="fa fa-close"></i>
      </button>
      <div className="tp-project-single-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12">
              <div className="tp-project-single-wrap">
                <div className="tp-project-single-item">
                  <div className="row align-items-center mb-5">
                    <div className="col-lg-7">
                      <div className="tp-project-single-title">
                        <h3>Food Website Design Project</h3>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Metus dis posuere amet tincidunt commodo, velit. Ipsum,
                        hac nibh fermentum nisi, platea condimentum cursus velit
                        dui. Massa volutpat odio facilisis purus sit elementum.
                        Non.
                      </p>
                      <p>
                        Hac nibh fermentum nisi, platea condimentum cursus velit
                        dui. Massa volutpat odio facilisis purus sit elementum.
                        Non, sed velit dictum quam. Id risus pharetra est, at
                        rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                        sollicitudin diam.
                      </p>
                    </div>
                    <div className="col-lg-5">
                      <div className="tp-project-single-content-des-right">
                        <ul>
                          <li>
                            Location : <span>7 Lake Street, London</span>
                          </li>
                          <li>
                            Client : <span>wpOceans</span>
                          </li>
                          <li>
                            Consult : <span>Harry Johnson</span>
                          </li>
                          <li>
                            Project Type : <span>Tonu React</span>
                          </li>
                          <li>
                            Duration : <span>6 Month</span>
                          </li>
                          <li>
                            Completion : <span>15 Apr 2023</span>
                          </li>
                          <li>
                            Share : <span>Creative, Portfolio</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="tp-project-single-main-img">
                    {/* Render the slider only if the component is mounted */}
                    {isMounted && (
                      <Slider {...settings}>
                        {images.map((image) => (
                          <div key={image.id}>
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={900}
                              height={520}
                              layout="responsive"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </Slider>
                    )}
                  </div>
                </div>

                <div className="tp-project-single-item list-widget">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="tp-project-single-title">
                        <h3>Our Strategies</h3>
                      </div>
                      <p>
                        Massa volutpat odio facilisis purus sit elementum. Non,
                        sed velit dictum quam. Id risus pharetra est, at
                        rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                        sollicitudin diam.
                      </p>
                      <ul>
                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                        <li>
                          Id risus pharetra est, at rhoncus, nec ullamcorper
                          tincidunt.
                        </li>
                        <li>
                          Hac nibh fermentum nisi, platea condimentum cursus.
                        </li>
                        <li>
                          Massa volutpat odio facilisis purus sit elementum.
                        </li>
                        <li>Elit curabitur amet risus bibendum.</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="tp-project-single-item-quote">
                        <p>
                          "Amazing looking theme and instantly turns your
                          application into a great looking one. Really shows
                          that professionals built this theme up. Very happy
                          with the way the theme looks."
                        </p>
                        <span>
                          Robert - <span>Yellow Theme</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tp-project-single-item">
                  <div className="tp-project-single-title">
                    <h3>Our approach</h3>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consequat suspendisse aenean tellus augue morbi risus. Sit
                    morbi vitae morbi sed urna sed purus. Orci facilisi eros sed
                    pellentesque. Risus id sed tortor sed scelerisque.
                    Vestibulum elit elementum, magna id viverra non, velit.
                    Pretium, eros, porttitor fusce auctor vitae id. Phasellus
                    scelerisque nibh eleifend vel enim mauris purus. Rutrum vel
                    sem adipiscing nisi vulputate molestie scelerisque molestie
                    ultrices. Eu, fusce vulputate diam interdum morbi ac a.
                  </p>
                </div>

                <div className="tp-project-single-gallery">
                  <div className="row mt-4">
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="tp-p-details-img">
                        <Image
                          src="https://via.placeholder.com/435x280"
                          alt="Gallery Image 1"
                          width={435}
                          height={280}
                          layout="responsive"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                      <div className="tp-p-details-img">
                        <Image
                          src="https://via.placeholder.com/435x280"
                          alt="Gallery Image 2"
                          width={435}
                          height={280}
                          layout="responsive"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tp-project-single-item list-widget">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="tp-project-single-title">
                        <h3>Resieved goals</h3>
                      </div>
                      <ul>
                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                        <li>
                          Id risus pharetra est, at rhoncus, nec ullamcorper
                          tincidunt.
                        </li>
                        <li>
                          Hac nibh fermentum nisi, platea condimentum cursus.
                        </li>
                        <li>
                          Massa volutpat odio facilisis purus sit elementum.
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 list-widget-s">
                      <div className="tp-project-single-title">
                        <h3>Results</h3>
                      </div>
                      <ul>
                        <li>
                          Mauris dignissim blandit cursus imperdiet accumsan
                          lorem.
                        </li>
                        <li>Nam id in non sed cras purus nunc et.</li>
                        <li>
                          Mauris orci, cursus nisl odio est adipiscing gravida
                          magna eget.
                        </li>
                        <li>
                          Quis mauris vel felis convallis nulla dignissim.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tp-project-single-item">
                  <div className="tp-project-single-title">
                    <h3>Related Projects</h3>
                  </div>
                  <div className="tp-project-area-s2">
                    <div className="tp-project-wrap">
                      <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                          <div className="tp-project-item">
                            <div className="tp-project-img">
                              <Image
                                src="https://via.placeholder.com/420x483"
                                alt="Related Project 1"
                                width={420}
                                height={483}
                                layout="responsive"
                                loading="lazy"
                              />
                            </div>
                            <div className="tp-project-text">
                              <h2>Business Website Design</h2>
                              <span>Web Design</span>
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                          <div className="tp-project-item">
                            <div className="tp-project-img">
                              <Image
                                src="https://via.placeholder.com/420x483"
                                alt="Related Project 2"
                                width={420}
                                height={483}
                                layout="responsive"
                                loading="lazy"
                              />
                            </div>
                            <div className="tp-project-text">
                              <h2>Food Website Design</h2>
                              <span>Web Development</span>
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                          <div className="tp-project-item">
                            <div className="tp-project-img">
                              <Image
                                src=""
                                alt="Related Project 3"
                                width={420}
                                height={483}
                                layout="responsive"
                                loading="lazy"
                              />
                            </div>
                            <div className="tp-project-text">
                              <h2>Creative Website Design</h2>
                              <span>Web Design</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tp-project-single-item">
                  <div className="tp-project-contact-area">
                    <div className="tp-contact-title">
                      <h2>Have project in mind? Let's discuss</h2>
                      <p>
                        Get in touch with us to see how we can help you with
                        your project
                      </p>
                    </div>
                    <div className="tp-contact-form-area">
                      <form className="contact-validation-active">
                        <div className="row">
                          <div className="col col-lg-6 col-md-6 col-12">
                            <div className="form-field">
                              <input
                                className="form-control"
                                type="text"
                                name="name"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col col-lg-6 col-md-6 col-12">
                            <div className="form-field">
                              <input
                                className="form-control"
                                type="email"
                                name="email"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div className="col col-lg-12 col-12">
                            <div className="form-field">
                              <select className="form-control" name="subject">
                                <option>Choose a Service</option>
                                <option>Web Design</option>
                                <option>Web Development</option>
                                <option>Marketing</option>
                              </select>
                            </div>
                          </div>
                          <div className="col fullwidth col-lg-12">
                            <textarea
                              className="form-control"
                              name="message"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div className="submit-area">
                          <button type="submit" className="theme-btn-s2">
                            Submit Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
