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
import { PostLisrWrapper } from '~components/styled/PostList.styled'
import PostCardLists from '~components/PostCardLists'
import Pagination from '~components/Pagination'
import tagsInfo from '../../articles/tags.json'

const TagPage = ({ tag, tagDescription, posts }) => {
  return (
    <>
      <Header />
      <Main>
        <PostLisrWrapper>
          <div className="list--info">
            <h2>{tag}</h2>
            <p>{tagDescription}</p>
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

export default TagPage

export const getStaticProps = async (context) => {
  const { tag } = context.params
  const markdownFilePaths = await getArticlesFilePaths()
  const lTag = tag.toLowerCase()
  const tagDescription =
    lTag in tagsInfo ? tagsInfo[lTag].description : '[DESCRITION]'

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
      tagDescription,
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
