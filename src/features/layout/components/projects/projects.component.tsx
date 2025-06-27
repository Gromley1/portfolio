import styles from './projects.module.scss'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  liveUrl?: string
  githubUrl?: string
}

const projects: Array<Project> = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with React and TypeScript. Features include product catalog, shopping cart, user authentication, and payment integration.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    image: '🛒',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['Angular', 'Firebase', 'RxJS', 'Angular Material'],
    image: '📋',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    image: '🌤️',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations and clean design.',
    technologies: ['React', 'SCSS', 'Framer Motion', 'Vite'],
    image: '💼',
    liveUrl: '#',
    githubUrl: '#'
  }
]

const Project = ({ title, description, technologies, image, liveUrl, githubUrl, id }: Project) => {
  return (
    <div key={id} className={styles.project}>
      <div className={styles.project__header}>
        <div className={styles.project__icon}>{image}</div>
        <div className={styles.project__title}>{title}</div>
      </div>
      
      <p className={styles.project__description}>{description}</p>
      
      <div className={styles.project__tech}>
        {technologies.map((tech, index) => (
          <span key={index} className={styles.project__tech__item}>
            {tech}
          </span>
        ))}
      </div>
      
      <div className={styles.project__links}>
        {liveUrl && (
          <a href={liveUrl} className={styles.project__link} target="_blank" rel="noopener noreferrer">
            <span>Live Demo</span>
            <span className={styles.project__link__icon}>↗</span>
          </a>
        )}
        {githubUrl && (
          <a href={githubUrl} className={styles.project__link} target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <span className={styles.project__link__icon}>↗</span>
          </a>
        )}
      </div>
    </div>
  )
}

export const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projects__container}>
        <div className={styles.projects__header}>
          <h2 className={styles.projects__title}>Featured Projects</h2>
          <p className={styles.projects__subtitle}>
            Here are some of the projects I've worked on recently
          </p>
        </div>
        
        <div className={styles.projectList}>
          {projects.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
