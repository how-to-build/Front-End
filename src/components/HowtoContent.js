import React from "react";
// import howtoimg from "../assets/howtoimg.jpg";
// import Like from "../actions/like";

const HowToContent = props => {
  return (
    <section className="probootstrap-section">
      <div className="container contents">
        <div>
          <h1>{props.success.title}</h1>
          <p className="muted"><u>Created by {props.success.username}</u></p>
          <hr />
        </div>
        <div>
          <p>Description</p>
          <p>{props.success.description}</p>
        </div>
        <hr />
        {
          props.success.comments.length > 0 ?
            (<div className="pl-3">
              <h4>Comments</h4>
              {props.success.comments.map(com => <p>{com.comment}</p>)}
            </div>)
          :
              null
        } 
      </div>
    </section>
  )
}

export default HowToContent;