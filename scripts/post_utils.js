import fs from 'fs/promises'
const path = require('path')

const POST_DIR = path.join(process.cwd(), 'posts')
export const getPostSlugFromPath = (filePath) => path.basename(filePath, '.md')
export const postSlugToFilePath = (slug) => path.join(POST_DIR, `${slug}.md`)

export const getPostProps = (data) => {
  const dateObj = new Date(data.date)
  const banner =
    typeof data.banner === 'string'
      ? '/images/posts/' + data.banner.split('/').filter(Boolean).join('/')
      : null

  return {
    // post banner image link (can be null if non is provided)
    banner,
    // title: if non is provided use the string {title} for notice purpose
    title: data.title || '{title}',
    // author: if non is provided use the string {author} for notice purpose
    author: data.author || '{author}',
    // tags: array of string tags
    tags: formatTags(data.tags),
    // time: (number) milliseconds of date provided in frontmatter cause next requires serializable object
    // if no valid date is provided in post frontmatter, use current date (build time)
    time: isNaN(dateObj) ? Date.now() : dateObj.getTime(),
  }
}

export const getPostsFilePaths = async () => {
  const dir = await fs.readdir(POST_DIR)
  const reFilename = /^[a-z0-9-]+\.md$/

  const markdownFilePaths = dir.map((filename) => {
    if (!reFilename.test(filename)) {
      throw new Error(
        `${filename} is invalid, post Markdown filename should only contain alphanumeric character and dashes [a-z0-9-]`
      )
    }
    return path.join(POST_DIR, filename)
  })
  return markdownFilePaths
}

// format tags and also account for cases when it's missing or it's not an array
// formatted to enusre tags are lowercase and all spaces in tags replaced with dashes -
export const formatTags = (tags) =>
  (Array.isArray(tags) ? tags : []).map((tag) =>
    tag.toLowerCase().replace(/\s+/g, '-')
  )
