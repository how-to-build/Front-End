import React from 'react';

const NoMatchPage = () => {
  return (
    <div className="col-12">
      <div className="col-6 mx-auto pt-3 pb-3">
        <h1>Woops!</h1>
        <p>Looks like we sent you to the wrong place... </p>
        <p>Please contact a site admininstrator for more information.</p>
      </div>
    </div>
  )
}

export default NoMatchPage;