import React from 'react';
import styled from 'styled-components';

import Login from '../components/Login/Login';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <LoginPageCont className="col-12 bg-light">
      <div className="col-md-2 col-sm-10 mx-auto mb-4">
        <Login />
      </div>
      <Footer />
    </LoginPageCont>
  )
}

const LoginPageCont = styled.div`
  height: 100vh;
`;

export default LoginPage;