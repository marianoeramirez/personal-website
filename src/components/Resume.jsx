import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "Aug 2020",
      title: "Data Engineering Nanodegree",
      place: "Online",
      desc: "Data engineers course that teach about how to make data accessible to all the people who use it across an organization. That could mean creating a data warehouse for the analytics team, building a data pipeline for a frontend application, or summarizing massive datasets to be more user-friendly.",
    },
    {
      yearRange: "2019",
      title: "Diploma in Data Science, Machine Learning and its applications",
      place: "National University of Cordoba",
      desc: "In this diploma i learn about interdisciplinary data collection and examination techniques, data visualization, statistical and computational analytics, presentation skills, and how to apply the fundamental core concepts, and tools of data thinking to mine work in any industry or sector.",
    },
    
  ];

  const experienceDetails = [
    {
      yearRange: "2021 - Present",
      title: "Full Stack Engineer",
      place: "Headspace Health",
      desc: "Responsible for architecting and developing new features, optimizing and maintaining existing Django codebase, for mentail health company.",
    },
    {
      yearRange: "Jan 2021 - Mar. 2021",
      title: "Backend Python Engineer",
      place: "VENMO",
      desc: "Design and implement new services using cutting-edge technologies to support our client in achieving its business goals.",
    },
    {
      yearRange: "Aug 2018 - Jan 2021",
      title: "Full-Stack Lead Engineer",
      place: "MDPPS",
      desc: "Design, build and maintain distributed and scalable data-processing systems deployed on GCP with Kubernetes and Docker.",
    },
    {
      yearRange: "Nov 2013 - Aug 2018",
      title: "Full-Stack Lead Engineer",
      place: "BrightComms",
      desc: "I work with this telecomunication company for almost 5 years, i was in charge of the development of the company's main product, a web application for the management of mobile telephony services.",
    },
  ];

  const skills = [
    {
      name: "Python Development",
      percent: 99,
    },
    {
      name: "Django Development",
      percent: 100,
    },
    {
      name: "HTML/CSS",
      percent: 95,
    },
    {
      name: "JavaScript",
      percent: 80,
    },
    {
      name: "React JS",
      percent: 70,
    },
    {
      name: "Flutter",
      percent: 60,
    },
    {
      name: "Android / Java",
      percent: 70,
    },
    {
      name: "PostgreSQL, Postgis",
      percent: 90,
    },
    {
      name: "Kubernetes",
      percent: 90,
    },
    {
      name: "Rust",
      percent: 50,
    },
  ];

  return (
    <section
      id="resume"
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div key={index} className="col-md-6">
                <p
                  className={
                    " fw-500 text-start mb-2 " +
                    (darkTheme ? "text-light" : "text-dark")
                  }
                >
                  {skill.name}{" "}
                  <span className="float-end" style={{display:"none"}}>{skill.percent}%</span>
                </p>
                <div
                  className={
                    "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                  }
                >
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
