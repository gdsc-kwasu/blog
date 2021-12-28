const { marked } = require('marked')

// a custom image renderer to fix image path, allowing it to be used relative to the articles folder
const renderer = {
  image(href, _, text) {
    // implementation that doesn't use the path module
    const imagePath = /^https?/.test(href)
      ? href
      : '/' +
        href
          .replace(/^.*?[\/\\]public[\/\\](.*)$/, '$1')
          .split(/[\/\\]/)
          .filter(Boolean)
          .join('/')

    return `
    <figure>
      <a href="${imagePath}" target="_blank">
        <img src="${imagePath}" alt="${text}" />
      </a>
      <figcaption>${text}</figcaption>
    </figure>`
  },
}

marked.use({ renderer })

export { marked }
