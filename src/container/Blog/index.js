import React from "react";
import Link from "next/link";
import styled from "styled-components";

const BlogSection = styled.section`
  padding: var(--desktop-pad);
  display: flex;
  flex-flow: column;

  @media only screen and (max-width: 576px) {
    padding: var(--mobile-pad);
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    padding: var(--tablet-pad);
  }

  @media only screen and (min-width: 992px) and (max-width: 1024px) {
    padding: var(--mobile-pad);
  }
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 1px solid var(--google-green);

  :hover {
    transform: scale(1.01);
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.04);
    transition: all ease-in 0.3s;
    cursor: pointer;
  }

  .cover-container {
    height: 100%;
    width: 39%;
  }

  .cover-container img {
    width: 100%;
    height: 100%;
  }

  .preview-info {
    width: 70%;
    margin: 0 0 0 30px;
    height: 100%;
  }

  .article-title {
    padding-top: 0;
    font-size: 30px;
    margin-top: 0px;
    color: var(--google-green);
    font-weight: 700;
  }

  .article-excerpt {
    height: 100%;
    margin-top: -10px;
    font-size: 16px;
    line-height: 22px;
    text-align: justify;
    padding: 0 30px 0 0;
  }

  .flex-items {
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin: 1px 0 0 0;
    font-size: 14px;
    color: var(--google-red);
  }

  @media only screen and (max-width: 576px) {
    flex-flow: column;
    width: 100%;

    .cover-container {
      width: 100%;
      height: 100%;
    }

    .preview-info {
      width: 100%;
      margin: 0;
    }

    .flex-items {
      width: 100%;
    }
  }

  @media only screen and (min-width: 577px) and (max-width: 992px) {
    flex-flow: column;
    width: 100%;

    .cover-container {
      width: 100%;
      height: 100%;
    }

    .preview-info {
      width: 100%;
      margin: 0;
    }

    .flex-items {
      width: 30%;
    }
  }
`;

const Blog = ({ articles }) => {
  return (
    <BlogSection>
      {articles.map((article, index) => {
        return (
          <Link href={`/blog/${article.slug}`}>
            <Card key={index}>
              <div className="cover-container">
                <img
                  src={article.frontmatter.cover_image}
                  alt="article cover image"
                />
              </div>
              <div className="preview-info">
                <h3 className="article-title">{article.frontmatter.title}</h3>
                <p className="article-excerpt">{article.frontmatter.excerpt}</p>
                <div className="flex-items">
                  <p className="author">{article.frontmatter.author}</p>
                  <p className="published-date">{article.frontmatter.date}</p>
                </div>
              </div>
            </Card>
          </Link>
        );
      })}
    </BlogSection>
  );
};

export default Blog;
