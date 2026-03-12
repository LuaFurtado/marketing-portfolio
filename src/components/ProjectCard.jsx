function ProjectCard({ title, subtitle, description, tags, links }) {
  return (
    <article className="project-card">
      <h3>{title}</h3>

      <p className="project-subtitle">{subtitle}</p>

      <p className="project-description">{description}</p>

      <div className="tag-list">
        {tags.map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className="project-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ProjectCard