import React from 'react';

import AddCardForm from '../components/AddCardForm';

const AddCardPage = () => {
  return (
    <div className="col-12 bg-light p-0">
      <div className="col-md-8 col-sm-10 mx-auto mb-4">
        <h1>Contribute</h1>
        <p>Add your latest how-to idea to our database of hundreds of useful how-to's to make the world a better place. Help us to help others with your ingenuity and innovation.</p>
        <AddCardForm />
      </div>
    </div>
  )
}

export default AddCardPage;