import React from "react";
// import howtoimg from "../assets/howtoimg.jpg";
// import Like from "../actions/like";

const HowToContent = props => {
  return (
    <section className="probootstrap-section">
      <div className="container contents">
        <div>
          <h1 className="text-center">{props.success.title}</h1>
          <hr />
        </div>
        <div>
          <p>Description</p>
          <p>{props.success.description}</p>
          <p><u>Created by {props.success.username}</u></p>
        </div>
        {/* <div> */}
          {/* {props.comments.map(com => <p>{com.comment}</p>)} */}
        {/* </div> */}
      </div>
    </section>
  )
}

export default HowToContent;