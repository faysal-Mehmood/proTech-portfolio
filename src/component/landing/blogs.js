import React from "react";
import Image from "next/image";
import blog1 from "../../assets/images/blog/img-1.jpg";

const Blogs = () => {
  return (
    <section className="blog-section section-padding pt-0">
      <div className="container">
        <div className="title">
          <h2 className="poort-text poort-in-right">
            <span>news & blogs</span>
          </h2>
          <div className="poort-text poort-in-right">
            <h3>See latest articles our agency</h3>
          </div>
        </div>
        <div className="row">
          {[1, 2, 3]?.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 fade_bottom">
              <div className="blog-card">
                <div className="image">
                  <Image fill src={blog1} alt="" />
                  <Image fill src={blog1} alt="" />
                </div>
                <div className="content">
                  <span>june 28, 2025</span>
                  <h3>
                    <a href="blog-single.html">
                      Nurturing creativity & collaboration
                    </a>
                  </h3>
                  <a href="blog-single.html">
                    <span className="rolling-text">Read more</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
