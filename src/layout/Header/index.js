import React from "react";
import styled from "styled-components";

const Nav = styled.header`
  height: 80px;
  width: 100%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.04);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: ghostwhite;
  padding: 0 20px;

  .brand {
    width: 250px;
    height: 50px;
    margin-top: 15px;
  }

  .brand img {
    width: 100%;
    height: 100%;
  }
`;

const Header = () => {
  return (
    <Nav>
      <div className="brand">
        <img src="/img/logo.png" alt="gdsc kwasu logo" />
      </div>
    </Nav>
  );
};

export default Header;
