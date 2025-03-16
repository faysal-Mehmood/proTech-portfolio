import React from "react";

const Services = ({ handleClick, ourServices }) => {
  return (
    <div name="service" id="service">
      <div className="tp-service-area section-padding">
        <div className="container">
          <div className="tp-section-title">
            <span>Check services</span>
            <h2>{ourServices?.heading}</h2>
          </div>
          <div className="tp-service-wrap">
            <div className="row align-items-center">
              {ourServices?.list?.map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(service)}
                  className="col col-lg-3 col-md-6 col-12"
                >
                  <div className="tp-service-item">
                    <i className="fi flaticon-vector"></i>
                    <h2>{service.title}</h2>
                    <p>{service?.description.slice(0, 80)}</p>
                    <button className="read-more">
                      <i className="fi flaticon-right-arrow"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="visible-rotate-text">
          <h1>Services</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
