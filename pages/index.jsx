import { promises as fs } from 'fs'
import { Main } from '~components/styled/Main.styled'
import Header from '~components/Header'
import Footer from '~components/Footer'
import HeaderNews from '~components/HeaderNews'
import { Container } from '~components/styled/HeaderNews.styled'
import FeaturedNews from '~components/FeaturedNews'
import Community from '~components/Community'
import NewsLetter from '~components/NewsLetter'
import readingTime from 'reading-time'
import matter from 'gray-matter'
import {
  getArticlesFilePaths,
  getArticleProps,
  getArticleSlugFromPath,
} from '~utils/article'

const NUM_FEATURED_POSTS = 6

export default function Home({ headerPost, featuredPosts }) {
  return (
    <Container>
      <Header />

      <Main>
        <HeaderNews post={headerPost} />
        <FeaturedNews posts={featuredPosts} />
        <Community />
        <NewsLetter />
      </Main>

      <Footer />
    </Container>
  )
}

export const getStaticProps = async () => {
  const markdownFilePaths = await getArticlesFilePaths()
  const posts = await Promise.all(
    markdownFilePaths.map(async (filePath) => {
      const fileContent = await fs.readFile(filePath)
      const { content, data } = matter(fileContent.toString())
      const readTime = readingTime(content)
      const readTimeText =
        readTime.minutes >= 1
          ? `${Math.round(readTime.minutes)} min read`
          : `${Math.floor(readTime.minutes * 60)} sec read`

      return {
        readTime: {
          text: readTimeText,
        },
        slug: getArticleSlugFromPath(filePath),
        ...getArticleProps(data),
      }
    })
  )

  const sortedPosts = posts.sort((postA, postB) => postB.time - postA.time)

  return {
    props: {
      headerPost: sortedPosts[0],
      featuredPosts: sortedPosts.slice(0, NUM_FEATURED_POSTS),
    },
  }
}
