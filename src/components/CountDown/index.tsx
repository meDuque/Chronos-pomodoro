import type { ReactNode } from 'react'
import styles from './styles.module.css'

type CountDownProps = {
  children?: string | ReactNode
}

export const CountDown = () => {
  return <div className={styles.container}>00:00</div>
}
