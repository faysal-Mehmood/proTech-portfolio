import Image from "next/image";
import React from "react";
import preloader from "@/assets/images/preloader.png";
import logo from "@/assets/images/logo.svg";
import logo2 from "@/assets/images/logo-2.svg";
import btnAbout from "../../assets/images/btn-about.png";
const Header = ({ myPortfolioSchema }) => {
  return (
    <>
      {/* <div className="preloader">
        <div className="vertical-centered-box">
          <div className="content">
            <div className="loader-circle"></div>
            <div className="loader-line-mask">
              <div className="loader-line"></div>
            </div>
            <Image fill src={preloader} alt="" />
          </div>
        </div>
      </div> */}
      {/* cursor */}
      <div className="cursor"></div>
      {/* them switch */}
      <div className="open-color-icon">
        <button className="switcher-open">
          <i className="ti-settings" id="open-btn"></i>
          <i className="ti-close" id="close-btn"></i>
        </button>
        <div className="color-bar">
          <h3>Mode</h3>
          <div className="color-btn">
            <button className="dark-btn" data-mode="light" aria-label="active">
              light
            </button>
            <button className="white-btn" data-mode="dark" aria-label="dark">
              dark
            </button>
          </div>
        </div>
      </div>
      {/* nav */}
      <header id="header">
        <div className="wpo-site-header">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row g-0 align-items-center">
                <div className="col-lg-3 col-md-2 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <button type="button" className="navbar-toggler open-btn">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar first-angle"></span>
                      <span className="icon-bar middle-angle"></span>
                      <span className="icon-bar last-angle"></span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-2 col-md-7 col-6">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                      <Image fill src={logo} alt="" className="light" />
                      <Image fill src={logo2} alt="" className="dark" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li className="menu-item-has-children">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Services </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service.html">Service</a>
                          </li>
                          <li>
                            <a href="service-single.html">Service Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Portfolio </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="project.html">Portfolio</a>
                          </li>
                          <li>
                            <a href="project-single.html">Portfolio Single</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Blog </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog.html">Blog right sidebar</a>
                          </li>
                          <li>
                            <a href="blog-left-sidebar.html">
                              Blog left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-fullwidth.html">Blog fullwidth</a>
                          </li>
                          <li>
                            <a href="blog-single.html">Blog details </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">Pages </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="about.html">about Us</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="404.html">404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right">
                    <div className="mini-cart">
                      <button className="cart-toggle-btn">
                        <Image fill src={btnAbout} alt="" />
                      </button>
                      <div className="mini-cart-content">
                        <button className="mini-cart-close">
                          <i className="ti-close"></i>
                        </button>
                        <div className="mini-cart-items">
                          <a href="index.html">
                            <Image fill src={logo} alt="" />
                          </a>
                          <h2>Get in Touch</h2>
                          <p>
                            If you are going to use a passage of Lorem Ipsum,
                            you need to be sure there isn't anything
                            embarrassing hidden in the middle of text.
                          </p>
                          <div className="mini-cart-item">
                            <div className="icon">
                              <i className="flaticon-phone-call"></i>
                            </div>
                            <div className="contact">
                              <span>Phone</span>
                              <h6>
                                <a href="tel:+991-7636844563">
                                  +991 - 763 684 4563
                                </a>
                              </h6>
                            </div>
                          </div>
                          <div className="mini-cart-item">
                            <div className="icon">
                              <i className="flaticon-email"></i>
                            </div>
                            <div className="contact">
                              <span>Email Now</span>
                              <h6>foxisa@gmail.com</h6>
                            </div>
                          </div>
                          <div className="mini-cart-item">
                            <div className="icon">
                              <i className="flaticon-placeholder"></i>
                            </div>
                            <div className="contact">
                              <span>Canada Office</span>
                              <h6>
                                Canada City, Office-02, Road-11, House-3B/B,
                                Section-H
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="close-form">
                      <a className="theme-btn" href="contact.html">
                        let,s talk{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
