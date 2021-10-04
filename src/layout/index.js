import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import propTypes from "prop-types";

const Content = styled.section`
  min-height: 60vh;
  margin-top: 120px;
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
