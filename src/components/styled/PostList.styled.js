import styled from 'styled-components'

export const PostLisrWrapper = styled.section`
  display: block;
  margin: 0 auto;
  padding: 1rem;
  gap: 2rem;
  & .list--posts {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  & h2 {
    color: ${({ theme }) => theme.colors.cardPrimaryFG};
    font-size: 25px;
  }

  & .list--info {
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.cardFG};
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

  @media only screen and (min-width: 700px) {
    width: 90%;
    max-width: 1400px;
    padding: 1rem 0;
  }
`
export const Card = styled.article`
  --shadow-color: ${({ theme }) => theme.colors.cardShadowColor};
  background: ${({ theme }) => theme.colors.cardBG};
  color: ${({ theme }) => theme.colors.cardFG};

  filter: drop-shadow(0px 10px 20px var(--shadow-color))
    drop-shadow(0px 2px 6px var(--shadow-color))
    drop-shadow(0px 0px 1px var(--shadow-color));
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
    color: ${({ theme }) => theme.colors.cardPrimaryFG};
    font-size: 21px;
  }
  & p {
    margin: 1rem 0;
    line-height: 1.5rem;
  }
  & a {
    font-weight: bold;
  }
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin: 0 !important;
  background: ${({ theme }) => theme.colors.cardHeaderBG};
  color: ${({ theme }) => theme.colors.cardHeaderFG};
  padding-left: 0.5rem;

  & .author-image img {
    width: 50px;
    height: 50px;
  }

  & span {
    line-height: 1.5rem;
  }

  @media (min-width: 585px) {
    & .author-image img {
      width: 80px;
      height: 80px;
    }
  }
`
