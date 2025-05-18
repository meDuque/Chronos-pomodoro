import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import styles from './styles.module.css'

export function Tips() {
  const { state } = useTaskContext()

  // cycle
  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)
  // tips
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b className={styles.bold}>{state.config.workTime}min.</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b className={styles.bold}>{state.config.shortBreakTime}min.</b>
      </span>
    ),
    longBreakTime: <span>Descanso longo</span>,
  }
  const tipsForNonActiveTask = {
    workTime: (
      <span>
        Próximo ciclo é de <b className={styles.bold}>{state.config.workTime}min.</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo descanso é de <b className={styles.bold}>{state.config.shortBreakTime}min.</b>
      </span>
    ),
    longBreakTime: <span>Próximo descanso será longo</span>,
  }

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNonActiveTask[nextCycleType]}
    </>
  )
}
