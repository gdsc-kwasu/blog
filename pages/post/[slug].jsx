import {
  getPostsFilePaths,
  getPostProps,
  getPostSlugFromPath,
  postSlugToFilePath,
} from '~scripts/post_utils'
import fs from 'fs/promises'
import matter from 'gray-matter'
import Link from 'next/link'
import React from 'react'
import Markdown from '~components/Markdown'

/**
 *
 * props {
 *  title: string // the title of the post
 *  author: string // the author of the post
 *  content: string // the markdown content of the post
 *  time: number // the milliseconds of the date of the post
 *  banner?: string // the image path of the banner specified in the post (can be null)
 *  slug: string // the slug of the post
 *  tags: string[] // Array of string of the tags used in the post (empty array if non is specified)
 * }
 */
const PostPage = ({ title, author, content, time, banner, slug, tags }) => {
  return (
    <div>
      {banner && (
        <img src={banner} width={600} height={250} alt="Banner image" />
      )}
      <h1>{title}</h1> <hr />
      <Markdown content={content} />
      <hr />
      Post by {author} - Posted on {new Date(time).toLocaleString()}
      <hr />
      {tags.map((tag, index) => (
        <React.Fragment key={index}>
          <Link href={`/tag/${tag}`}>
            <a>#{tag}</a>
          </Link>{' '}
          &nbsp;
        </React.Fragment>
      ))}
    </div>
  )
}

export default PostPage

export const getStaticProps = async (context) => {
  const { slug } = context.params
  const filePath = postSlugToFilePath(slug)
  const fileContent = await fs.readFile(filePath)

  const { content, data } = matter(fileContent.toString())

  return {
    props: {
      slug,
      content: content,
      ...getPostProps(data),
    },
  }
}

export const getStaticPaths = async () => {
  const markdownFilePaths = await getPostsFilePaths()
  const slugs = markdownFilePaths.map((filePath) =>
    getPostSlugFromPath(filePath)
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
