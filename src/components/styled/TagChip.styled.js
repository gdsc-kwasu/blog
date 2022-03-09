import styled from 'styled-components'

export const TagChipStyle = styled.a`
  background: ${({ theme }) => theme.colors.chipBG};
  padding: 0.2rem 2rem;
  color: ${({ theme }) => theme.colors.chipFG};
  border-radius: 4rem;
  text-transform: uppercase;
  display: inline-block;
  margin: 0.2rem;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
  }
`
