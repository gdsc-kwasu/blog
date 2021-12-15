import {
  getArticlesFilePaths,
  getArticleProps,
  getArticleSlugFromPath,
  articleSlugToFilePath,
} from '~utils/article'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import React from 'react'

import Markdown from '~components/Markdown'
import Header from '~components/Header'
import Blog from '~components/styled/Blog.styled'
import Community from '~components/Community'
import Footer from '~components/Footer'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

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
      <Header />
      <Blog>
        {coverImage && (
          <div className="blog--cover-image">
            <img src={coverImage} alt="Cover image" />
          </div>
        )}
        <div className="blog--content">
          <div className="blog--social-wrapper">
            <span>Share</span>
            <div className="blog--social-icons">
              <Link href="/">
                <a>
                  <AiFillInstagram />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <FaLinkedinIn />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <FaTwitter />
                </a>
              </Link>
              <Link href="/">
                <a>
                  <FaFacebookF />
                </a>
              </Link>
            </div>
          </div>
          <article>
            <h1>{title}</h1> <hr />
            <Markdown content={content} />
            <hr />
            <div className="blog--author">
              <img
                src={authorImage}
                alt="Author image"
                width={100}
                height={100}
              />
              <span>
                Post by {author} - Posted on {new Date(time).toLocaleString()}
              </span>
            </div>
            <hr />
            {tags.map((tag, index) => (
              <React.Fragment key={index}>
                <Link href={`/tag/${tag}`}>
                  <a>#{tag}</a>
                </Link>{' '}
                &nbsp;
              </React.Fragment>
            ))}
          </article>
        </div>
      </Blog>
      <Community />
      <Footer />
    </>
  )
}

export default PostPage

export const getStaticProps = async (context) => {
  const { slug } = context.params
  const filePath = articleSlugToFilePath(slug)
  const fileContent = await fs.readFile(filePath)

  const { content, data } = matter(fileContent.toString())

  return {
    props: {
      slug,
      content: content,
      ...getArticleProps(data),
    },
  }
}

export const getStaticPaths = async () => {
  const markdownFilePaths = await getArticlesFilePaths()
  const slugs = markdownFilePaths.map((filePath) =>
    getArticleSlugFromPath(filePath)
  )

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}
