import styles from './styles.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a técnica Pomodoro 🍅</a>
      <a href=''>
        Chronus Pomodoro &copy; {new Date().getFullYear()} - Feito com 💜 por ¡Duque
      </a>
    </footer>
  )
}
