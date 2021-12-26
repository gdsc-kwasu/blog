import Link from 'next/link'
import { TagChipStyle } from './styled/TagChip.styled'

const TagChip = ({ tag }) => {
  return (
    <Link href={`/tag/${tag}`} passHref>
      <TagChipStyle>{tag}</TagChipStyle>
    </Link>
  )
}

export default TagChip
