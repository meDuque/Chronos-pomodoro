import { useEffect, useReducer, useState } from 'react'
import { Container } from '../../components/Container'
import { TaskContext } from './TaskContext'
import { initialTaskState } from './initialTaskState'

interface TaskContextProviderProps {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState)

  const [numero, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'INCREMENT':
        return state + 1
        break
      case 'DECREMENT':
        return state - 1

      default:
        break
    }
    return state
  }, 0)

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <Container>
        <h1>O numero é: {numero}</h1>
      </Container>
      <Container>
        <button
          onClick={() => {
            dispatch('INCREMENT')
          }}
        >
          Incrementar...
        </button>
      </Container>
      <Container>
        <button
          onClick={() => {
            dispatch('DECREMENT')
          }}
        >
          Decrementar...
        </button>
      </Container>
      {/* {children} */}
    </TaskContext.Provider>
  )
}
