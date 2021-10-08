import React from "react";
import styled from "styled-components";

const Wrapper = styled.footer`
  text-align: center;
  padding-top: 60px;
  margin-top: 50px;
`;

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Wrapper>
      <p>Built by Seven for GDSC KWASU &copy; {date}</p>
    </Wrapper>
  );
};

export default Footer;
