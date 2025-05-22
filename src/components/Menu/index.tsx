import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { RouterLink } from '../RouterLink'
import styles from './styles.module.css'

type ThemeProps = 'dark' | 'light'

export const Menu = () => {
  const [theme, setTheme] = useState<ThemeProps>(() => {
    const storageTheme = localStorage.getItem('theme') as ThemeProps
    return storageTheme || 'dark'
  })

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      // document.documentElement.setAttribute('data-theme', nextTheme) //! Do not use this line here
      return nextTheme
    })
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className={styles.menu}>
      <RouterLink
        href='/'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        href='/history/'
        className={styles.menuLink}
        aria-label='Ir para o Histórico'
        title='Ir para o Histórico'
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        href='/settings/'
        className={styles.menuLink}
        aria-label='Ir para as Configurações'
        title='Ir para as Configurações'
      >
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        href='#'
        className={styles.menuLink}
        aria-label='Mudar o tema da Aplicação'
        title='Mudar o tema da Aplicação'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  )
}
