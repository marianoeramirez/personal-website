import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import {
  NavLink,
} from "react-router-dom";
import {getPosts} from "../api/requests";

const Blog = ({ classicHeader, darkTheme }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts();
      setPosts(response);
    };

    fetchPosts();
  }, []);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section
      id="blog"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Blog
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Posts
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        <Slider {...settings}>
          {posts.length > 0 &&
            posts.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "text-12 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        <NavLink
                    to={`post/${value.id}`}
                    >
                        {value.title}</NavLink>
                      </strong>
                      <br />
                      <span
                        className={
                          "text-7 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        
                        {value.published}
                      </span>
                    </p>
                  </div>
                 
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Blog;
