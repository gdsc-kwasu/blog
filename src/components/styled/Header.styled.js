import styled from "styled-components";

const Header = styled.header`
  width: 100%;

  & nav {
    padding: 0.75rem 0 1.6rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0;
    width: 30%;
  }

  @media only screen and (min-width: 700px) {
    & nav {
      flex-direction: row;
      align-items: center;
      gap: 8px;
      padding: 2rem 1rem;
      margin: 0 auto;
      width: 83%;
      max-width: 1400px;
    }
  }
`;

export default Header;
