import React from "react";
import blog1 from "../../assets/images/blog.webp";
import Image from "next/image";
const Blogs = () => {
  return (
    <div name="blog">
      <section className="tp-blog-section section-padding" id="blog">
        <div className="container">
          <div className="tp-section-title">
            <span>Latest Blog</span>
            <h2>My Latest News</h2>
          </div>
          <div className="tp-blog-items">
            <div className="row">
              {[0, 1, 2]?.map((_, index) => (
                <div key={index} className="col col-lg-4 col-md-6 col-12">
                  <div className="tp-blog-item">
                    <div className="tp-blog-img">
                      <Image
                        alt=""
                        src={blog1}
                        width="600"
                        height="400"
                        decoding="async"
                        data-nimg="1"
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                      <div className="thumb">Designer</div>
                    </div>
                    <div className="tp-blog-content">
                      <ul>
                        <li>25 Dec, 2023</li>
                        <li>
                          By <a href="index.html">Marilou</a>
                        </li>
                      </ul>
                      <h2>Helpful tips for become a successful designer</h2>
                      <p>
                        Consectetur adipiscing elit. Purusout phasellus
                        malesuada lectus.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sec-title-btn text-center mt-3">
              <span>
                <button className="theme-btn">View All Blog</button>
              </span>
            </div>
          </div>
        </div>
        <div className="visible-rotate-text">
          <h1>Latest Blog</h1>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
