import React from "react";
import Link from "next/link";
import Header from "./styled/Header.styled";

export default function HeaderContent() {
  return (
    <Header>
      <nav>
        <Link href="/">
          <a>
            <img src="/images/gdsc.png" alt="GDSC Logo" width="40px" />
          </a>
        </Link>
        <h3>GDSC KWASU</h3>
      </nav>
    </Header>
  );
}
