import type { ReactNode } from 'react'
import styles from './styles.module.css'

interface DefaultButtonProps extends React.ComponentProps<'button'> {
  icon: ReactNode
  color?: 'green' | 'red'
}

export function DefaultButton({ icon, color = 'green', ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  )
}
