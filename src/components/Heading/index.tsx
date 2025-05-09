import type { ReactNode } from 'react'
import styles from './index.module.css'

type HeadingProps = {
  children: string | ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
  return <h1 className={styles.heading}>{children}</h1>
}
