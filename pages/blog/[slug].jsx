import {
  getArticlesFilePaths,
  getArticleProps,
  getArticleSlugFromPath,
  articleSlugToFilePath,
} from "~utils/article";
import { promises as fs } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import React from "react";
import Markdown from "~components/Markdown";
import HeaderContent from "~components/Header";
import FooterContent from "~components/Footer";

/**
 *
 * props {
 *  title: string // the title of the article
 *  author: string // the author of the article
 *  authorImage: string // the image path of the author image
 *  excerpt: string // the excerpt of the article
 *  content: string // the markdown content of the article
 *  time: number // the milliseconds of the date of the article
 *  cover?: string // the image path of the cover image specified in the article (can be null)
 *  slug: string // the slug of the article
 *  tags: string[] // Array of string of the tags used in the article (empty array if non is specified)
 * }
 */
const PostPage = ({
  title,
  author,
  authorImage,
  excerpt,
  content,
  time,
  coverImage,
  slug,
  tags,
}) => {
  return (
    <>
      <HeaderContent />
      <div>
        {coverImage && (
          <img src={coverImage} width={600} height={250} alt="Cover image" />
        )}
        <h1>{title}</h1> <hr />
        <Markdown content={content} />
        <hr />
        Post by {author} - Posted on {new Date(time).toLocaleString()}
        <img src={authorImage} alt="Author image" width={100} height={100} />
        <hr />
        {tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Link href={`/tag/${tag}`}>
              <a>#{tag}</a>
            </Link>{" "}
            &nbsp;
          </React.Fragment>
        ))}
      </div>

      <FooterContent />
    </>
  );
};

export default PostPage;

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const filePath = articleSlugToFilePath(slug);
  const fileContent = await fs.readFile(filePath);

  const { content, data } = matter(fileContent.toString());

  return {
    props: {
      slug,
      content: content,
      ...getArticleProps(data),
    },
  };
};

export const getStaticPaths = async () => {
  const markdownFilePaths = await getArticlesFilePaths();
  const slugs = markdownFilePaths.map((filePath) =>
    getArticleSlugFromPath(filePath)
  );

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};
