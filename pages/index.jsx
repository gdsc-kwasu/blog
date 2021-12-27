import { Main } from '~components/styled/Main.styled'
import Header from '~components/Header'
import Footer from '~components/Footer'
import HeaderNews from '~components/HeaderNews'
import { Container } from '~components/styled/HeaderNews.styled'
import FeaturedNews from '~components/FeaturedNews'
import Community from '~components/Community'
import readingTime from 'reading-time'
import {
  getArticleProps,
  getArticleSlugFromPath,
  getSortedArticlesData,
} from '~utils/article'
import { getImagePlaceholderDataURL } from '~utils/image'

const NUM_FEATURED_POSTS = 6

export default function Home({ headerPost, featuredPosts }) {
  return (
    <Container>
      <Header />

      <Main>
        <HeaderNews post={headerPost} />
        <FeaturedNews posts={featuredPosts} />
        <Community />
      </Main>

      <Footer />
    </Container>
  )
}

export const getStaticProps = async () => {
  const sortedArticlesData = await getSortedArticlesData()

  const posts = await Promise.all(
    sortedArticlesData.slice(0, NUM_FEATURED_POSTS + 1).map(async (data) => {
      const readTime = readingTime(data.content)
      const readTimeText =
        readTime.minutes >= 1
          ? `${Math.round(readTime.minutes)} min read`
          : `${Math.floor(readTime.minutes * 60)} sec read`

      const postProps = getArticleProps(data.data)

      return {
        readTime: {
          text: readTimeText,
        },
        slug: getArticleSlugFromPath(data.filePath),
        coverImagePlaceholder: await getImagePlaceholderDataURL(
          postProps.coverImage
        ),
        ...postProps,
      }
    })
  )

  return {
    props: {
      headerPost: posts[0],
      featuredPosts: posts.slice(1),
    },
  }
}
