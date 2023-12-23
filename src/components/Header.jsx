import React, { useState } from "react";
import { Tooltip } from "./Tooltip";
import { Link  } from "react-router-dom";

const Header = () => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);
  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* Logo */}
          <Link
                className="mb-lg-auto mt-lg-4"
                to={'/#home'}
              >
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <img
                className="img-fluid rounded-pill d-block"
                src="/images/mariano.png"
                title="I'm Mariano"
                alt="profile"
              />
            </span>
            <h1 className="text-5 text-white text-center mb-0 d-lg-block">
              Mariano Ramirez
            </h1>
          </Link>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              isNavModalClose
                ? "collapse navbar-collapse w-100 my-lg-auto "
                : "show navbar-collapse w-100 my-lg-auto"
            }
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li className="nav-item">
              <Link
                  className="nav-link "
                  to={'/#home'}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to={'/#about'}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to={'/#services'}
                >
                  What I Do
                </Link>
              </li>
              
              
              <li className="nav-item">
              <Link
                  className="nav-link "
                  to={'/#resume'}
                >
                  Resume
                </Link>
                
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link "
                  to={'/#blog'}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to={'/#contact'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <ul className="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
           
            <li className="social-icons-twitter">
              <Tooltip text="Twitter" placement="top">
                <a
                  href="https://twitter.com/sosinformatico"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
              </Tooltip>
            </li>
            <li className="social-icons-github">
              <Tooltip text="Github" placement="top">
                <a
                  href="https://github.com/marianoeramirez/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                </a>
              </Tooltip>
            </li>
          </ul>
          <button
            onClick={(e) => {
              setIsNavModalClose(!isNavModalClose);
            }}
            className={
              isNavModalClose ? "navbar-toggler" : "navbar-toggler show"
            }
            id="navbar-toggler"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default Header;
