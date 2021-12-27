import { getStaticPaginationProps } from '~utils/pagination'
import PostPage from './[page]'

export default PostPage

export const getStaticProps = async () => {
  const props = await getStaticPaginationProps()
  return { props }
}
