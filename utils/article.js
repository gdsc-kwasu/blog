import { promises as fs } from 'fs'
const path = require('path')

const ARTICLES_HOME = path.join(process.cwd(), 'articles')

export const getArticleSlugFromPath = (filePath) =>
  path.basename(filePath, '.md')

export const articleSlugToFilePath = (slug) =>
  path.join(ARTICLES_HOME, `${slug}.md`)

export const getArticleProps = (data) => {
  const dateObj = new Date(data.date)
  const coverImage =
    typeof data.cover_image === 'string'
      ? '/images/articles/cover/' + data.cover_image
      : '/images/default-cover-image.png'
  const authorImage =
    typeof data.author_image === 'string'
      ? '/images/authors/' + data.author_image
      : '/images/authors/default.png'

  return {
    // article cover image link (can be null if non is provided)
    coverImage,
    // article author image link
    authorImage,
    // title: if non is provided use the string {title} for notice purpose
    title: data.title || '{title}',
    // author: if non is provided use the string {author} for notice purpose
    author: data.author || '{author}',
    // author: if non is provided use the string {excerpt} for notice purpose
    excerpt: data.excerpt || '{excerpt}',
    // tags: array of string tags
    tags: formatTags(data.tags),
    // time: (number) milliseconds of date provided in frontmatter cause next requires serializable object
    // if no valid date is provided in articles frontmatter, use current date (build time)
    time: isNaN(dateObj) ? Date.now() : dateObj.getTime(),
  }
}

export const getArticlesFilePaths = async () => {
  const dir = await fs.readdir(ARTICLES_HOME)
  const reFilename = /^[a-z0-9-]+\.md$/

  const markdownFilePaths = dir.map((filename) => {
    if (!reFilename.test(filename)) {
      throw new Error(
        `${filename} is invalid, article markdown filename should only contain alphanumeric character and dashes [a-z0-9-]`
      )
    }
    return path.join(ARTICLES_HOME, filename)
  })
  return markdownFilePaths
}

// format tags and also account for cases when it's missing or it's not an array
// formatted to enusre tags are lowercase and all spaces in tags replaced with dashes -
export const formatTags = (tags) =>
  (Array.isArray(tags) ? tags : []).map((tag) =>
    tag.toLowerCase().replace(/\s+/g, '-')
  )
