import styled from 'styled-components'

export const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -2rem;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & a:first-of-type,
  & a:last-of-type {
    border: 1px solid ${({ theme }) => theme.colors.dark_dim};
  }

  & a:first-of-type[href$='#'],
  & a:last-of-type[href$='#'] {
    pointer-events: none;
    opacity: 0.6;
  }

  & a:first-of-type {
    padding: 1rem 2rem 1rem 1rem;
    border-right: 0;
    border-radius: 10rem 0 0 10rem;
  }

  & a:first-of-type .item {
    margin-left: 1rem;
  }

  & a:last-of-type {
    padding: 1rem 1rem 1rem 2rem;
    border-left: 0;
    border-radius: 0 10rem 10rem 0;
  }

  & a:last-of-type .item {
    margin-right: 1rem;
  }

  span.item {
    border: 1px solid ${({ theme }) => theme.colors.dark_dim};
    border-left: 0;
    border-right: 0;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    height: 3rem;
    box-sizing: content-box;
  }
`

export const PaginationCounter = styled.div`
  margin: -0.5rem 0 2rem;
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.1rem;
`
