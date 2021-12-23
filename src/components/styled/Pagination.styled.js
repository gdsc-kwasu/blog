import styled from 'styled-components'

export const PaginationStyle = styled.div`
  display: flex;
  gap: 0.8rem;

  & span {
    display: inline-block;
    border: 1px solid ${({ theme }) => theme.colors.dark_dim};
    padding: 0.8rem;
  }
`
