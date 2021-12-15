import styled from "styled-components";

export const ButtonStyle = styled.button`
  margin: 40px 0;
  width: 189px;
  height: 59px;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);

  @media (min-width: 375px) {
    width: 149px;
    height: 59px;
  }
`;
