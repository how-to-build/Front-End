import React from "react";
import howtoimg from "../assets/howtoimg.jpg";
import Like from "../actions/like";

const HowtoContent = props => {
  return (
    <section className="probootstrap-section">
      <div className="container contents">
        <div>
          <h1 className="m-3 text-center">Title</h1>
          <hr />
        </div>
        <div>
          <p className="m-3">How-To Content</p>
          <p className="m-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowtoContent;
