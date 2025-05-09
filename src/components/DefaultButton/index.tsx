import type { ReactNode } from 'react'
import styles from './styles.module.css'

interface DefaultButtonProps extends React.ComponentProps<'button'> {
  icon: ReactNode
}

export function DefaultButton({ icon, ...props }: DefaultButtonProps) {
  return (
    <>
      <button className={styles.input} {...props}>
        {icon}
      </button>
    </>
  )
}
