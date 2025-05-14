import { PlayCircleIcon } from 'lucide-react'
import { type ReactNode, useRef, useState } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import type { TaskModel } from '../../models/TaskModel'
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import styles from './styles.module.css'

interface MainFormProps {
  children?: ReactNode
}

export function MainForm(_props: MainFormProps) {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (taskNameInput.current === null) return

    const taskName = taskNameInput.current.value.trim()

    if (!taskName) {
      alert('Task name is required')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, // TODO: add seconds remaining select
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // TODO: add formatted seconds remaining select
        tasks: [...prevState.tasks, newTask],
      }
    })
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
          <p>Próximo intervalo é de {state.activeTask?.duration}min</p>
        </div>

        {state.currentCycle > 0 && (
          <div className={styles.formRow}>
            <Cycles />
          </div>
        )}

        <div className={styles.formRow}>
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    </>
  )
}
