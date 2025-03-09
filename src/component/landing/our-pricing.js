import React from "react";

const OurPricing = () => {
  return (
    <section className="tp-pricing-section section-padding">
      <div className="container">
        <div className="tp-section-title">
          <span>Pricing</span>
          <h2>My Pricing Plan</h2>
        </div>
        <div className="tp-pricing-wrap">
          <div className="row">
            {[1, 2, 3]?.map((_, index) => (
              <div key={index} className="col col-lg-4 col-md-6 col-12">
                <div className="tp-pricing-item">
                  <div className="tp-pricing-top">
                    <div className="pricing-thumb">
                      <span>Basic</span>
                    </div>
                    <div className="tp-pricing-text">
                      <h2>
                        $120<span>/per month</span>
                      </h2>
                      <p>Consectetur adipiscing elit. Purusout phasellus.</p>
                    </div>
                  </div>
                  <div className="tp-pricing-bottom">
                    <div className="tp-pricing-bottom-text">
                      <ul>
                        <li>Web App design</li>
                        <li>Software Development</li>
                        <li>3D Animation Add</li>
                        <li>Web Development</li>
                        <li>Graphic Design</li>
                      </ul>
                      <a href="home.html">Choose Plan</a>
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
