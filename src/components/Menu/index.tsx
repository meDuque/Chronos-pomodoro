import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { useState } from 'react'
import styles from './styles.module.css'

type ThemeProps = 'dark' | 'light'

export const Menu = () => {
  const [theme, setTheme] = useState<ThemeProps>('dark')

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault()
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark'
      // document.documentElement.setAttribute('data-theme', nextTheme) //! Do not use this line here
      return nextTheme
    })

    document.documentElement.setAttribute('data-theme', theme)
  }

  return (
    <nav className={styles.menu}>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para o Histórico'
        title='Ir para o Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Ir para as Configurações'
        title='Ir para as Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={styles.menuLink}
        aria-label='Mudar o tema da Aplicação'
        title='Mudar o tema da Aplicação'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  )
}
