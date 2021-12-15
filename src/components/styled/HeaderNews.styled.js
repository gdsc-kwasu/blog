import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export const HeaderNewsStyle = styled.article`
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  height: 250px;
  padding: 2rem 1rem;
  & .title {
    text-align: center;
  }
  & .blog_sub_title {
    text-align: center;
    font-size: 14px;
    padding-bottom: 24px;
    max-width: 566px;
    margin: 0 auto;
  }
  @media (min-width: 575px) {
    height: 450px;
    padding: 4rem 1rem 0rem;

    & .title {
      font-size: 48px;
      margin-bottom: 10px;
    }
  }
`

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04))
    drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
  border-radius: 4px;
  margin: 2px auto 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;

  & .col {
    width: 100%;
    height: 100%;
  }

  & img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }

  & .col-2 {
    padding: 1rem;
  }

  & .topic {
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  & .blog_info {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.black};
  }
  & .blog__info_text {
    display: none;
  }
  & .blog_time {
    width: 100%;
    display: inline-block;
    margin-top: 1rem;
    font-size: 12px;
  }
  & .dot {
    background-color: ${({ theme }) => theme.colors.black};
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 600px;
  }

  @media (min-width: 575px) {
    /* position: absolute; */
    /* left: 50%; */
    margin: 50px auto 0;
    width: 80%;
    max-height: 400px;
    & .col {
      width: 50%;
    }
    & .col-2 {
      padding: 1rem 1.5rem;
      /* display: flex;
      flex-direction: column; */
      /* justify-content: space-between; */
      /* align-items: center; */
    }
    & img {
      height: 400px;
      object-fit: cover;
    }

    & .blog_info {
      line-height: 200%;
    }
    & .blog__info_text {
      display: block;
    }

    & .topic {
      font-size: 30px;
    }

    & .blog_info {
      font-size: 16px;
    }

    & .blog_time {
      padding-top: 1rem;
    }
  }

  @media (max-width: 910px) {
    & .topic {
      font-size: 16px;
    }
    & .blog_time {
    }
  }
`

export const Badge = styled.button`
  background-color: ${({ theme }) => theme.colors.badge};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 30px;
  padding: 0.1rem 0;
  width: 82px;
  font-weight: 500;
  margin-bottom: 1rem;
`
