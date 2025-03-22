import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Formik } from "formik";

import dynamic from "next/dynamic";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProjectGreenLand from "../../assets/images/blog.webp";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ProjectDetail = ({ dataObj }) => {
  const [isMounted, setIsMounted] = useState(false);
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
  console.log("dataObj", dataObj);
  return (
    <div className="tp-project-single-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
            <div className="tp-project-single-wrap">
              <div className="tp-project-single-item">
                <div className="row align-items-center mb-5">
                  <div className="col-lg-7">
                    <div className="tp-project-single-title">
                      <h3>{dataObj?.title}</h3>
                    </div>
                    <p>{dataObj?.description}</p>
                    {/* <p>
                      Hac nibh fermentum nisi, platea condimentum cursus velit
                      dui. Massa volutpat odio facilisis purus sit elementum.
                      Non, sed velit dictum quam. Id risus pharetra est, at
                      rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                      sollicitudin diam.
                    </p> */}
                  </div>
                  <div className="col-lg-5">
                    <div className="tp-project-single-content-des-right">
                      <ul>
                        <li>
                          Location :{" "}
                          <span>{dataObj?.metaFeatures?.location}</span>
                        </li>
                        <li>
                          Client : <span>{dataObj?.metaFeatures?.client}</span>
                        </li>
                        <li>
                          Consult :{" "}
                          <span>{dataObj?.metaFeatures?.consult}</span>
                        </li>
                        <li>
                          Project Type :{" "}
                          <span>{dataObj?.metaFeatures?.project_type}</span>
                        </li>
                        <li>
                          Duration :{" "}
                          <span>{dataObj?.metaFeatures?.duration}</span>
                        </li>
                        <li>
                          Completion :{" "}
                          <span>{dataObj?.metaFeatures?.completion_date}</span>
                        </li>
                        <li>
                          Preview :{" "}
                          <span>{dataObj?.metaFeatures?.preview}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tp-project-single-main-img">
                  {/* Render the slider only if the component is mounted */}
                  {isMounted && (
                    <Slider {...settings}>
                      {dataObj?.project_gallery?.map((slide, index) => (
                        <div key={index}>
                          <Image
                            src={slide.sourceUrl}
                            alt={slide.title}
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
                    <p>{dataObj?.our_Strategies?.text}</p>
                    <ul>
                      {dataObj?.our_Strategies?.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-project-single-item-quote">
                      <p>"{dataObj?.client_feedback}"</p>
                      <span>
                        {dataObj?.client_name} -{" "}
                        <span> {dataObj?.metaFeatures?.client}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tp-project-single-item">
                <div className="tp-project-single-title">
                  <h3>Technologies Used</h3>
                </div>
                <p>{dataObj?.our_approach}</p>
              </div>

              <div className="tp-project-single-gallery">
                <div className="row mt-4">
                  {dataObj?.project_gallery?.slice(0, 2)?.map((item, index) => (
                    <div kye={index} className="col-md-6 col-sm-6 col-12">
                      <div className="tp-p-details-img">
                        <Image
                          src={item?.sourceUrl}
                          alt={item?.title}
                          width={435}
                          height={280}
                          layout="responsive"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
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
                      <li>Quis mauris vel felis convallis nulla dignissim.</li>
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
                      Get in touch with us to see how we can help you with your
                      project
                    </p>
                  </div>
                  <div className="tp-contact-form-area">
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        subject: "",
                        message: "",
                      }}
                      validate={(values) => {
                        const errors = {};
                        if (!values.name) errors.name = "Name is Required";
                        if (!values.email) errors.email = "Email is Required";
                        if (!values.subject)
                          errors.subject = "Subject is Required";
                        if (!values.name)
                          errors.message = "Message is Required";
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          console.log("values Submitted");
                          setSubmitting(false);
                          resetForm();
                        }, 400);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                      }) => (
                        <form
                          className="contact-validation-active"
                          onSubmit={handleSubmit}
                        >
                          <div className="row">
                            <div className="col col-lg-6 col-md-6 col-12">
                              <div className="form-field">
                                <input
                                  className="form-control"
                                  type="text"
                                  name="name"
                                  placeholder="Your Name"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                                />
                                {errors.name && touched.name && (
                                  <div className="error">{errors.name}</div>
                                )}
                              </div>
                            </div>
                            <div className="col col-lg-6 col-md-6 col-12">
                              <div className="form-field">
                                <input
                                  className="form-control"
                                  type="email"
                                  name="email"
                                  placeholder="Your Email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                                />
                                {errors.email && touched.email && (
                                  <div className="error">{errors.email}</div>
                                )}
                              </div>
                            </div>
                            <div className="col col-lg-12 col-12">
                              <div className="form-field">
                                <select
                                  className="form-control"
                                  name="subject"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.subject}
                                >
                                  <option>Choose a Service</option>
                                  <option>Web Design</option>
                                  <option>Web Development</option>
                                  <option>Marketing</option>
                                </select>
                                {errors.subject && touched.subject && (
                                  <div className="error">{errors.subject}</div>
                                )}
                              </div>
                            </div>
                            <div className="col fullwidth col-lg-12">
                              <textarea
                                className="form-control"
                                name="message"
                                placeholder="Message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                              ></textarea>
                              {errors.message && touched.message && (
                                <div className="error">{errors.message}</div>
                              )}
                            </div>
                          </div>
                          <div className="submit-area">
                            <button
                              type="submit"
                              className="theme-btn-s2"
                              disabled={isSubmitting}
                            >
                              Submit Now
                            </button>
                            {isSubmitting && (
                              <div className="success-message">
                                Form Submitted successfully!
                              </div>
                            )}
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
