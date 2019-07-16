import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div>
      <section className="probootstrap-section gray-bg">
        <div className="container contents">
          <div className="row">
            <div>
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* END row */}
        <section className="probootstrap-hero probootstrap-xs-hero probootstrap-hero-colored">
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-left probootstrap-hero-text">
                <h2>Our Team</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="team-area section-gap" id="team">
          <div className="container">
            <div className="row justify-content-md-around align-items-center d-flex">
              <div className="single-team m-2">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://avatars2.githubusercontent.com/u/47971028?s=200&v=4"
                    alt="Ihab Ali"
                  />
                  <div className="align-items-center justify-content-center d-flex">
                    <a href="mailto:hello@ihabali.com">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a
                      href="https://github.com/h0o0bA"
                      target="_blank"
                      className="m-2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://ihabali.com/" target="_blank">
                      <FontAwesomeIcon icon={faBriefcase} />
                    </a>
                  </div>
                </div>
                <div className="meta-text mt-30 text-center">
                  <h5>Ihab Ali</h5>
                  <p>Front-End Developer</p>
                </div>
              </div>
              <div className="single-team m-2">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://avatars2.githubusercontent.com/u/44987616?s=200&v=4"
                    alt
                  />
                  <div className="align-items-center justify-content-center d-flex">
                    <a
                      href="https://github.com/shenry45"
                      target="_blank"
                      className="m-2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
                <div className="meta-text mt-30 text-center">
                  <h5>Shawn Henry</h5>
                  <p>Front-End Developer</p>
                </div>
              </div>
              <div className="single-team m-2">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://avatars3.githubusercontent.com/u/39752557?s=200&v=4"
                    alt
                  />
                  <div className="align-items-center justify-content-center d-flex">
                    <a
                      href="https://github.com/ChristianMacDonald"
                      target="_blank"
                      className="m-2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
                <div className="meta-text mt-30 text-center">
                  <h5>Christian MacDonald</h5>
                  <p>Front-End Developer</p>
                </div>
              </div>
              <div className="single-team m-2">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://avatars0.githubusercontent.com/u/43965984?s=200&v=4"
                    alt
                  />
                  <div className="align-items-center justify-content-center d-flex">
                    <a
                      href="https://github.com/InerLeeLofgren"
                      target="_blank"
                      className="m-2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
                <div className="meta-text mt-30 text-center">
                  <h5>Iner Lofgren</h5>
                  <p>Back-End Developer</p>
                </div>
              </div>
              <div className="single-team m-2">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="https://avatars0.githubusercontent.com/u/18667525?s=200&v=4"
                    alt
                  />
                  <div className="align-items-center justify-content-center d-flex">
                    <a
                      href="https://github.com/jokeefe1"
                      target="_blank"
                      className="m-2"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
                <div className="meta-text mt-30 text-center">
                  <h5>John O'Keefe</h5>
                  <p>Back-End Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* End team Area */}
    </div>
  );
};
// IA
export default About;