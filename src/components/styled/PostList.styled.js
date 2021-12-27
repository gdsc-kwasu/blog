import styled from 'styled-components'

export const PostLisrWrapper = styled.section`
  display: block;
  width: 83%;
  margin: 0 auto;
  gap: 2rem;
  & .list--posts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  & h2 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 25px;
  }

  & .list--info {
    margin-bottom: 2rem;
  }

  & .list--info h2 {
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  & .list--info p {
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 765px) {
    display: flex;
    // width: 50%;

    & .list--info {
      margin: 0;
      flex: 1;
    }

    & .list--posts {
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
    position: relative;
  }

  & .blog_img img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & h3 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 21px;
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
  margin: 0 !important;

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
