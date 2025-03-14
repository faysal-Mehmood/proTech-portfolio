import Image from "next/image";
const ServiceDetail = ({ dataObj }) => {
  console.log("dataObj", dataObj);
  return (
    <div className="tp-service-single-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <div className="tp-service-single-wrap">
              <div className="tp-service-single-item">
                <div className="tp-service-single-main-img">
                  <Image
                    src={dataObj?.featured_image?.sourceUrl}
                    alt={dataObj?.featured_image?.title}
                    width={900}
                    height={520}
                    layout="responsive"
                  />
                </div>
                <div className="tp-service-single-title">
                  <h3>{dataObj?.title}</h3>
                </div>
                <p>{dataObj?.description}</p>
                {/* <p>
                  Hac nibh fermentum nisi, platea condimentum cursus velit dui.
                  Massa volutpat odio facilisis purus sit elementum. Non, sed
                  velit dictum quam. Id risus pharetra est, at rhoncus, nec
                  ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit
                  sit.
                </p> */}
                <div className="row mt-4">
                  {dataObj?.image_gallery?.map((imageItem, index) => (
                    <div key={index} className="col-md-6 col-sm-6 col-12">
                      <div className="tp-p-details-img">
                        <Image
                          src={imageItem}
                          alt="Gallery Image 1"
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

              <div className="tp-service-single-item list-widget">
                <div className="tp-service-single-title">
                  <h3>Our Capabilities</h3>
                </div>
                <p>{dataObj?.our_capabilties?.text}</p>
                <ul>
                  {dataObj?.our_capabilties?.list?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="tp-service-single-item">
                <div className="tp-service-single-title">
                  <h3>Our approach</h3>
                </div>
                <p>{dataObj?.our_approach}</p>
              </div>

              <div className="tp-service-single-item list-widget">
                <div className="tp-service-single-title">
                  <h3>Our Work Process</h3>
                </div>
                <ul>
                  {dataObj?.work_process?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="tp-service-single-item">
                <div className="tp-service-single-title">
                  <h3>Related Service</h3>
                </div>
                <div className="tp-service-area">
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="tp-service-item">
                        <i className="fi flaticon-vector"></i>
                        <h2>Website Design</h2>
                        <p>
                          Lacus, etiam sed est eu tempus need Temer diam congue.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="tp-service-item">
                        <i className="fi flaticon-smartphone"></i>
                        <h2>Mobile App Design</h2>
                        <p>
                          Lacus, etiam sed est eu tempus need Temer diam congue.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="tp-service-item">
                        <i className="fi flaticon-palette"></i>
                        <h2>Brand Identity</h2>
                        <p>
                          Lacus, etiam sed est eu tempus need Temer diam congue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tp-service-single-item">
                <div className="tp-service-contact-area">
                  <div className="tp-contact-title">
                    <h2>Have project in mind? Let's discuss</h2>
                    <p>
                      Get in touch with us to see how we can help you with your
                      project
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
  );
};

export default ServiceDetail;
