import Link from 'next/link'
import { Main } from '~components/styled/Main.styled'

export default function Home() {
  return (
    <Main>
      <h1>GDSC Blog Project</h1>
      <p>Time for work guys! some dummy posts post are already included</p>
      <hr />
      <p>
        You can view all posts by <Link href="/posts">Clicking here</Link>
      </p>
      <hr />
      You can view all posts with the #ui tag by{' '}
      <Link href="/tag/ui">Clicking here</Link>, it can be used to categorize
      post created by ui guys
      <hr />
      Same also exist for <Link href="/tag/coding">#coding</Link>
      <hr />
      Feel free to delete any of these sample
    </Main>
  )
}
