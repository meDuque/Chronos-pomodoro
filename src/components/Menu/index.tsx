import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import styles from './styles.module.css'

type MenuProps = {
  children?: string | ReactNode
}

export const Menu = () => {
  return (
    <nav className={styles.menu}>
      <a href='#' className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <HistoryIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <SettingsIcon />
      </a>
      <a href='#' className={styles.menuLink}>
        <SunIcon />
      </a>
    </nav>
  )
}
