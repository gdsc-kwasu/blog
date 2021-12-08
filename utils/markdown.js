const { marked } = require('marked')
const path = require('path')

// a custom image renderer to fix image path, allowing it to be used relative to the articles folder
const renderer = {
  image(href, _, text) {
    const absPath = path.resolve(process.cwd(), 'aricles', href)
    const relPath = path.relative(path.join(process.cwd(), 'public'), absPath)

    return `<img src="/${relPath}" alt="${text}" />`
  },
}

marked.use({ renderer })

export { marked }
