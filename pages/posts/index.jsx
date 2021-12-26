import {
  formatTags,
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
import TagChip from '~components/TagChip'

const PostsPage = ({ posts, tags }) => {
  return (
    <>
      <Header />
      <Main>
        <PostLisrWrapper>
          <div className="list--info">
            <h2>Posts</h2>
            <p>
              <strong>TAGS:</strong>
              <br />
              {tags.map((tag, index) => (
                <TagChip tag={tag} key={index} />
              ))}
            </p>
            <span>Posts: {posts.length}</span>
          </div>
          <div className="list--posts">
            <PostCardLists posts={posts} />
            <Pagination current={1} total={1} />
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
  const allTags = new Set()

  const datas = await Promise.all(
    markdownFilePaths.map(async (filePath) => {
      const fileContent = await fs.readFile(filePath)
      const { content, data } = matter(fileContent.toString())

      const tags = formatTags(data.tags)
      tags.forEach((tag) => allTags.add(tag))

      return {
        content,
        slug: getArticleSlugFromPath(filePath),
        ...getArticleProps(data),
      }
    })
  )

  return { props: { posts: datas, tags: Array.from(allTags.values()) } }
}
