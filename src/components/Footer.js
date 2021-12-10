import React from "react";
import Link from "next/link";
import Footer from "./styled/Footer.styled";

export default function FooterContent() {
  return (
    <Footer>
      <Link href="/">
        <a>
          <img src="/images/gdsc.png" alt="GDSC Logo" width="40px" />
          <h3>GDSC KWASU</h3>
        </a>
      </Link>

      <div className="footer--social-icons">
        <a>
          <img src="/images/socials/instagram.svg" alt="Instagram icon" />
        </a>

        <a>
          <img src="/images/socials/linkedIn-icon.svg" alt="linkedIn icon" />
        </a>

        <a>
          <img src="/images/socials/twitter-icon.svg" alt="twitter icon" />
        </a>

        <a>
          <img src="/images/socials/facebook-icon.svg" alt="facebook icon" />
        </a>
      </div>

      <div className="footer--copyright">
        <span>&copy;GDSC KWASU. All right reserved &#8226;</span>
        <span>Privacy Policy</span>
      </div>
    </Footer>
  );
}
