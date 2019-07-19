import React from "react";

import styled from "styled-components";

import AddCardButton from "./../components/AddCardButton";

const Footer = () => {
  return (
    <footer className="bg-light">
      <br />
      <center>&copy; How To 2019</center>
      {//this.props.user_id ?
      localStorage.hasOwnProperty("token") ? (
        <AddCardFloater>
          <AddCardButton />
        </AddCardFloater>
      ) : null}
    </footer>
  );
};

const AddCardFloater = styled.div`
  position: fixed;
  z-index: 2;
  right: 30px;
  bottom: 30px;
`;

export default Footer;
