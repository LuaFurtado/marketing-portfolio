import ProjectCard from '../components/ProjectCard'

function Projects() {
  const projects = [
    {
      title: "HubSpot Academy — INBOUND Learner Correspondent",
      subtitle: "Event Coverage • Content Creation",
      description:
        "Participated in the HubSpot Academy Learner Correspondent program during INBOUND, creating content and interviews connected to the event community.",
      tags: ["Content", "Interviews", "Community"],
      links: [
        {
          label: "LinkedIn Post",
          url: "https://linkedin.com/"
        },
        {
          label: "Event Coverage",
          url: "https://linkedin.com/"
        }
      ]
    },

    {
      title: "HubSpot Micro-Internship — Food Bank Project",
      subtitle: "Content Marketing • Nonprofit",
      description:
        "Created marketing content and written assets for a nonprofit-focused project.",
      tags: ["Nonprofit", "Marketing", "Writing"],
      links: [
        {
          label: "View Blog Posts",
          url: "/files/micro-internship.pdf"
        }
      ]
    },

    {
      title: "Calbright College — ASCC Vice President",
      subtitle: "Leadership • Community Engagement",
      description:
        "Supported student engagement and communication initiatives through student leadership and collaborative projects.",
      tags: ["Leadership", "Community", "Communication"],
      links: [
        {
          label: "Calbright Profile",
          url: "https://calbright.edu/"
        },
        {
          label: "Certificate",
          url: "/files/ascc-certificate.pdf"
        }
      ]
    }
  ]

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>

        <p className="section-intro">
          Selected work in content creation, community storytelling, and marketing.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects