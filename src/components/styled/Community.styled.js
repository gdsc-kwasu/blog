import styled from 'styled-components'

const CommunityStyle = styled.section`
  width: 80%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4rem auto;

  & h2 {
    color: #0f9d58;
    font-size: 1.25rem;
  }

  & p {
    line-height: 30px;
    margin: 0.6rem 0 0;
    max-width: 700px;
    color: #4d4d4d;
  }
  & button {
    background: #0f9d58;
    padding: 15px 30px;
    color: #fff;
    border-radius: 8px;
    margin: 1rem 0 0;
    outline: none;
    border: none;
  }
`

export default CommunityStyle
