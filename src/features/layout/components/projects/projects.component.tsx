import styles from './projects.module.scss'

export const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className="project-list">
        {/* Project items */}
        <div className="project-item">
          <h3>Project 1</h3>
          <p>Description of the project...</p>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  )
}
