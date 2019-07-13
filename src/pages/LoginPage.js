import React from 'react';
import styled from 'styled-components';

import Login from '../components/Login/Login';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <>
      <LoginBackground className="col-12 h-100 pt-4 pb-4">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center h-100">
          <img src="/assets/shawn-henry.jpg" alt="logo" className="w-5 rounded-circle" />
          <div className="col-3 col-sm-10 col-md-3 bg-light d-flex p-4">
            <Login />
          </div>
        </div>
        <Footer className="pt-2 pb-2" />
      </LoginBackground>
    </>
  )
}

const LoginBackground = styled.div`
  background-image: url('/assets/login-background.jpg');
  background-scale: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default LoginPage;