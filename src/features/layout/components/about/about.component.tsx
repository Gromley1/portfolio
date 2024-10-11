import styles from './about.module.scss'

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.about__header}>Hi, I'm Griffin Romley.</h2>
      <p className={styles.about__content}>
        I am a dedicated software engineer with a passion for building
        efficient, scalable, and user-friendly applications. With extensive
        experience in front-end development, I specialize in crafting custom UI
        solutions using modern frameworks like Angular and React. My expertise
        spans greenfield projects where I’ve led teams in implementing
        pixel-perfect designs, ensuring seamless user experiences across various
        devices.
      </p>
    </section>
  )
}
