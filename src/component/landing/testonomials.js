import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testonomials = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
  const testimonials = [
    {
      id: 1,
      text: "“That will need careful attention To begin to identify aspects of students’ own portfolios To identify key portfolio features, varied styles, and organizational schemes.”",
      author: "Marry Jenefer",
    },
    {
      id: 2,
      text: "“Varied styles, and organizational schemes; to begin to identify aspects of students’ own portfolios To identify key portfolio features, that will need careful attention.”",
      author: "Elezabeth Marvel",
    },
    {
      id: 3,
      text: "“To begin to identify aspects of students’ own portfolios To identify key portfolio features, varied styles, and organizational schemes; that will need careful attention.”",
      author: "Marry Jenefer",
    },
    {
      id: 4,
      text: "“To identify key portfolio features, varied styles, and organizational schemes; to begin to identify aspects of students’ own portfolios that will need careful attention.”",
      author: "Elezabeth Marvel",
    },
  ];

  return (
    <section className="tp-testimonial-section section-padding">
      <div className="container">
        <div className="tp-section-title">
          <span>Testimonials</span>
          <h2>What My clients say.</h2>
        </div>
        <div className="tp-testimonial-wrap">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id}>
                <div className="tp-testimonial-item">
                  <div className="tp-testimonial-text">
                    <p>{testimonial.text}</p>
                    <span>{testimonial.author}</span>
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
