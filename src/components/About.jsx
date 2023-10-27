import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Know Me More
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Mariano Ramirez,</span> a  Full Stack Engineer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
            I am a Senior Full Stack Engineer, Throughout my career, I have focused on python backend development and 
            have achieved significant milestones in this field. In addition to developing solid skills in DevOps, mobile, frontend, 
            and backend technologies, I have successfully delivered complex projects and contributed to the growth of various organizations.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
            As a backend developer, I possess a deep understanding of server-side programming and database management especially
             with the Django, Python and Postgresql Stack. I have hands-on experience in designing and implementing robust and scalable
              architectures that ensure high performance and reliability. My proficiency in DevOps allows me to effectively automate processes, streamline workflows, and improve the overall development cycle.
            </p>
            <p> I am creative and quick at picking up new skills and pursue continuous mastery. Finally, I
              am a Spanish native speaker and have intermediate-level English reading and writing
              skills.</p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Mariano Ramirez
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:me@marianoeramirez.com ">me@marianoeramirez.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span> {new Date().getFullYear()-1990}
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Caracas,
                  Venezuela
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>10</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
           
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
