import ProjectCard from '../components/ProjectCard'

function Projects() {

  const projects = [
    {
      title: "HubSpot Academy — INBOUND Learner Correspondent",
      subtitle: "Event Coverage • Content Creation",
      description:
        "Participated in the HubSpot Academy Learner Correspondent program during INBOUND, creating content and interviews connected to the event community.",
      tags: ["Content", "Interviews", "Community"]
    },

    {
      title: "HubSpot Micro-Internship — Food Bank Project",
      subtitle: "Content Marketing • Nonprofit",
      description:
        "Created marketing content and communication ideas for a nonprofit-focused initiative as part of a HubSpot micro-internship experience.",
      tags: ["Content Marketing", "Blog Writing", "Nonprofit"]
    },

    {
      title: "ASCC — Vice President",
      subtitle: "Leadership • Communications",
      description:
        "Supported communication initiatives and student engagement efforts through the Associated Students of Calbright College.",
      tags: ["Leadership", "Communications", "Community"]
    }
  ]

  return (
    <section className="section" id="projects">

      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>

    </section>
  )
}

export default Projects