import React from 'react'
import Link from 'next/link'
import Header from './styled/Header.styled'

export default function HeaderContent() {
  return (
    <Header>
      <nav>
        <Link href="/" passHref>
          <a>
            <img src="/images/gdsc.png" alt="GDSC Logo" width="40px" />
            <h1>GDSC KWASU</h1>
          </a>
        </Link>
      </nav>
    </Header>
  )
}
