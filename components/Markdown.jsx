import { marked } from '~scripts/markdown'

const Markdown = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
}

export default Markdown
