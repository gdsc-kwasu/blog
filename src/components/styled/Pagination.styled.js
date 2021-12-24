import styled from 'styled-components'

export const PaginationStyle = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;
  margin-bottom: 2rem;

  & span {
    display: flex;
    border: 1px solid ${({ theme }) => theme.colors.dark_dim};
    padding: 0.8rem;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 34px;
  }
`
