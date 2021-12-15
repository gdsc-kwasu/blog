import styled from "styled-components";

export const NewsLetterStyle = styled.div`
  text-align: center;
  padding: 50px 0.6rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  & h1 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
  & div {
    max-width: 700px;
    font-size: 14px;
    line-height: 160%;
    text-align: center;
    margin: 0 auto;
  }
  @media (min-width: 375px) {
    & h1 {
      font-size: 32px;
      font-weight: 500;
    }
    & div {
      font-size: 16px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 26px 0.5rem 0;
  gap: 10px;
  & input {
    width: 100%;
    max-width: 420px;
    font-size: 16px;
    margin-top: 16px;
    height: 56px;
    outline: none;
    padding: 0 18px;
    border: 1px solid ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  & button {
    background-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    height: 56px;
    outline: none;
    border: none;
    margin-top: 16px;
    padding: 15px 30px;
    font-size: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
      0px 0px 1px rgba(0, 0, 0, 0.04);
  }

  @media (min-width: 375px) {
    flex-direction: row;
    justify-content: center;
  }
`;
