import React from "react";

const OurPricing = ({ pricing }) => {
  return (
    <section className="tp-pricing-section section-padding" id="pricing">
      <div className="container">
        <div className="tp-section-title">
          <span>Pricing</span>
          <h2>{pricing?.heading}</h2>
        </div>
        <div className="tp-pricing-wrap">
          <div className="row">
            {pricing?.plans?.map((item, index) => (
              <div key={index} className="col col-lg-4 col-md-6 col-12">
                <div className="tp-pricing-item">
                  <div className="tp-pricing-top">
                    <div className="pricing-thumb">
                      <span>{item?.plantype}</span>
                    </div>
                    <div className="tp-pricing-text">
                      <h2>
                        {item?.ratePerHour}
                        <span>/per hour</span>
                      </h2>
                      <p>{item?.text}</p>
                    </div>
                  </div>
                  <div className="tp-pricing-bottom">
                    <div className="tp-pricing-bottom-text">
                      <ul>
                        {item?.features?.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                      <a href={item?.button?.link}>{item?.button?.text}</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="visible-rotate-text">
        <h1>My Pricing</h1>
      </div>
    </section>
  );
};

export default OurPricing;
