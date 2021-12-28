import styled from 'styled-components'

const CommunityStyle = styled.section`
  width: 90%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto;
  color: ${({ theme }) => theme.colors.communitySectionFG};

  & h2 {
    color: ${({ theme }) => theme.colors.communitySectionPrimary};
    font-size: 1.25rem;
    font-weight: 500;
  }

  & p {
    line-height: 30px;
    margin: 0.6rem 0 0;
    max-width: 700px;
    color: #4d4d4d;
  }
  & a {
    background: ${({ theme }) => theme.colors.communitySectionPrimary};
    color: ${({ theme }) => theme.colors.communitySectionPrimaryFG};
    padding: 15px 30px;
    border-radius: 8px;
    margin: 1rem 0 0;
    outline: none;
    border: none;
    font-size: 16px;
  }

  @media only screen and (min-width: 765px) {
    width: 80%;

    & h2 {
      font-size: 2rem;
    }

    & p {
      font-size: 1.125rem;
      margin: 0.8rem 2.5rem;
    }

    & a {
      padding: 1.25rem 2.5rem;
    }
  }
`

export default CommunityStyle
