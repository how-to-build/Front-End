import React from "react";

import CardsList from "./Cards/CardsList";

const Home = () => {
  return (
    <div className="col-12 bg-light p-0">
      <div className="col-md-8 col-sm-10 mx-auto pb-4 pt-4">
        <CardsList />
      </div>
    </div>
  );
};

export default Home;
