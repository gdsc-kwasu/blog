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
import Image from 'next/image'

dayjs.extend(advancedFormat)

const FeaturedNews = ({ posts }) => {
  return (
    <>
      <FeaturedNewsStyle>
        {posts.map((post) => {
          return (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
              <Card>
                <div className="blog_img">
                  <Image
                    src={post.coverImage}
                    alt="Post Image"
                    placeholder="blur"
                    blurDataURL={post.coverImagePlaceholder}
                    layout="fill"
                    unoptimized
                  />
                </div>
                <Describtion>
                  <Title>{post.title}</Title>
                  <Time>
                    {dayjs(post.time).format('MMMM Do')}
                    <span className="dot"></span>
                    {post.readTime.text}
                  </Time>
                </Describtion>
              </Card>
            </Link>
          )
        })}
      </FeaturedNewsStyle>
      <ViewMore>
        <Link href="/posts">View More</Link>
      </ViewMore>
    </>
  )
}

export default FeaturedNews
