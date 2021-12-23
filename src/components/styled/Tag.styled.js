import styled from 'styled-components'

export const TagWrapper = styled.section`
  display: flex;
  width: 90%;
  margin: 0 auto;
  gap: 1rem;
  & .intro {
    display: none;
  }
  & .tag--posts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  & h1 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
  }

  @media (min-width: 765px) {
    // width: 50%;

    & .intro {
      display: block;
      flex: 1;
    }

    & .tag--posts {
      width: 60%;
    }
  }
`
export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .blog_img {
    height: 200px;
    margin: 1rem 0;
  }

  & .blog_img img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & h2 {
    color: ${({ theme }) => theme.colors.black};
  }
  & p {
    margin: 1rem 0;
    line-height: 1.5rem;
  }
  & a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;

  & .author-image img {
    width: 50px;
    height: 50px;
  }

  & span {
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.dark_dim};
  }

  @media (min-width: 585px) {
    & .author-image img {
      width: 80px;
      height: 80px;
    }
  }
`
