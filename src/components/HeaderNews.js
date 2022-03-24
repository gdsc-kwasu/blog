import React from 'react'
import {
  Badge,
  Card,
  HeaderNewsStyle,
} from '~components/styled/HeaderNews.styled'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'
import Link from 'next/link'
import Image from 'next/image'

dayjs.extend(advancedFormat)

const HeaderNews = ({ post }) => {
  return (
    <HeaderNewsStyle>
      <h2 className="title">Our Blog</h2>
      <div className="blog_sub_title">
        Here, you'll find articles aroud our journey as a community, the
        struggles we've faced, the one's we're still facing and how we're
        working towards creating solutions to these problems that are lurking
        around us. So, please come with us! 😃
      </div>
      {post && (
        <Link href={`/${post.slug}`} passHref>
          <Card>
            <div className="col-1 col">
              <Image
                src={post.coverImage}
                alt="Blog Image"
                placeholder="blur"
                blurDataURL={post.coverImagePlaceholder}
                layout="fill"
                unoptimized
              />
            </div>

            <div className="col-2 col">
              <div>
                <Badge> Latest </Badge>

                <h3 className="topic">{post.title}</h3>

                <div className="blog_info">{post.excerpt}</div>
              </div>

              <small className="blog_time">
                {dayjs(post.time).format('MMMM Do')}{' '}
                <span className="dot"></span> {post.readTime.text}
              </small>
            </div>
          </Card>
        </Link>
      )}
    </HeaderNewsStyle>
  )
}

export default HeaderNews
