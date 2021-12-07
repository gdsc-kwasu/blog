import Link from 'next/link'
import {
  getPostsFilePaths,
  getPostProps,
  getPostSlugFromPath,
} from '~scripts/post_utils'
import fs from 'fs/promises'
import matter from 'gray-matter'

const Posts = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>

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

export default Posts

export const getStaticProps = async () => {
  const markdownFilePaths = await getPostsFilePaths()

  const datas = await Promise.all(
    markdownFilePaths.map(async (filePath) => {
      const fileContent = await fs.readFile(filePath)
      const { content, data } = matter(fileContent.toString())

      return {
        content,
        slug: getPostSlugFromPath(filePath),
        ...getPostProps(data),
      }
    })
  )

  return { props: { posts: datas } }
}
