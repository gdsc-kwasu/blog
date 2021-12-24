import Link from 'next/link'
import {
  getArticlesFilePaths,
  getArticleProps,
  getArticleSlugFromPath,
} from '~utils/article'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import Header from '~components/Header'
import Footer from '~components/Footer'
import PostCardLists from '~components/PostCardLists'
import { PostWrapper } from '~components/styled/Post.styled'
import Pagination from '~components/Pagination'

const PostsPage = ({ posts }) => {
  return (
    <>
      <Header />
      <PostWrapper>
        <h1>PostsPage</h1>
        <PostCardLists posts={posts} />
        <Pagination />
      </PostWrapper>

      <Footer />
    </>
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
