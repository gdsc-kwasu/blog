import styled from "styled-components";

export const CommunityStyle = styled.div`
  padding: 60px 1rem;
  text-align: center;

  & h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 21px;
    margin-bottom: 10px;
    // font-size: 32px;
  }

  & div {
    max-width: 700px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 160%;
  }
`;
