import Link from 'next/link'
import {
  ViewMore,
  Card,
  Describtion,
  FeaturedNewsStyle,
  Time,
  Title,
} from './styled/FeaturedNews.styled'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'

dayjs.extend(advancedFormat)

const FeaturedNews = ({ posts }) => {
  return (
    <FeaturedNewsStyle>
      {posts.map((post) => {
        return (
          <Card key={post.slug}>
            <div className="blog_img">
              <img
                src={post.coverImage || '/images/default-cover-image.png'}
                alt="Post image"
              />
            </div>
            <Describtion>
              <Link href={`/blog/${post.slug}`} passHref>
                <Title>{post.title}</Title>
              </Link>
              <Time>
                {dayjs(post.time).format('MMMM Do')}
                <span className="dot"></span>
                {post.readTime.text}
              </Time>
            </Describtion>
          </Card>
        )
      })}
      <Link href="/posts" passHref>
        <ViewMore>View More</ViewMore>
      </Link>
    </FeaturedNewsStyle>
  )
}

export default FeaturedNews
