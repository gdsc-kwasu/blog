import styled from 'styled-components'

export const FeaturedNewsStyle = styled.section`
  width: 90%;
  margin: 380px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2%;

  @media only screen and (min-width: 0px) and (max-width: 576px) {
    margin-top: 450px;
  }
`

export const Card = styled.article`
  --shadow-color: ${({ theme }) => theme.colors.cardShadowColor};
  background: ${({ theme }) => theme.colors.cardBG};
  color: ${({ theme }) => theme.colors.cardFG};
  box-shadow: 0px 10px 20px var(--shadow-color), 0px 2px 6px var(--shadow-color),
    0px 0px 1px var(--shadow-color);
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1.5rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .blog_img {
    height: 200px;
    position: relative;
  }

  & .blog_img img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 375px) {
    & :first-of-type {
      margin-top: 6.25rem;
    }
  }
  @media (min-width: 585px) {
    width: 45%;

    & :first-of-type {
      margin-top: 0;
    }
  }

  @media (min-width: 785px) {
    width: 32%;
    margin-bottom: 2%;
  }
`

export const Describtion = styled.div`
  padding: 0.8rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  //   padding: 1rem;

  @media (min-width: 800px) {
    padding: 1.25rem 1.25rem 1.5rem;
  }
`
export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.cardPrimaryFG};
  font-weight: 500;
  font-size: 17px;

  @media (min-width: 765px) {
    font-size: 1.5rem;
  }
  //   font-size: 22px;
`

export const Time = styled.div`
  color: ${({ theme }) => theme.colors.cardAltFG};
  font-weight: 500;
  font-size: 14px;
  margin-top: auto;

  & .dot {
    background-color: ${({ theme }) => theme.colors.cardFG};
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    margin: 0 0.31rem;
  }
`

export const ViewMore = styled.div`
  text-align: center;
  margin: 2rem 0;

  a {
    background: ${({ theme }) => theme.colors.chipBG};
    padding: 0.8rem 2rem;
    color: ${({ theme }) => theme.colors.chipFG};
    border-radius: 4rem;
    text-transform: uppercase;
  }

  & a:hover {
    opacity: 0.8;
  }
`
