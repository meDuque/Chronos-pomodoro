import { ToastContainer } from 'react-toastify/unstyled'
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { Home } from './pages/Home'

import './styles/global.css'
import './styles/theme.css'
import { Bounce } from 'react-toastify'

export function App() {
  return (
    <>
      <TaskContextProvider>
        <Home />

        <ToastContainer
          position='top-right'
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
          transition={Bounce}
        />
      </TaskContextProvider>
    </>
  )
}
