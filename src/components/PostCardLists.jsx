import Link from 'next/link'
import { Card, Author } from '~components/styled/PostList.styled'

import advancedFormat from 'dayjs/plugin/advancedFormat'
import dayjs from 'dayjs'
import Image from 'next/image'

dayjs.extend(advancedFormat)

const PostCardLists = ({ posts }) => {
  return (
    <ul>
      {posts.map(
        (
          {
            slug,
            title,
            excerpt,
            coverImage,
            coverImagePlaceholder,
            author,
            authorImage,
            time,
          },
          index
        ) => {
          return (
            <Link key={index} href={`/blog/${slug}`} passHref>
              <Card>
                <Author>
                  <div className="author-image">
                    <img src={authorImage} alt="Author image" />
                  </div>
                  <span>
                    {author} <br />
                    Published {dayjs(time).format('MMMM DD, YYYY')}
                  </span>
                </Author>
                <div className="blog_img">
                  <Image
                    src={coverImage}
                    alt="Post Image"
                    placeholder="blur"
                    blurDataURL={coverImagePlaceholder}
                    layout="fill"
                    unoptimized
                  />
                  {/* <img
                    src={coverImage || '/images/default-cover-image.png'}
                    alt="Post image"
                  /> */}
                </div>
                <li>
                  <h3>{title}</h3>
                  <p>{excerpt}</p>
                </li>
              </Card>
            </Link>
          )
        }
      )}
    </ul>
  )
}

export default PostCardLists
