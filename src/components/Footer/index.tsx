import { RouterLink } from '../RouterLink'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <RouterLink href='/about-pomodoro/'>
        Entenda como funciona a técnica Pomodoro 🍅
      </RouterLink>
      <RouterLink href='/'>
        Chronus Pomodoro &copy; {new Date().getFullYear()} - Feito com 💜 por ¡Duque
      </RouterLink>
    </footer>
  )
}
