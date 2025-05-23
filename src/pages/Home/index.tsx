import { useEffect } from 'react'
import { Container } from '../../components/Container'
import { CountDown } from '../../components/CountDown'
import { MainForm } from '../../components/MainForm'
import { MainTemplate } from '../../templates/MainTemplate'
import { ApplicationTittle } from '../../consts/Application'

export function Home() {
  useEffect(() => {
    document.title = `${ApplicationTittle.HOME}`
  }, [])

  return (
    <>
      <MainTemplate>
        {/*  */}
        <Container>
          <CountDown />
        </Container>

        <Container>
          <MainForm />
        </Container>
        {/*  */}
      </MainTemplate>
    </>
  )
}
