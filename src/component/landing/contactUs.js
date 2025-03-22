"use client";
import React from "react";
import { Formik } from "formik";

const ContactUs = () => {
  return (
    <div name="contact" id="contact">
      <section className="tp-contact-form-area section-padding">
        <div className="container">
          <div className="tp-contact-form-wrap">
            <div className="tp-section-title">
              <h2>Send me a Message</h2>
              <p>
                Your email address will not be published. All fields are
                required
              </p>
            </div>

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
                <form
                  method="post"
                  onSubmit={handleSubmit}
                  className="contact-validation-active"
                >
                  <div className="row align-items-center">
                    <div className="col-md-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>Name*</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Your Name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />

                        {errors.name && touched.name && (
                          <div className="error">{errors.name}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6 col-md-6 col-12">
                      <div className="form-group">
                        <label>Email*</label>
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Your Email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        {errors.email && touched.email && (
                          <div className="error">{errors.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="fullwidth form-group">
                        <label>Message*</label>
                        <textarea
                          type="text"
                          name="message"
                          className="form-control"
                          placeholder="Message"
                          value={values.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        ></textarea>
                        {errors.message && touched.message && (
                          <div className="error">{errors.message}</div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-5 order-md-1 order-2 col-12">
                      <div className="submit-area">
                        <button
                          type="submit"
                          className="theme-btn"
                          disabled={isSubmitting}
                        >
                          Submit now
                        </button>
                        {isSubmitting && (
                          <div className="success-message">
                            Form Submitted successfully!
                          </div>
                        )}
                        <div id="loader">
                          <i className="ti-reload"></i>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 order-md-2 order-1 col-12">
                      <div className="contact-info">
                        <ul>
                          <li>
                            <i className="fi flaticon-phone-call"></i>{" "}
                            +1238575694
                          </li>
                          <li>
                            <i className="fi flaticon-mail"></i>{" "}
                            example@mail.com
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className="visible-rotate-text">
          <h1>Contat Me</h1>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
