import styles from './about.module.scss'

export const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        I am a dedicated software engineer with a passion for building
        efficient, scalable, and user-friendly applications. With extensive
        experience in front-end development, I specialize in crafting custom UI
        solutions using modern frameworks like Angular and React. My expertise
        spans greenfield projects where I’ve led teams in implementing
        pixel-perfect designs, ensuring seamless user experiences across various
        devices. I take pride in delivering clean, maintainable code while
        integrating robust testing methodologies such as Jest for enhanced
        reliability. Constantly learning and adapting, I thrive on solving
        complex problems and transforming ideas into functional, high-quality
        software
      </p>
    </section>
  )
}
