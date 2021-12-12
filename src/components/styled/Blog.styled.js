import styled from "styled-components";

const Blog = styled.section`
  & h1,
  h2 {
    color: green;
  }

  & h1 {
    font-size: 1.5rem;
  }
  & h2 {
    font-size: 1.125rem;
    margin-top: 1rem;
  }
  & .blog--cover-image {
    // background: red;
    width: 100%;
    height: 300px;
    position: relative;
  }

  & .blog--cover-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .blog--social-wrapper {
    margin-top: 1rem;
  }
  & .blog--social-wrapper span {
    color: #797979;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 0.5rem;
  }
  & .blog--social-icons {
    display: flex;
    gap: 1rem;
  }
  & .blog--social-icons a {
    color: #0f9d58;
    border: 1px solid #0f9d58;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    padding: 0.5rem;
    width: 34px;
    heigth: 34px;
  }

  & .blog--content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }

  // the html tags(div, p and img) here can be seen on the markup in the browser dev tools
  & article div {
    margin: 1.5rem 0;
  }
  & article div p {
    font-size: 1.125rem;
    margin-bottom: 1.2rem;
  }
  & article img {
    width: 100%;
  }

  & article .blog--author {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  & article .blog--author img {
    width: 50%;
  }
`;

export default Blog;
