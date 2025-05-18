import { useEffect, useReducer, useState } from 'react'
import { Container } from '../../components/Container'
import { TaskContext } from './TaskContext'
import { initialTaskState } from './initialTaskState'

interface TaskContextProviderProps {
  children: React.ReactNode
}

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState)

  type ActionType = {
    type: string
    payload?: number
  }

  const [myState, dispatch] = useReducer(
    (state, action: ActionType) => {
      switch (action.type) {
        case 'INCREMENT': {
          if (!action.payload) return state
          return {
            ...state,
            secondsRemaining: state.secondsRemaining + action.payload,
          }
        }
        case 'DECREMENT': {
          if (!action.payload) return state
          return {
            ...state,
            secondsRemaining: state.secondsRemaining - action.payload,
          }
        }
      }
      return state
    },
    { secondsRemaining: 0 },
  )

  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  return (
    <TaskContext.Provider value={{ state, setState }}>
      <Container>
        <h1>O estado é: {JSON.stringify(myState)}</h1>
      </Container>

      <Container>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT', payload: 10 })
          }}
        >
          Incrementar +10
        </button>
      </Container>

      <Container>
        <button
          onClick={() => {
            dispatch({ type: 'INCREMENT', payload: 20 })
          }}
        >
          Incrementar +20
        </button>
      </Container>

      <Container>
        <button
          onClick={() => {
            dispatch({ type: 'DECREMENT', payload: 50 })
          }}
        >
          Decrementar -50
        </button>
      </Container>

      {/* {children} */}
    </TaskContext.Provider>
  )
}
