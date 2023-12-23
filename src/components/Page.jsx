import React, { useEffect, useState } from 'react';
import Header from "./Header";

import Footer from "./Footer";
import PreLoader from "./Preloader";
import { Tooltip } from "./Tooltip";
import { commonConfig } from "../config/commonConfig";

const Page = ({ children }) => {
    
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };
  
  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

    return <>
      <div
        style={{ position: "relative" }}
        className={"side-header"}
      >
        {isLoading && <PreLoader></PreLoader>}

        <div id="main-wrapper">
          <Header handleNavClick={handleNavClick}></Header>
          
            <div id="content" role="main">
            {children}
            </div>
          <Footer
            handleNavClick={handleNavClick}
          ></Footer>
        </div>
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>
      </div>
    </>
    ;
};

export default Page;


