import styled from "styled-components";

const CommunityStyle = styled.section`
  width: 80%;
  text-align: center;
  display: flex;
  margin: 4rem auto;

  & h2 {
    color: #0f9d58;
    font-size: 1.25rem;
  }

  & p {
    line-height: 30px;
    margin: 1.2rem 0;
  }
  & button {
    background: #0f9d58;
    padding: 15px 30px;
    color: #fff;
    border-radius: 8px;
    outline: none;
    border: none;
  }
`;

export default CommunityStyle;
