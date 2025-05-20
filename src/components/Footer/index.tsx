import { Link } from 'react-router'
import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro/'>Entenda como funciona a técnica Pomodoro 🍅</Link>
      <Link to='/'>
        Chronus Pomodoro &copy; {new Date().getFullYear()} - Feito com 💜 por ¡Duque
      </Link>
    </footer>
  )
}
