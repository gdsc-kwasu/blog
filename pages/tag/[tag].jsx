import {
  formatTags,
  getPostsFilePaths,
  getPostProps,
  getPostSlugFromPath,
} from '~scripts/post_utils'
import fs from 'fs/promises'
import matter from 'gray-matter'
import Link from 'next/link'

const TagPage = ({ tag, posts }) => {
  return (
    <div>
      <h1>{tag} posts</h1>

      <ul>
        {posts.map(({ slug, title }, index) => (
          <li key={index}>
            <Link href={`/post/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TagPage

export const getStaticProps = async (context) => {
  const { tag } = context.params
  const markdownFilePaths = await getPostsFilePaths()

  const datas = await Promise.all(
    markdownFilePaths.map(async (filePath) => {
      const fileContent = await fs.readFile(filePath)

      const { content, data } = matter(fileContent)
      const tags = formatTags(data.tags)

      // post doesn't have params tag
      if (tags.indexOf(tag) < 0) {
        return null
      }

      return {
        content,
        slug: getPostSlugFromPath(filePath),
        ...getPostProps(data),
      }
    })
  )

  return {
    props: {
      tag,
      // remove null
      posts: datas.filter(Boolean),
    },
  }
}

export const getStaticPaths = async () => {
  const markdownFilePaths = await getPostsFilePaths()
  const allTags = new Set()

  await Promise.all(
    markdownFilePaths.map(async (filePath) => {
      const fileContent = await fs.readFile(filePath)

      const data = matter(fileContent)
      const tags = formatTags(data.data.tags)
      tags.forEach((tag) => allTags.add(tag))

      return tags
    })
  )

  return {
    paths: Array.from(allTags.values()).map((tag) => ({ params: { tag } })),
    fallback: false,
  }
}
