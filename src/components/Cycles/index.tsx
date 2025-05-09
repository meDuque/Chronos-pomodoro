import styles from './styles.module.css'

interface CyclesProps extends React.ComponentProps<'input'> {
  id: string
  labelText?: string
}

export function Cycles({ id, type, labelText, ...rest }: CyclesProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} id={id} {...rest} />
    </>
  )
}
