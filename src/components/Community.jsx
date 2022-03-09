import Link from 'next/link'
import React from 'react'
import CommunityStyle from './styled/Community.styled'

export default function Community() {
  return (
    <CommunityStyle>
      <h2>Join Our Community Today</h2>
      <p>
        The Google Developer Student Clubs (GDSC) program is a Google Developers initiative through which we provide development skills for students, towards employability and entrepreneurship.

        In addition to workshops, we also provide an opportunity for students to apply their newly gained skills to develop solutions for local organizations, and then provide visibility via showcases.
      </p>
      <Link href="https://gdsc.community.dev/kwara-state-university/">
        <a target="_blank" rel="noopener">
          Get Started
        </a>
      </Link>
    </CommunityStyle>
  )
}
