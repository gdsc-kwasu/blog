import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Head from "next/head";

const Content = styled.section`
  padding: var(--desktop-pad);
`;

const BlogPage = ({
  slug,
  frontmatter: { title, date, author, cover_image },
  content,
}) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title} &mdash; GDSC KWASU Blog</title>
      </Head>
      <Link href="/">back</Link>
      <Content>
        <img src={cover_image} alt="article cover image" />
        <h1 className="article-title">{title}</h1>
        <div className="flex-items">
          <p className="author">{author}</p>
          <p className="publish-date">{date}</p>
        </div>
        <div className="article-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default BlogPage;

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("articles"));

  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log(paths);

  return {
    paths,
    // // in situations where you try to access a path
    // // that does not exist. it'll return a 404 page
    fallback: false,
  };
}

// destructuring params to get the unique slugs
export async function getStaticProps({ params: { slug } }) {
  //fetch the particular file based on the slug
  const articles = fs.readFileSync(
    path.join("articles", `${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(articles);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
