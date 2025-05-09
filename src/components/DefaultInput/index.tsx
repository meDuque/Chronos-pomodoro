interface DefaultInputProps extends React.ComponentProps<'input'> {
  id: string
  labelText?: string
}

export function DefaultInput({ id, type, labelText }: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input type={type} id={id} />
    </>
  )
}
