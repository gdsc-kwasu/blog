import styled from 'styled-components'

export const Main = styled.main`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;

  & a {
    font-weight: bold;
    text-decoration: underline;
  }
`
