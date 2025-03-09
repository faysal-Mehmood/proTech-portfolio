import React from "react";

const Footer = () => {
  return (
    <div className="tp-site-footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-image">
              <a className="logo" href="index.html">
                <img
                  alt=""
                  srcSet="
                        /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dd721e26.png&amp;w=96&amp;q=75  1x,
                        /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dd721e26.png&amp;w=256&amp;q=75 2x
                      "
                  src="_next/image1559?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dd721e26.png&amp;w=256&amp;q=75"
                  width="68"
                  height="68"
                  decoding="async"
                  data-nimg="1"
                  loading="lazy"
                  style="color: transparent"
                />
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="link-widget">
              <ul>
                <li>
                  <a href="index.html">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="ti-twitter-alt"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="ti-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="ti-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="index.html">
                    <i className="ti-vimeo-alt"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="copyright">
              <p>© 2023. All rights reserved by themepresss.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
