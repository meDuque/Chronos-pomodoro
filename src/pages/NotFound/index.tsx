import { Container } from '../../components/Container'
import { MainTemplate } from '../../templates/MainTemplate'

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <Container>
          <h1>Página Não Encontrada</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            dolores sequi, mollitia harum beatae facere autem velit molestiae
            explicabo commodi magnam repellendus sint? Corrupti quaerat, ratione
            nostrum ex quis quae!
          </p>
        </Container>
      </MainTemplate>
    </>
  )
}
