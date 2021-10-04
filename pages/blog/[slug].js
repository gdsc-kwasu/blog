import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Layout from "../../src/layout";
import { BiArrowBack } from "react-icons/bi";

const Content = styled.section`
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
    font-size: 45px;
    font-weight: 700;
    color: var(--google-red);
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
    text-align: justify;
    line-height: 30px;
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
      <Layout>
        <Content>
          <Link href="/">
            <BiArrowBack />
          </Link>
          <img src={cover_image} alt="article cover image" loading="lazy" />
          <h1 className="article-title">{title}</h1>
          <div className="flex-items">
            <p className="author">{author}</p>
            <p className="publish-date">{date}</p>
          </div>
          <div className="article-body">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </Content>
      </Layout>
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
