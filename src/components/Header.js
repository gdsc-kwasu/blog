import React from "react";
import Link from "next/link";
import Header from "./styled/Header.styled";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 0.75rem 0 1.6rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 30%;
`;

export default function HeaderContent() {
  return (
    <Header>
      <Nav>
        <Link href="/">
          <a>
            <img src="/images/gdsc.png" alt="GDSC Logo" width="40px" />
          </a>
        </Link>
        <h3>GDSC KWASU</h3>
      </Nav>
    </Header>
  );
}
