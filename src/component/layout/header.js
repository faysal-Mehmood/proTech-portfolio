import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { scroller } from "react-scroll";

const Header = ({ myPortfolioSchema }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [resMenu, setResMenu] = useState(false);

  // Function to toggle the search container visibility
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const openResMenu = () => {
    setResMenu(!resMenu);
  };

  useEffect(() => {}, [searchData]);

  const inputData = (e) => {
    setSearchData(e.target.value); // Update state
  };

  const handleSearch = () => {
    if (!searchData.trim()) return; // If input is empty, do nothing

    // Convert schema into a flat searchable list
    const sections = [];

    Object.values(myPortfolioSchema).forEach((section) => {
      if (section && typeof section === "object") {
        // Extract scrollId
        const scrollId = section.scrollId;

        // Flatten all text into one string
        const sectionContent = JSON.stringify(section).toLowerCase();

        if (scrollId) {
          sections.push({ scrollId, content: sectionContent });
        }
      }
    });

    // Find first match
    const foundSection = sections.find((sec) =>
      sec.content.includes(searchData.toLowerCase())
    );

    if (foundSection) {
      console.log("Scrolling to:", foundSection.scrollId);
      scroller.scrollTo(foundSection.scrollId, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    } else {
      console.log("No search found");
    }
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
                      <div className={resMenu ? "mobileMenu" : "mymobilemenu"}>
                        <div className="menu-close">
                          <div className="clox">
                            <i className="ti-close" onClick={openResMenu}></i>
                          </div>
                        </div>
                        <ul className="responsivemenu">
                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a href="#home" onClick={openResMenu}>
                              Home
                            </a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a href="#about" onClick={openResMenu}>
                              About
                            </a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a href="#service" onClick={openResMenu}>
                              Service
                            </a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a href="#projects" onClick={openResMenu}>
                              Portfolio
                            </a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a href="#blog" onClick={openResMenu}>
                              Blog
                            </a>
                          </ul>

                          <ul className="MuiList-root MuiList-padding css-1ontqvh">
                            <a href="#contact" onClick={openResMenu}>
                              Contact
                            </a>
                          </ul>
                        </ul>
                      </div>
                      <div className="showmenu">
                        <button
                          type="button"
                          className="navbar-toggler open-btn"
                          onClick={openResMenu}
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
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#about" className="header-scroll">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#service">Service</a>
                      </li>
                      <li>
                        <a href="#projects">Portfolio</a>
                      </li>
                      <li>
                        <a href="#blog">Blog</a>
                      </li>
                      <li>
                        <a href="#contact">Contact</a>
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
            value={searchData}
            onChange={inputData}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <i
            className="ti-search ti-search search-icon pop-up-icon"
            onClick={handleSearch}
          ></i>
        </div>
      </header>
    </div>
  );
};

export default Header;
