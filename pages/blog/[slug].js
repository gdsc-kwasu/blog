import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import React from "react";
import Head from "next/head";
import Layout from "../../src/layout";
import { BiArrowBack } from "react-icons/bi";
import Profile from "../../src/components/Profile";
import { Content } from "./style/slug.styled";

const BlogPage = ({
  slug,
  frontmatter: { title, date, author, cover_image, author_img },
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
          <h1 className="article-title">{title}</h1>
          <Profile author={author} img={author_img} date={date} />
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
