import Link from 'next/link'
import {
  getArticlesFilePaths,
  getArticleProps,
  getArticleSlugFromPath,
} from '~utils/article'
import fs from 'fs/promises'
import matter from 'gray-matter'

const PostsPage = ({ posts }) => {
  return (
    <div>
      <h1>PostsPage</h1>

      <ul>
        {posts.map(({ slug, title }, index) => (
          <li key={index}>
            <Link href={`/blog/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsPage

export const getStaticProps = async () => {
  const markdownFilePaths = await getArticlesFilePaths()

  const datas = await Promise.all(
    markdownFilePaths.map(async (filePath) => {
      const fileContent = await fs.readFile(filePath)
      const { content, data } = matter(fileContent.toString())

      return {
        content,
        slug: getArticleSlugFromPath(filePath),
        ...getArticleProps(data),
      }
    })
  )

  return { props: { posts: datas } }
}
