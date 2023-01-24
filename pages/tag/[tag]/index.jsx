import { formatTags, getArticlesData } from '~utils/article'
import { getStaticPaginationProps } from '~utils/pagination'
import tagsInfo from '../../../articles/tags.json'
import TagPage from './[page]'

export default TagPage

// TODO: Refactor with better approach
// seriously there should be a better way to handle static Pagination

export const getStaticProps = async (context) => {
  const { tag } = context.params
  const lTag = tag.toLowerCase()
  const tagDescription =
    lTag in tagsInfo ? tagsInfo[lTag].description : '[DESCRIPTION]'

  const staticProps = await getStaticPaginationProps(1, tag)

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

  return {
    paths: Array.from(allTags.values()).map((tag) => ({ params: { tag } })),
    fallback: false,
  }
}
