import styled from "styled-components";

const Footer = styled.footer`
  background: #202020;
  padding: 1.5rem 1rem;

  & .footer-content {
    color: #ffffff;
    display: flex;
    flex-direction: column;
  }
  & .footer--social-icons a {
    border: 1px solid #fff;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem;
    margin: 1.5rem 1rem 1.5rem 0;
    width: 34px;
    heigth: 34px;
    cursor: pointer;
  }
  & .footer--social-icons a:nth-of-type(4) {
    // padding: 0.5rem 0.7rem;
  }

  & .footer--copyright {
    display: flex;
    flex-direction: column-reverse;
  }

  & .footer--copyright span {
    display: block;
    // margin-bottom: ;
    line-height: 1.5;
  }

  @media only screen and (min-width: 700px) {
    & .footer-content {
      width: 83%;
    }
  }

  @media only screen and (min-width: 700px) {
    padding: 1rem 0;

    & .footer-content {
      flex-direction: row;
      justify-content: space-between;
      margin: 0 auto;
      align-items: center;
      width: 90%;
      flex-wrap: wrap;
      max-width: 1400px;
    }
    & .logo {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    & h3 {
      display: inline-block;
    }
    & .footer--social-icons {
      order: 1;
    }
    & .footer--social-icons a {
      margin: 0.5rem;
    }
    & .footer--copyright {
      gap: 8px;
      flex-direction: row;
    }
  }
`;

export default Footer;
