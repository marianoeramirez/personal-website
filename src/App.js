import "./App.scss";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { commonConfig } from "./config/commonConfig";
import PreLoader from "./components/Preloader";
import { Tooltip } from "./components/Tooltip";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Post, {loader as postLoader} from "./components/Post";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "post/:postId",
    element: <Post />,
    loader: postLoader,
  },
]);

function App() {
  const classicHeader = commonConfig.classicHeader;
  const darkTheme = commonConfig.darkTheme;

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setisLoading(false);
    }, 1000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

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

  return (
    <>
      <div
        style={{ position: "relative" }}
        className={classicHeader ? "" : "side-header"}
      >
        {isLoading && <PreLoader></PreLoader>}

        <div id="main-wrapper">
          <Header handleNavClick={handleNavClick}></Header>
          
            <div id="content" role="main">
            <RouterProvider router={router} />
            </div>

          
          <Footer
            classicHeader={classicHeader}
            darkTheme={darkTheme}
            handleNavClick={handleNavClick}
          ></Footer>
        </div>
        {/* back to top */}
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
  );
}

export default App;
