"use client";
import React from "react";
import { Formik } from "formik";
import Image from "next/image";
import purpleImage from "../../assets/images/purple-blure.svg";
const GetInTouch = () => {
  return (
    <section className="cta-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="cta-content">
              <div className="title">
                <h2>Introduction of Myself</h2>
                <h3>
                  Get In <span>Touch</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                  faucibus odio feugiat arc dolor.
                </p>
              </div>
              <div className="cta-widget">
                <div className="widget">
                  <h3>Contact</h3>
                  <span>+(2) 871 382 023</span>
                </div>
                <div className="widget">
                  <h3>Email</h3>
                  <span>
                    hello<span>@</span>joyamen.com
                  </span>
                </div>
                <div className="widget">
                  <h3>Address</h3>
                  <span>Jackpark, Ghana</span>
                </div>
                <div className="widget">
                  <h3>Follow</h3>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ti-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-twitter-alt"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ti-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="cta-from-wrap">
              <div className="cta-from">
                <h2>Fill up the form</h2>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    message: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.name) errors.name = "Name is required";
                    if (!values.email) errors.email = "Email is required";
                    if (!values.message) errors.message = "Message is required";
                    return errors;
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      console.log("Form submitted successfully!", values);

                      console.log(values);
                      resetForm();
                      setSubmitting(false);
                      setSubmitting(true);
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
                    <form method="post" onSubmit={handleSubmit}>
                      <div className="from">
                        <input
                          type="text"
                          id="name2"
                          placeholder="Full Name here"
                          required=""
                        />
                        <input
                          type="email"
                          id="email"
                          placeholder="Full Email here"
                          required=""
                        />
                        <textarea
                          name="text"
                          id="textarea"
                          placeholder="Write Messege....."
                          required=""
                        ></textarea>
                      </div>
                      <button type="submit" className="theme-btn">
                        SEnd messege <i className="ti-arrow-down"></i>
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
              <div className="shape">
                <Image fill src={purpleImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
