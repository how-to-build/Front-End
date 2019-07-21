import React from "react";

const HowToContent = props => {
  return (
    <section className="probootstrap-section">
      <div className="container contents">
        <div>
          <h1>{props.success.title}</h1>
          <p className="muted"><u>Created by {props.success.username}</u></p>
          <hr />
          <h4>Description</h4>
          <p>{props.success.description}</p>
        </div>
        <hr />
        {
          props.success.steps.length > 0 ?
            (
              <div>
                <h4>Steps:</h4>
                {
                  props.success.steps.map(step => <p key={step.id}>{step.description}</p>)
                }
              </div>
            )
          :
            <p>No instructions are availabe. :(</p>
        }
        <hr />
        {
          props.success.comments.length > 0 ?
            (<div className="pl-3">
              <h4>Comments</h4>
              {
                props.success.comments.map(com => {
                  return (<div key={com.id} className="card p-3 mb-3">
                    <p className="mb-0">{com.comment}</p>
                  </div>)
                })
              }
            </div>)
          :
              null
        } 
      </div>
    </section>
  )
}

export default HowToContent;