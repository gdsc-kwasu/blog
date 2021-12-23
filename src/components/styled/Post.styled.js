import styled from 'styled-components'

export const PostWrapper = styled.section`
  width: 90%;
  margin: 0 auto 2rem;
  max-width: 1440px;
  & h1 {
    margin-bottom: 1rem;
  }

  @media (min-width: 700px) {
    width: 80%;
  }

  @media (min-width: 1100px) {
    width: 70%;
  }
`
