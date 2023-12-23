import React from "react";
import Typewriter from "typewriter-effect";
import { Link  } from "react-router-dom";

const Home = () => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
        ></div>


        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  <Typewriter
                    options={{
                      strings: [
                        "I'm Mariano Ramirez",
                        "I'm a Full Stack Engineer",
                        "I'm a IT professional",
                        "I'm a DevOps evangelist",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h2>
              </div>
            </div>
          </div>
          <Link
            to="/#about"
            className="scroll-down-arrow text-white smooth-scroll"
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
