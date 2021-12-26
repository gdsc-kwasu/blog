import Link from 'next/link'
import React from 'react'
import CommunityStyle from './styled/Community.styled'

export default function Community() {
  return (
    <CommunityStyle>
      <h2>Join Our Community Today</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna, sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna.
      </p>
      <Link href="https://gdsc.community.dev/kwara-state-university/">
        <a target="_blank" rel="noopener">
          Get Started
        </a>
      </Link>
    </CommunityStyle>
  )
}
