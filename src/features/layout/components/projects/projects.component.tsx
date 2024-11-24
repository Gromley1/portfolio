import styles from './projects.module.scss'

interface Project {
  id: number
  title: string
  description: string
}

const projects: Array<Project> = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Article Search Engine',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Weather App',
  },
]

const Project = ({ title, description, id }: Project) => {
  return (
    <div key={id} className={styles.project}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>My Projects</h2>
      <div className={styles.projectList}>
        {projects.map((project) => (
          <Project
            id={project.id}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  )
}
