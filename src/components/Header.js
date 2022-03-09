import React from 'react'
import Link from 'next/link'
import Header from './styled/Header.styled'
import ThemeToggleButton from './ThemeToggleButton'

export default function HeaderContent() {
  return (
    <Header>
      <div className="container">
        <header>
          <Link href="/" passHref>
            <a>
              <img src="/images/gdsc.png" alt="GDSC Logo" width="40px" />
              <h1>GDSC KWASU</h1>
            </a>
          </Link>
        </header>
        <nav>
          <ThemeToggleButton />
        </nav>
      </div>
    </Header>
  )
}
