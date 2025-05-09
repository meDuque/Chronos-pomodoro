import { TimerIcon } from 'lucide-react'
import { Heading } from './components/Heading'
import './styles/global.css'
import './styles/theme.css'

export function App() {
  return (
    <>
      <Heading>
        Hello, World!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
        quaerat nostrum delectus est, deserunt non quidem error natus, pariatur
        quae similique praesentium totam harum velit aperiam, qui nemo rem
        minima.
      </p>
    </>
  )
}
