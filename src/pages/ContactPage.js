import React from 'react';

import ContactForm from '../components/Contact/ContactForm';

const ContactPage = () => {
  return(
    <div className="bg-light">
      <div className="col-md-5 mx-auto pt-4 pb-4">
        <div>
          <h1>Contact</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris isi ut quip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage;