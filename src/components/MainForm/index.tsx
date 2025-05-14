import { PlayCircleIcon } from 'lucide-react'
import { type ReactNode, useRef, useState } from 'react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import styles from './styles.module.css'

interface MainFormProps {
  children?: ReactNode
}

export function MainForm(_props: MainFormProps) {
  // const [taskName, setTaskName] = useState('')
  const taskNameInput = useRef<HTMLInputElement>(null)

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Deu certo!', Date.now())
  }

  return (
    <>
      <form className={styles.form} action='' onSubmit={handleCreateNewTask}>
        <div className={styles.formRow}>
          <DefaultInput
            id='meuInput'
            type='text'
            labelText='Task'
            placeholder='Digite algo'
            ref={taskNameInput}
            // value={taskName}
            // onChange={e => setTaskName(e.target.value)}
          />
        </div>

        <div className={styles.formRow}>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className={styles.formRow}>
          <Cycles />
        </div>

        <div className={styles.formRow}>
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  )
}
