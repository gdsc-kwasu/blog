import styled from 'styled-components'

const Header = styled.header`
  background: ${({ theme }) => theme.colors.headerBG};
  color: ${({ theme }) => theme.colors.headerFG};

  & .container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & header {
    padding: 1rem 0 1rem 1rem;
  }

  & nav {
    display: flex;
  }

  & header a {
    display: flex;
    gap: 5px;
    align-items: center;
  }
  & h1 {
    font-weight: 500;
    font-size: 19px;
  }
  @media only screen and (min-width: 700px) {
    & .theme-toggle {
      padding: 2rem;
    }

    & header {
      align-items: center;
      gap: 8px;
      padding: 2rem 0;
      margin: 0 auto;
      width: 83%;
      max-width: 1400px;
    }
  }
`

export const BtnToggleTheme = styled.button`
  padding: 1rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`

export default Header
