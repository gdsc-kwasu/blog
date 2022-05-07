import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export const HeaderNewsStyle = styled.article`
  background: ${({ theme }) => theme.colors.headerSectionBG};
  color: ${({ theme }) => theme.colors.headerSectionFG};
  position: relative;
  height: 250px;
  padding: 2rem 1rem;

  & .title {
    text-align: center;
    font-weight: 700;
  }

  & .blog_sub_title {
    text-align: center;
    padding-top: 12px;
    padding-bottom: 24px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 160%;
    font-size: 1.1rem;
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

export const Card = styled.a`
  --shadow-color: ${({ theme }) => theme.colors.headerCardShadowColor};
  background: ${({ theme }) => theme.colors.headerCardBG};
  color: ${({ theme }) => theme.colors.headerCardFG};

  filter: drop-shadow(0px 10px 20px var(--shadow-color))
    drop-shadow(0px 2px 6px var(--shadow-color))
    drop-shadow(0px 0px 1px var(--shadow-color));
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

  & .col-1 {
    position: relative;
    min-height: 300px;
  }

  & img {
    max-width: 100%;
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  & .col-2 {
    padding: 1rem;
  }

  & .topic {
    color: ${({ theme }) => theme.colors.headerPrimaryFG};
    font-weight: 700;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  & .blog_info {
    font-size: 14px;
    // line-height: 2;
  }

  & .blog_info a {
    font-weight: 500;
    text-decoration: underline;
  }
  & .blog__info_text {
    display: none;
  }
  & .blog_time {
    width: 100%;
    display: inline-block;
    margin-top: 1rem;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.headerAltFG};
  }
  & .dot {
    background-color: ${({ theme }) => theme.colors.headerCardFG};
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 600px;
  }

  @media (min-width: 575px) {
    /* position: absolute; */
    /* left: 50%; */
    margin: 50px auto 0;
    width: 83%;
    max-height: 400px;

    & .col {
      width: 50%;
    }

    & .col-1 {
      min-height: 400px;
    }

    & .col-2 {
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      max-height: 422px;
    }
    & img {
      height: 400px;
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

  @media (min-width: 1100px) {
    max-height: 500px;

    & .topic {
      font-size: 2rem;
    }
    & blog_info {
      font-size: 1.125rem;
    }

    & .col-2 {
      padding: 2.625rem 3.125rem;
    }
  }

  @media (max-width: 910px) {
    & .blog_time {
    }
  }
`

export const Badge = styled.button`
  background: ${({ theme }) => theme.colors.cardBadgeBG};
  color: ${({ theme }) => theme.colors.cardBadgeFG};
  border: none;
  border-radius: 30px;
  padding: 0.1rem 0;
  width: 82px;
  font-weight: 500;
  margin-bottom: 1rem;
`
