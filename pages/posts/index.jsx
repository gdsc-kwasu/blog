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
import { Main } from '~components/styled/Main.styled'
import { PostLisrWrapper } from '~components/styled/PostList.styled'
import Pagination from '~components/Pagination'

const PostsPage = ({ posts }) => {
  return (
    <>
      <Header />
      <Main>
        <PostLisrWrapper>
          <div className="list--info">
            <h2>Posts</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              enim a cupiditate assumenda aliquid quibusdam totam, eveniet
              aperiam reprehenderit eligendi?
            </p>
            <span>Posts: 10</span>
          </div>
          <div className="list--posts">
            <PostCardLists posts={posts} />
            <Pagination />
          </div>
        </PostLisrWrapper>
      </Main>

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
