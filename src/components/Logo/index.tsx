import { TimerIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import styles from './styles.module.css'

type LogoProps = {
  children?: string | ReactNode
}

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logoLink}>
        <TimerIcon />
        <span>Chronus</span>
      </a>
    </div>
  )
}
