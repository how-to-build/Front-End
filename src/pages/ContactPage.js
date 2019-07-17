import React from "react";

import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="col-12 bg-light p-0">
      <Header />
      <div className="col-md-8 col-sm-10 mx-auto mb-4">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
