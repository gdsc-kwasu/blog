import React from "react";
import Link from "next/link";
import styled from "styled-components";
// import Image from "next/image"

const BlogSection = styled.section`
  padding: 0 120px 0 120px;
`;

const Card = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid red;
`;

const Blog = ({ articles }) => {
  return (
    <BlogSection>
      {articles.map((article, index) => {
        return (
          <Card key={index}>
            <div className="cover-container">
              <img
                src={article.frontmatter.cover_image}
                alt="article cover image"
              />
              <div className="flex-items">
                {article.frontmatter.date}
                {article.frontmatter.author}
              </div>
            </div>
            <div className="preview-info">
              <h3>{article.frontmatter.title}</h3>
              <p className="frontmatter">{article.frontmatter.excerpt}</p>
              <Link href={`/blog/${article.slug}`}>Read more</Link>
            </div>
          </Card>
        );
      })}
    </BlogSection>
  );
};

export default Blog;
