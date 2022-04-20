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
import Head from "next/head"

const NUM_FEATURED_POSTS = 6

export default function Home({ headerPost, featuredPosts }) {
  return (
    <React.Fragment>
      <Head>
      <title>Google Developer Student Clubs, KWASU</title>
        <meta
          name="description"
          content="All the articles around our progresses, setbacks, and struggles and how we're constantly innovating as a community of students"
        />
        {/* Google's meta */}
        <meta itemprop="name" content="Google Developer Student Club, KWASU" />
        <meta
          itemprop="description"
          content="All the articles around our progresses, setbacks, and struggles and how we're constantly innovating as a community of students"
        />
        <meta itemprop="image" content="https://blog.gdsckwasu.club/images/gdsc.png" />
        {/* Facebook's meta */}
        <meta property="og:url" content="blog.gdsckwasu.club" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Google Developer Student Clubs, KWASU"
        />
        <meta
          property="og:description"
          content="All the articles around our progresses, setbacks, and struggles and how we're constantly innovating as a community of students"
        />
        <meta property="og:image" content="https://blog.gdsckwas.club/images/gdsc.png" />
        {/* Twitter's meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Developer Student Clubs, KWASU" />
        <meta
          name="twitter:description"
          content="All the articles around our progresses, setbacks, and struggles and how we're constantly innovating as a community of students"
        />
        <meta name="twitter:site" content="blog.gdsckwasu.club" />
        <meta name="twitter:image" content="https://blog.gdsckwasu.club/images/gdsc.png" />
      </Head>
      <Container>
      <Header />
      <Main>
        <HeaderNews post={headerPost} />
        <FeaturedNews posts={featuredPosts} />
        <Community />
      </Main>
      <Footer />
    </Container>
    </React.Fragment>
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
