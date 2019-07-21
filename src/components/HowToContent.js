import React from "react";
import styled from 'styled-components';

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
                <ol>
                  {
                    props.success.steps.map(step => <Li key={step.id}>{step.description}</Li>)
                  }
                </ol>
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
                  return (
                    <ul key={com.id} className="mb-2">
                      <li className=" card p-3">{com.comment}</li>
                      <ul>
                        {
                          com.replies.length > 0 ?
                            (
                              com.replies.map(el => {
                                return <li key={el.id}><strong>Reply:</strong> {el.reply}</li>
                              })
                            )
                          :
                            null
                        }
                      </ul>
                    </ul>
                  )
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

const Li = styled.li`
  list-style-position: inside
`;

export default HowToContent;