import React from "react";

const Services = ({ handleClick }) => {
  return (
    <div name="service">
      <div className="tp-service-area section-padding">
        <div className="container">
          <div className="tp-section-title">
            <span>Check services</span>
            <h2>My best services</h2>
          </div>
          <div className="tp-service-wrap">
            <div className="row align-items-center">
              {[0, 1, 2, 3]?.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleClick("service")}
                  className="col col-lg-3 col-md-6 col-12"
                >
                  <div className="tp-service-item">
                    <i className="fi flaticon-vector"></i>
                    <h2>Website Design</h2>
                    <p>
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings.
                    </p>
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
