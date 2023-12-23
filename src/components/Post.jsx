import React from "react";
import { useLoaderData } from "react-router-dom";

const Post = ({ darkTheme, params }) => {

  const { post } = useLoaderData();

  return (
    <>
      <div className="">
        <div
          className={
            "container ajax-container " +
            (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <br />
          <h2
            className={
              "text-2 font-weight-600 text-center mb-4"
            }
          >
            {post?.title}
          </h2>
          <span className="d-block text-center text-muted text-4 mb-4">
            {post?.published}
          </span>

          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
          <div >
            <div >
              <div className="row no-gutters align-items-center">
                
                <div className="col-auto">
                  <ul
                    className={
                      "social-icons" +
                      (darkTheme ? " social-icons-muted" : "")
                    }
                  >
                    <li className="social-icons-facebook">
                      <a
                        data-toggle="tooltip"
                        href={post?.socialLinks?.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-original-title="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="social-icons-twitter">
                      <a
                        data-toggle="tooltip"
                        href={post?.socialLinks?.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-original-title="Twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="social-icons-google">
                      <a
                        data-toggle="tooltip"
                        href={post?.socialLinks?.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-original-title="Google"
                      >
                        <i className="fab fa-google" />
                      </a>
                    </li>
                    <li className="social-icons-instagram">
                      <a
                        data-toggle="tooltip"
                        href={post?.socialLinks?.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-original-title="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li className="social-icons-email">
                      <a
                        data-toggle="tooltip"
                        href={post?.socialLinks?.mail}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-original-title="Email"
                      >
                        <i className="fas fa-envelope" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
