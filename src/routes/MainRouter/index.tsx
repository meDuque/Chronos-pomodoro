import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'
import { AboutPomodoro } from '../../pages/AboutPomodoro'
import { History } from '../../pages/History'
import { Home } from '../../pages/Home'
import { NotFound } from '../../pages/NotFound'

function ScrollOnTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function MainRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/history/' element={<History />} />
          <Route path='/about-pomodoro/' element={<AboutPomodoro />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <ScrollOnTop />
      </BrowserRouter>
    </>
  )
}
