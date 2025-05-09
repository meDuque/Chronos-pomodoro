import { Container } from './components/Container'
import { Logo } from './components/Logo'
import './styles/global.css'
import './styles/theme.css'

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <section>Menu</section>
      </Container>

      <Container>
        <section>Form</section>
      </Container>

      <Container>
        <section>Footer</section>
      </Container>
    </>
  )
}
