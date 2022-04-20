import styled from 'styled-components'

export const Content = styled.section`
  padding: var(--desktop-pad);

  svg {
    height: 70px;
    font-size: 26px;
    color: var(--google-green);

    :hover {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }

  .article-title {
    font-size: 65px;
    font-weight: 700;
    margin-top: -20px;
  }

  .flex-items {
    margin-top: -45px;
    display: flex;
    width: 20%;
    justify-content: space-between;
    color: var(--google-blue);
  }

  .article-body {
    font-size: 22px;
    word-spacing: 2px;
    line-height: 30px;
    margin: 10px 0 0 0;
    border-top: 1px solid var(--ghost-border);
    font-family: var(--merriweather);
  }

  @media only screen and (min-width: 992px) (max-width: 1024px) {
    padding: var(--mobile-pad);

    .flex-items {
      width: 30%;
    }
  }

  @media only screen and (min-width: 0) and (max-width: 576px) {
    padding: var(--mobile-pad);

    .article-title {
      font-size: 27px;
    }

    .article-body {
      font-size: 16px;
    }

    .flex-items {
      width: 100%;
      margin: -20px 0 0 0;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 768px) {
    padding: var(--tablet-pad);

    .article-title {
      font-size: 36px;
    }

    .article-body {
      font-size: 20px;
    }

    .flex-items {
      width: 35%;
      margin: -28px 0 0 0;
    }
  }
`
