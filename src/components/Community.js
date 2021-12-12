import React from "react";
import { ButtonStyle } from "./styled/Button.styled";
import { CommunityStyle } from "./styled/Community.styled";

const Community = () => {
  return (
    <CommunityStyle>
      <h1> Join Our Community Today</h1>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna, sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna.
      </div>
      <ButtonStyle>Get Started</ButtonStyle>
    </CommunityStyle>
  );
};

export default Community;
