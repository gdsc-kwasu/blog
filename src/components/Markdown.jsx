import { marked } from '~utils/markdown'

const Markdown = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
}

export default Markdown
