import React from 'react';
import styled from 'styled-components';

import Login from '../components/Login/Login';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <LoginPageCont className="col-12">
      <LoginCont className="col-md-5 col-sm-10">
        <Login />
      </LoginCont>
      <Footer />
    </LoginPageCont>
  )
}

const LoginPageCont = styled.div`
  background: linear-gradient(to bottom, #fcfcfc, #f2f2f2);
  height: 100vh;
`;
const LoginCont = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
`;

export default LoginPage;