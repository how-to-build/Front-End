import React from "react";
// import howtoimg from "../assets/howtoimg.jpg";
// import Like from "../actions/like";

const HowToContent = props => {
  console.log(props);

  return (
    <section className="probootstrap-section">
      <div className="container contents">
        <div>
          {/* <h1 className="m-3 text-center">{this.props.success.success.title}</h1> */}
          <hr />
        </div>
        <div>
          <p className="m-3">How-To Content</p>
          <p className="m-3">
            {/* {this.props.success.success.description} */}
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowToContent;
