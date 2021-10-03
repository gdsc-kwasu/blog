import React from "react";
import Link from "next/link";
import styled from "styled-components";
// import Image from "next/image"

const BlogSection = styled.section`
  padding: var(--desktop-pad);
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
    color: var(--google-red);
  }

  .article-excerpt {
    height: 100%;
    margin-top: -10px;
  }

  .flex-items {
    width: 30%;
    display: flex;
    justify-content: space-between;
    margin: 50px 0 0 0;
    font-size: 14px;
  }

  .author {
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
