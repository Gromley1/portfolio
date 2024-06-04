import { useState } from 'react'
import styles from './nav-menu.module.scss'

export const NavMenu = () => {
  const [toggleNav, setToggleNav] = useState(false)

  const onNavClick = () => {
    setToggleNav((prev) => !prev)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.mobileNav} onClick={onNavClick} role="button">
        <p className={styles.mobileNav__line} />
        <p className={styles.mobileNav__line} />
        <p className={styles.mobileNav__line} />
      </div>
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
