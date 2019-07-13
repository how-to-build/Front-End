import React from 'react';

import About from '../components/About/About';
import AboutTeam from '../components/About/AboutTeam';

const AboutPage = () => {
  return (
    <div className="col-12 bg-light h-100">
      <div className="col-md-5 col-sm-10 mx-auto mb-4">
        <About />
        <AboutTeam />
      </div>
    </div>
  )
}

export default AboutPage;