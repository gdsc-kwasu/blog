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
import Head from 'next/head'

import Blog from '~components/styled/Blog.styled'
import { Main } from '~components/styled/Main.styled'
import { Author } from '~components/styled/PostList.styled'
import Markdown from '~components/Markdown'
import Header from '~components/Header'
import Community from '~components/Community'
import Footer from '~components/Footer'

import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { FiShare2 } from 'react-icons/fi'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'
import TagChip from '~components/TagChip'
import ShareNative from '~components/ShareNative'

dayjs.extend(advancedFormat)

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
  const shareURI = encodeURIComponent(`${process.env.PROD_URI}blog/${slug}/`)

  return (
    <>
      <Head>
        <title>{`${title} | GDSC KWASU's Blog`}</title>
        <meta name="description" content={excerpt} />
        {/* Google's meta */}
        <meta itemprop="name" content={`${title} | GDSC KWASU's Blog`} />
        <meta itemprop="description" content={excerpt} />
        <meta
          itemprop="image"
          content={`https://blog.gdsckwasu.club/${coverImage}`}
        />
        {/* Facebook's meta */}
        <meta property="og:url" content="https://blog.gdsckwasu.club" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${title} | GDSC KWASU's Blog`} />
        <meta property="og:description" content={excerpt} />
        <meta
          property="og:image"
          content={`https://blog.gdsckwasu.club/${coverImage}`}
        />
        {/* Twitter's meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | GDSC KWASU's Blog`} />
        <meta name="twitter:description" content={excerpt} />
        <meta name="twitter:site" content="blog.gdsckwasu.club" />
        <meta
          name="twitter:image"
          content={`https://blog.gdsckwasu.club/${coverImage}`}
        />
      </Head>
      <Header />
      <Main>
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
                <ShareNative url={`${process.env.PROD_URI}blog/${slug}/`}>
                  <FiShare2 />
                </ShareNative>
                <Link
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareURI}`}
                >
                  <a target="_blank" rel="noopener">
                    <FaLinkedinIn />
                  </a>
                </Link>
                <Link href={`https://twitter.com/intent/tweet?url=${shareURI}`}>
                  <a target="_blank" rel="noopener">
                    <FaTwitter />
                  </a>
                </Link>
                <Link
                  href={`https://www.facebook.com/sharer.php?u=${shareURI}`}
                >
                  <a target="_blank" rel="noopener">
                    <FaFacebookF />
                  </a>
                </Link>
              </div>
            </div>
            <article>
              <h1>{title}</h1> <hr />
              <Markdown content={content} />
              <hr />
              <Author>
                <div className="author-image">
                  <img src={authorImage} alt="Author image" />
                </div>
                <span>
                  {author} <br />
                  Publised {dayjs(time).format('MMMM DD, YYYY')}
                </span>
              </Author>
              <hr />
              {(tags.length && (
                <div className="blog--tags">
                  TAGS:
                  {tags.map((tag, index) => (
                    <TagChip tag={tag} key={index} />
                  ))}
                </div>
              )) ||
                null}
            </article>
          </div>
        </Blog>
        <Community />
      </Main>
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
