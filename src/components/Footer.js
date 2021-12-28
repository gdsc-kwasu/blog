import React from 'react'
import Link from 'next/link'
import Footer from './styled/Footer.styled'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function FooterContent() {
  return (
    <Footer>
      <div className="footer-content">
        <Link href="/">
          <a className="logo">
            <img src="/images/gdsc.png" alt="GDSC Logo" width="40px" />
            <h3>GDSC KWASU</h3>
          </a>
        </Link>

        <div className="footer--social-icons">
          <a>
            <AiFillInstagram />
          </a>

          <a>
            <FaLinkedinIn />
          </a>

          <Link href="https://twitter.com/gdsc_kwasu">
            <a target="_blank" rel="noopener">
              <FaTwitter />
            </a>
          </Link>

          <a>
            <FaFacebookF />
          </a>
        </div>

        <div className="footer--copyright">
          <span>&copy;GDSC KWASU. All right reserved &#8226;</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </Footer>
  )
}
