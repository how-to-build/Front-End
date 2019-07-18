import React from "react";

import CardsList from "./Cards/CardsList";

const Home = () => {
  return (
    <div className="bg-light p-0 mt-3">
      <div className="col-md-10 mx-auto pb-4 pt-4">
        <CardsList />
      </div>
    </div>
  );
};

export default Home;
