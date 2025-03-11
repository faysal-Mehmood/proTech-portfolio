import React from "react";
import { useState } from "react";

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Function to toggle the search container visibility
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="fixed-navbar">
      <header id="header">
        <div className="tp-site-header undefined">
          <nav className="navigation navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                  <div className="mobail-menu">
                    <div>
                      <div className="mobileMenu">
                        <div className="menu-close">
                          <div className="clox">
                            <i className="ti-close"></i>
                          </div>
                        </div>
                        <ul className="responsivemenu">
                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a>Home</a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a>About</a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a>Service</a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a>Portfolio</a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a>Blog</a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a>Contact</a>
                          </ul>
                        </ul>
                      </div>
                      <div className="showmenu">
                        <button
                          type="button"
                          className="navbar-toggler open-btn"
                        >
                          <span className="icon-bar first-angle"></span>
                          <span className="icon-bar middle-angle"></span>
                          <span className="icon-bar last-angle"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-6">
                  <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
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
                        style={{ color: "transparent" }}
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-1 col-1">
                  <div
                    id="navbar"
                    className="collapse navbar-collapse navigation-holder"
                  >
                    <button className="menu-close">
                      <i className="ti-close"></i>
                    </button>
                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                      <li>
                        <a>Home</a>
                      </li>
                      <li>
                        <a>About</a>
                      </li>
                      <li>
                        <a>Service</a>
                      </li>
                      <li>
                        <a>Portfolio</a>
                      </li>
                      <li>
                        <a>Blog</a>
                      </li>
                      <li>
                        <a>Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-2 col-2">
                  <div className="header-right" id="home">
                    <div className="header-search-form-wrapper">
                      <div className="cart-search-contact">
                        <button
                          className="search-toggle-btn"
                          onClick={toggleSearch}
                        >
                          {isSearchVisible ? (
                            <i className="ti-close"></i> // Show close icon when visible
                          ) : (
                            <i className="ti-search ti-search"></i> // Show search icon when hidden
                          )}
                        </button>

                        <div className="header-search-form">
                          <form>
                            <div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search here..."
                              />
                              <button type="submit">
                                <i className="fi ti-search"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div
          className={` ${
            isSearchVisible
              ? "search-container zoom-in"
              : "close-pop-up zoom-out"
          }`}
        >
          <input
            type="text"
            className="search-input"
            placeholder="Search here..."
          />
          <i className="ti-search ti-search search-icon pop-up-icon"></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
