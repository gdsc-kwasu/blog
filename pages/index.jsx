import Link from "next/link";
import { Main } from "~components/styled/Main.styled";
import Header from "~components/Header";
import Footer from "~components/Footer";
import HeaderNews from "~components/HeaderNews";
import { Container } from "~components/styled/HeaderNews.styled";
import FeaturedNews from "~components/FeaturedNews";
import Community from "~components/Community";

export default function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <HeaderNews />
        <FeaturedNews />
        <Community />
      </Main>

      <Footer />
    </Container>
  );
}
