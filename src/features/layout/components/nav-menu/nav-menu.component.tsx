import { useState } from 'react'
import styles from './nav-menu.module.scss'

export const NavMenu = () => {
  const [_toggleNav, setToggleNav] = useState(false)

  const onNavClick = () => {
    setToggleNav((prev) => !prev)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <span className={styles.brand__logo}>&lt;/&gt;</span>
        <span className={styles.brand__text}>Griffin.dev</span>
      </div>

      <ul className={styles.navList}>
        <li>
          <a className={styles.link} href="#about">
            About
          </a>
        </li>

        <li>
          <a className={styles.link} href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a className={styles.link} href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <div className={styles.mobileNav} onClick={onNavClick} role="button">
        <p className={styles.mobileNav__line} />
        <p className={styles.mobileNav__line} />
        <p className={styles.mobileNav__line} />
      </div>
    </nav>
  )
}
