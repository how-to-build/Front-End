import React from "react";
import styled from "styled-components";
import Login from "../components/Login/Login";

const LoginPage = props => {
  return (
    <LoginBackground className="col-12 pt-4 h-100 pb-4">
      <div className="col-12 d-flex flex-column align-items-center justify-content-center mx-auto">
        <div className="col-10 col-sm-10 col-md-2 mb-3 text-center">
          <img src="/assets/how-to-logo2.jpg" alt="logo" className="w-50" />
        </div>
        <div className="col-10 col-sm-10 col-md-5 col-lg-3 bg-light d-flex p-4">
          <Login
            loggedIn={props.loggedIn}
            username={props.username}
            handlerLogInState={props.handlerLogInState}
          />
        </div>
      </div>
    </LoginBackground>
  );
};

const LoginBackground = styled.div`
  background-image: url("/assets/login-background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  max-height: 100%:
`;

export default LoginPage;
