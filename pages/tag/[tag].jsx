import {
  formatTags,
  getArticlesFilePaths,
  getArticleProps,
  getArticleSlugFromPath,
} from '~utils/article'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Header from '~components/Header'
import Footer from '~components/Footer'

const TagPage = ({ tag, posts }) => {
  return (
    <>
      <Header />
      <div>
        <h1>{tag} posts</h1>

        <ul>
          {posts.map(({ slug, title }, index) => (
            <li key={index}>
              <Link href={`/blog/${slug}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default TagPage

export const getStaticProps = async (context) => {
  const { tag } = context.params
  const markdownFilePaths = await getArticlesFilePaths()

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
        slug: getArticleSlugFromPath(filePath),
        ...getArticleProps(data),
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
  const markdownFilePaths = await getArticlesFilePaths()
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
