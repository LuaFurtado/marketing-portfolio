function ProjectCard({ title, subtitle, description, tags }) {
  return (
    <article className="project-card">

      <p className="project-subtitle">
        {subtitle}
      </p>

      <h3>
        {title}
      </h3>

      <p className="project-description">
        {description}
      </p>

      <div className="tag-list">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

    </article>
  )
}

export default ProjectCard