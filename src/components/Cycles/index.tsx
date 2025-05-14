import { useTaskContext } from '../../contexts/TaskContext/UseTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import styles from './styles.module.css'

export function Cycles() {
  const { state } = useTaskContext()
  const cycleStep = Array.from({ length: state.currentCycle })

  return (
    <>
      <div className={styles.cycles}>
        <span>Ciclos:</span>

        <div className={styles.cycleDots}>
          {cycleStep.map((_, index) => {
            const nextCycle = getNextCycle(index)
            const nextCycleType = getNextCycleType(nextCycle)
            return (
              <span
                key={index}
                className={`${styles.cycleDot} ${styles[nextCycleType]}`}
                title={`Indicador de ciclo "${nextCycleType}"`}
                aria-label={`Indicador de ciclo "${nextCycleType}"`}
              ></span>
            )
          })}
          {/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}
        </div>
      </div>
    </>
  )
}
