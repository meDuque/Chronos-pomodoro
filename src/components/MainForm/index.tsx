import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { useRef } from 'react'
import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions'
import type { TaskModel } from '../../models/TaskModel'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { Tips } from '../Tips'
import styles from './styles.module.css'

export function MainForm() {
  const { state, dispatch } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)
  // cycle
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

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask })
  }

  function handleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK })
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
            disabled={!!state.activeTask}
          />
        </div>

        <div className={styles.formRow}>
          <Tips />
        </div>

        {state.currentCycle > 0 && (
          <div className={styles.formRow}>
            <Cycles />
          </div>
        )}

        <div className={styles.formRow}>
          {!state.activeTask ? (
            <DefaultButton
              title='Iniciar nova tarefa'
              aria-label='Iniciar nova tarefa'
              type='submit'
              icon={<PlayCircleIcon />}
              key={'Butão de iniciar nova tarefa'}
            />
          ) : (
            <DefaultButton
              title='Interromper tarefa atual'
              aria-label='Interromper tarefa atual'
              type='button'
              color={'red'}
              icon={<StopCircleIcon />}
              onClick={handleInterruptTask}
              key={'Butão de interromper tarefa atual'}
            />
          )}
        </div>
      </form>
    </>
  )
}
