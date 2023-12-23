import React from "react";
import { Link  } from "react-router-dom";

const Footer = ({ classicHeader, darkTheme }) => {
  return (
    <footer
      id="footer"
      className={"section " + (darkTheme ? "footer-dark bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        <div className="row">
          <div className="col-lg-6 text-center text-lg-start">
            <p className="mb-3 mb-lg-0">
              Copyright © 2024{" "}
              <Link
                to="/#home"
                className="fw-500"
                
              >
                Mariano Ramirez
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
