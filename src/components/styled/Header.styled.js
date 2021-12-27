import styled from 'styled-components'

const Header = styled.header`
  width: 100%;

  & nav {
    padding: 1rem 0 1rem 1rem;
  }
  & nav a {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  & h1 {
    font-weight: 500;
    font-size: 19px;
  }
  @media only screen and (min-width: 700px) {
    & nav {
      flex-direction: row;
      align-items: center;
      gap: 8px;
      padding: 2rem 0;
      margin: 0 auto;
      width: 83%;
      max-width: 1400px;
    }
  }
`

export default Header
