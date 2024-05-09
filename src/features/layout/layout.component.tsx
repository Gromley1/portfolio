import { NavMenu, About, Projects } from './components'
import styles from './layout.module.scss'

// import { Footer } from './footer/footer.component'
// import { Main } from './main/main.component'

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <NavMenu />
      <About />
      <Projects />
    </div>
  )
}
