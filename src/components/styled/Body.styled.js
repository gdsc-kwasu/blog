import styled from "styled-components";
import { Main } from "./Main.styled";

const Body = styled.body`
  display: flex;
  flex-direction: column;
  background: red;

  & Main {
    flex: 1;
  }
`;

export default Body;
