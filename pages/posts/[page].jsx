import { getArticlesFilePaths } from '~utils/article'
import {
  getStaticPaginationProps,
  NUM_OF_POSTS_PER_PAGE,
} from '~utils/pagination'
import Header from '~components/Header'
import Footer from '~components/Footer'
import PostCardLists from '~components/PostCardLists'
import { Main } from '~components/styled/Main.styled'
import { PostLisrWrapper } from '~components/styled/PostList.styled'
import Pagination from '~components/Pagination'
import TagChip from '~components/TagChip'

const PostsPage = ({
  tags,
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
            <h2>Posts</h2>
            <p>
              <strong>TAGS:</strong>
              <br />
              {tags.map((tag, index) => (
                <TagChip tag={tag} key={index} />
              ))}
            </p>
            <span>Posts: {totalPostCount}</span>
          </div>
          <div className="list--posts">
            <PostCardLists posts={posts} />
            <Pagination
              baseURI="/posts"
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

export default PostsPage

// TODO: Refactor with better approach
// seriously there should be a better way to handle static Pagination

export const getStaticPaths = async () => {
  const markdownFilePaths = await getArticlesFilePaths()

  const pagesCount = Math.ceil(markdownFilePaths.length / NUM_OF_POSTS_PER_PAGE)

  const paths = Array.from({ length: pagesCount }).map((_, index) => ({
    params: {
      page: (index + 1).toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const { page } = context.params
  const currentPage = +page || 1
  const props = await getStaticPaginationProps(currentPage)
  return { props }
}
