import { PlayCircleIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import styles from './styles.module.css'

interface MainFormProps {
  children?: ReactNode
}

export function MainForm(_props: MainFormProps) {
  const { setState } = useTaskContext()

  function handleClick() {
    setState(prevState => {
      return { ...prevState, formattedSecondsRemaining: '21:00' }
    })
  }

  return (
    <>
      <form className={styles.form} action=''>
        <button onClick={handleClick} type='button'>
          Clicar
        </button>
        <div className={styles.formRow}>
          <DefaultInput
            id='meuInput'
            type='text'
            labelText='Task'
            placeholder='Digite algo'
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
