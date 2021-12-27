import {
  formatTags,
  getArticleProps,
  getArticleSlugFromPath,
  getSortedArticlesData,
} from './article'

export const NUM_OF_POSTS_PER_PAGE = 10

export const getStaticPaginationProps = async (page = 1, filterTag) => {
  const sortedArticlesData = await getSortedArticlesData()

  const allTags = new Set()
  const filteredArticlesData = sortedArticlesData.filter((data) => {
    const tags = formatTags(data.data.tags)
    tags.forEach((tag) => allTags.add(tag))

    if (!filterTag) {
      return true
    }

    return tags.indexOf(filterTag) >= 0
  })

  const tags = Array.from(allTags.values()).sort()
  const start = (page - 1) * NUM_OF_POSTS_PER_PAGE
  const totalPageCount = Math.ceil(
    filteredArticlesData.length / NUM_OF_POSTS_PER_PAGE
  )

  const pageArticlesData = filteredArticlesData.slice(
    start,
    start + NUM_OF_POSTS_PER_PAGE
  )

  const datas = pageArticlesData.map((data) => {
    return {
      slug: getArticleSlugFromPath(data.filePath),
      ...getArticleProps(data.data),
    }
  })

  return {
    tags,
    totalPageCount,
    currentPage: page,
    totalPostCount: filteredArticlesData.length,
    posts: datas,
  }
}
