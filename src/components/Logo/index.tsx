import type { ReactNode } from 'react'
import styles from './styles.module.css'

type LogoProps = {
  children: string | ReactNode
}

export const Logo = ({ children }: LogoProps) => {
  return <h1 className={styles.logo}>Logo</h1>
}
