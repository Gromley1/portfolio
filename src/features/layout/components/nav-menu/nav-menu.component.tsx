import styles from './nav-menu.module.scss'

export const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}
