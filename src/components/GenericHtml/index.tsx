import { type ReactNode } from 'react'
import styles from './styles.module.css'

interface GenericHtmlProps {
  children: ReactNode
}

export function GenericHtml({ children }: GenericHtmlProps) {
  return (
    <>
      <div className={styles.genericHtml}>{children}</div>
    </>
  )
}
