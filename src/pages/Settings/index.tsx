import { SaveIcon } from 'lucide-react'
import { useRef } from 'react'
import { Container } from '../../components/Container'
import { DefaultButton } from '../../components/DefaultButton'
import { DefaultInput } from '../../components/DefaultInput'
import { Heading } from '../../components/Heading'
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import type { TaskStateModel } from '../../models/TaskStateModel'
import { MainTemplate } from '../../templates/MainTemplate'
import styles from './styles.module.css'
import { showMessage } from '../../adapters/showMessage'
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions'

export function Settings() {
  const { state, dispatch } = useTaskContext()
  const workTimeInput = useRef<HTMLInputElement>(null)
  const shortBreakTimeInput = useRef<HTMLInputElement>(null)
  const longBreakTimeInput = useRef<HTMLInputElement>(null)

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // prevent default form submission

    enum FormErrorMessage {
      workTimeNumber = 'Digite valores entre 1 e 99 para o tempo de foco.',
      shortBreakTimeNumber = 'Digite valores entre 1 e 30 para o tempo de descanso curto.',
      longBreakTimeNumber = 'Digite valores entre 1 e 60 para o tempo de descanso longo.',
      workTimeNonNumber = 'Digite apenas números para o tempo de foco.',
      shortBreakTimeNonNumber = 'Digite apenas números para o tempo de descanso curto.',
      longBreakTimeNonNumber = 'Digite apenas números para o tempo de descanso longo.',
    }

    const formErros = []
    const workTime: TaskStateModel['config']['workTime'] = Number(workTimeInput.current?.value)
    const shortBreakTime: TaskStateModel['config']['shortBreakTime'] = Number(
      shortBreakTimeInput.current?.value,
    )
    const longBreakTime: TaskStateModel['config']['longBreakTime'] = Number(
      longBreakTimeInput.current?.value,
    )

    if (isNaN(workTime)) {
      formErros.push(FormErrorMessage.workTimeNonNumber)
    }
    if (isNaN(shortBreakTime)) {
      formErros.push(FormErrorMessage.shortBreakTimeNonNumber)
    }
    if (isNaN(longBreakTime)) {
      formErros.push(FormErrorMessage.longBreakTimeNonNumber)
    }

    if (workTime < 1 || workTime > 99) {
      formErros.push(FormErrorMessage.workTimeNumber)
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErros.push(FormErrorMessage.shortBreakTimeNumber)
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
      formErros.push(FormErrorMessage.longBreakTimeNumber)
    }

    if (formErros.length > 0) {
      formErros.forEach(error => {
        showMessage.error(error)
      })
      return
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    })
    showMessage.success('Configurações atualizadas com sucesso!')
  }

  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>Configurações</Heading>
        </Container>
        <Container>
          <p>Modifique as configurações para tempo de foco, descanso curto, descanso longo</p>
        </Container>

        <Container>
          <form onSubmit={handleSaveSettings} action={''} className={styles.form}>
            <div className={styles.formRow}>
              <DefaultInput
                id='workTime'
                labelText='Foco'
                ref={workTimeInput}
                defaultValue={state.config.workTime}
                type='number'
              />
            </div>
            <div className={styles.formRow}>
              <DefaultInput
                id='shortBreakTime'
                labelText='Descaso curto'
                ref={shortBreakTimeInput}
                defaultValue={state.config.shortBreakTime}
                type='number'
              />
            </div>
            <div className={styles.formRow}>
              <DefaultInput
                id='longBreakTime'
                labelText='Descaso longo'
                ref={longBreakTimeInput}
                defaultValue={state.config.longBreakTime}
                type='number'
              />
            </div>
            <div className={styles.formRow}>
              <DefaultButton
                icon={<SaveIcon />}
                aria-label='Salvar configurações'
                title='Salvar configurações'
              />
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  )
}
