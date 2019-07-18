import React from "react";

const Contact = () => {
  return (
    <section className="probootstrap-section">
      <div className="container contents">
        <div className="row">
          <div>
            <h1 className="m-3">Contact Us</h1>
            <hr />
          </div>
        </div>
      </div>
      {/* END row */}
      <div className="container contents m-3">
        <div>
          <div className="m-3">
            <h3>Drop us a line</h3>
            <form action="#" method="#" className="probootstrap-form w-75 m-4">
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
              We love hearing what you have to say! Send us an email with
              feedback, suggestions, and criticizes (<i>constructive please</i>
              ). We review all messages on ways to bring better value and
              improve our community.
            </p>
            <h4>USA</h4>
            <ul className="probootstrap-contact-info">
              <li>
                <i className="icon-pin" />{" "}
                <span>198 West 21th Street, Suite 1111 New York NY 10016</span>
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
  );
};
// IA
export default Contact;
