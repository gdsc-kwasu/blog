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
import { Main } from '~components/styled/Main.styled'
import { TagWrapper } from '~components/styled/Tag.styled'
import Tags from '~components/Tag'
import Pagination from '~components/Pagination'

const TagPage = ({ tag, posts }) => {
  return (
    <>
      <Header />
      <Main>
        <TagWrapper>
          <div className="intro">
            <h1>Tag Name here...</h1>
            {/* tag description below */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              enim a cupiditate assumenda aliquid quibusdam totam, eveniet
              aperiam reprehenderit eligendi?
            </p>
            {/* Number of posts in tag */}
            <span>No of posts: 10</span>
          </div>
          <div className="tag--posts">
            <h1>{tag} posts</h1>
            <Tags posts={posts} />
            <Pagination />
          </div>
        </TagWrapper>
      </Main>

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
        content,
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
