import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testonomials = ({ testimonialData }) => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Testimonial data

  return (
    <section className="tp-testimonial-section section-padding">
      <div className="container">
        <div className="tp-section-title">
          <span>Testimonials</span>
          <h2>What My clients say.</h2>
        </div>
        <div className="tp-testimonial-wrap">
          <Slider {...settings}>
            {testimonialData.list.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="tp-testimonial-item">
                  <div className="tp-testimonial-text">
                    <p>{testimonial.feedback}</p>
                    <span>{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="visible-rotate-text">
        <h1>Review</h1>
      </div>
    </section>
  );
};

export default Testonomials;
