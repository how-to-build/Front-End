import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="probootstrap-hero probootstrap-xs-hero probootstrap-hero-colored">
        <div className="container">
          <div className="row">
            <div className="text-left probootstrap-hero-text">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="probootstrap-section">
        <div className="container contents">
          <div>
            <div>
              <h3>Drop us a line</h3>
              <form action="#" method="#" className="probootstrap-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    cols={30}
                    rows={10}
                    className="form-control"
                    id="message"
                    name="message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary btn-lg"
                    id="submit"
                    name="submit"
                    // defaultValue="Submit Form"
                  />
                </div>
              </form>
            </div>
            <div>
              <h2>Get in touch</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                provident qui tempore natus quos quibusdam soluta at.
              </p>
              <h4>USA</h4>
              <ul className="probootstrap-contact-info">
                <li>
                  <i className="icon-pin" />{" "}
                  <span>
                    198 West 21th Street, Suite 1111 New York NY 10016
                  </span>
                </li>
                <li>
                  <i className="icon-email" />
                  <span>info@domain.com</span>
                </li>
                <li>
                  <i className="icon-phone" />
                  <span>+123 456 7890</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
