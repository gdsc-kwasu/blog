import React from "react";
import Link from "next/link";
import Profile from "../../components/Profile";
import { Image, Shimmer } from "react-shimmer";
import { Card, BlogSection } from "./style/blog.styled.js";

const Blog = ({ articles }) => {
  return (
    <BlogSection>
      {articles.map((article, index) => {
        return (
          <Link href={`/blog/${article.slug}`} key={index}>
            <Card>
              <div className="cover-container">
                <Image
                  src={article.frontmatter.cover_image}
                  alt="article cover image"
                  loading="lazy"
                  className="cover-img"
                  fallback={<Shimmer width={352} height={235} />}
                />
              </div>
              <div className="preview-info">
                <h3 className="article-title">{article.frontmatter.title}</h3>
                <p className="article-excerpt">{article.frontmatter.excerpt}</p>
                <Profile
                  author={article.frontmatter.author}
                  img={article.frontmatter.author_img}
                  date={article.frontmatter.date}
                />
              </div>
            </Card>
          </Link>
        );
      })}
    </BlogSection>
  );
};

export default Blog;
