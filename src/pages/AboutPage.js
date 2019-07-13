import React from 'react';

import Header from '../components/Header';
import About from '../components/About/About';
import AboutTeam from '../components/About/AboutTeam';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="col-12 bg-light h-100 p-0">
      <Header />
      <div className="col-md-5 col-sm-10 mx-auto mb-4">
        <About />
        <AboutTeam />
      </div>
      <Footer />
    </div>
  )
}

export default AboutPage;