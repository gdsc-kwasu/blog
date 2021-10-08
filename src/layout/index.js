import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import propTypes from "prop-types";

const Content = styled.section`
  min-height: 70vh;
  margin-top: 120px;

  @media only screen and (max-width: 768px) {
    margin-top: 80px;
  }
`;

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

Layout.propTypes = {
  children: propTypes.node.isRequired,
};
