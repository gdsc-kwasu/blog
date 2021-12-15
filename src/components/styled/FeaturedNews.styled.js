import styled from 'styled-components'

export const FeaturedNewsStyle = styled.section`
  width: 90%;
  margin: 424px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2%;
  @media (min-width: 375px) {
    width: 80%;
    margin: 336px auto 0;
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
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;

  .blog_img {
    height: 250px;
  }

  & .blog_img img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 375px) {
    & :first-of-type {
      margin-top: 80px;
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
`
export const Title = styled.a`
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 500;
  font-size: 17px;
  //   font-size: 22px;
`

export const Time = styled.div`
  color: ${({ theme }) => theme.colors.black_dim};
  font-weight: 500;
  font-size: 14px;
  margin-top: auto;

  & .dot {
    background-color: ${({ theme }) => theme.colors.black};
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    margin: 0 0.31rem;
  }
`

export const ViewMore = styled.a`
  margin: 2rem 0;
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 2rem;
  border-radius: 4rem;
  display: block;
  text-transform: uppercase;

  & :hover {
    opacity: 0.8;
  }
`
