import Header from '~components/Header'
import { Container } from '~components/styled/HeaderNews.styled'
import { Main } from '~components/styled/Main.styled'
import Footer from '~components/Footer'
import styled from 'styled-components'

const Style = styled.div`
  min-height: 72vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.colorFG};
`

const NotRoundPage = () => {
  return (
    <Container>
      <Header />
      <Main>
        <Style>404 | Not Found</Style>
      </Main>
      <Footer />
    </Container>
  )
}

export default NotRoundPage
