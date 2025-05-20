import { BrowserRouter, Route, Routes } from 'react-router'
import { MessagesContainer } from './components/MessagesContainer'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { Home } from './pages/Home'
import './styles/global.css'
import './styles/theme.css'
import { AboutPomodoro } from './pages/AboutPomodoro'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <>
      <TaskContextProvider>
        <MessagesContainer>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about-pomodoro/' element={<AboutPomodoro />} />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </MessagesContainer>
      </TaskContextProvider>
    </>
  )
}
