import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="m-3">Contact Us</h1>
      <hr />
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
            <span>5820 Stoneridge Mall Rd, Suite 212, Pleasanton, CA 94588</span>
          </li>
          <li>
            <i className="icon-email" />
            <span>info@domain.com</span>
          </li>
          <li>
            <i className="icon-phone" />
            <span>(458) 852-6232</span>
          </li>
        </ul>
        <hr />
      </div>
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
    </div>
  );
};
// IA
export default Contact;
