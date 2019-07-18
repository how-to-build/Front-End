import React from "react";

import AddCardForm from "../components/AddCardForm";

const AddCardPage = () => {
  return (
    <div className="col-12 bg-light p-0 mt-5">
      <div className="col-md-8 col-sm-10 mx-auto mb-4">
        <section className="probootstrap-section">
          <div className="container contents">
            <div className="row">
              <div>
                <h1 className="m-3">Create How-To Article</h1>
                <hr />
              </div>
            </div>
          </div>
          <p>
            Add your latest how-to idea to our database of hundreds of useful
            how-to's to make the world a better place. Help us to help others
            with your ingenuity and innovation.
          </p>
          <AddCardForm />
        </section>
      </div>
    </div>
  );
};

export default AddCardPage;
