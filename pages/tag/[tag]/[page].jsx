import { formatTags, getArticlesData } from '~utils/article'
import { getStaticPaginationProps } from '~utils/pagination'
import Header from '~components/Header'
import Footer from '~components/Footer'
import { Main } from '~components/styled/Main.styled'
import { PostLisrWrapper } from '~components/styled/PostList.styled'
import PostCardLists from '~components/PostCardLists'
import Pagination from '~components/Pagination'
import tagsInfo from '../../../articles/tags.json'
import { NUM_OF_POSTS_PER_PAGE } from '~utils/pagination'

const TagPage = ({
  tag,
  tagDescription,
  posts,
  totalPostCount,
  currentPage,
  totalPageCount,
}) => {
  return (
    <>
      <Header />
      <Main>
        <PostLisrWrapper>
          <div className="list--info">
            <h2>{tag}</h2>
            <p>{tagDescription}</p>
            <span>Posts: {totalPostCount}</span>
          </div>
          <div className="list--posts">
            <PostCardLists posts={posts} />
            <Pagination
              baseURI={`/tag/${tag}`}
              current={currentPage}
              total={totalPageCount}
            />
          </div>
        </PostLisrWrapper>
      </Main>
      <Footer />
    </>
  )
}

export default TagPage

// TODO: Refactor with better approach
// seriously there should be a better way to handle static Pagination

export const getStaticProps = async (context) => {
  const { tag, page } = context.params
  const currentPage = +page || 1

  const lTag = tag.toLowerCase()
  const tagDescription =
    lTag in tagsInfo ? tagsInfo[lTag].description : '[DESCRITION]'

  const staticProps = await getStaticPaginationProps(currentPage, tag)

  return {
    props: {
      tag,
      tagDescription,
      ...staticProps,
    },
  }
}

export const getStaticPaths = async () => {
  const articlesData = await getArticlesData()
  const allTags = new Set()

  articlesData.forEach((data) => {
    const tags = formatTags(data.data.tags)
    tags.forEach((tag) => allTags.add(tag))
    return tags
  })

  const paths = []
  for (const tag of allTags) {
    const tagPosts = articlesData.filter((data) => {
      const tags = formatTags(data.data.tags)
      return tags.indexOf(tag) >= 0
    })

    const pagesCount = Math.ceil(tagPosts.length / NUM_OF_POSTS_PER_PAGE)
    paths.push(
      ...Array.from({ length: pagesCount }).map((_, index) => ({
        params: {
          tag,
          page: (index + 1).toString(),
        },
      }))
    )
  }

  return {
    paths,
    fallback: false,
  }
}
