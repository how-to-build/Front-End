import React from "react";

import Header from "./Header";
import CardsList from "./Cards/CardsList";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="col-12 bg-light p-0">
      <Header />
      <div className="col-md-8 col-sm-10 mx-auto mb-4">
        <CardsList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
