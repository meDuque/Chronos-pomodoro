import styles from './styles.module.css'

// interface CyclesProps {
//   children?: React.ReactNode
// }

export function Cycles() {
  return (
    <>
      <div className={styles.cycles}>
        <span>Ciclos:</span>

        <div className={styles.cycleDots}>
          <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
          <span
            className={`${styles.cycleDot} ${styles.shortBreakTime}`}
          ></span>
          <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
          <span
            className={`${styles.cycleDot} ${styles.shortBreakTime}`}
          ></span>
          <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
          <span
            className={`${styles.cycleDot} ${styles.shortBreakTime}`}
          ></span>
          <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
          <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
        </div>
      </div>
    </>
  )
}
