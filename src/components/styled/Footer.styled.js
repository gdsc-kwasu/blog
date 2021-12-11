import styled from "styled-components";

const Footer = styled.footer`
  background: #202020;
  padding: 1.5rem 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  //   justify-content: space-between;

  & .footer--social-icons a {
    border: 1px solid #fff;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem;
    margin: 1.5rem 1rem 1.5rem 0;
    width: 34px;
    heigth: 34px;
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
`;

export default Footer;
