interface DefaultInputProps extends React.ComponentProps<'input'> {
  children?: React.ReactNode
  id: string
}

export function DefaultInput({ id, type }: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id}>Task</label>
      <input type={type} id={id} />
    </>
  )
}
