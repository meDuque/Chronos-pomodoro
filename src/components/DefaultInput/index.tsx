import styles from './styles.module.css'

interface DefaultInputProps extends React.ComponentProps<'input'> {
  id: string
  labelText?: string
}

export function DefaultInput({ id, type, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} id={id} {...rest} />
    </>
  )
}
