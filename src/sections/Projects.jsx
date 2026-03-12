import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "HubSpot Academy — INBOUND Learner Correspondent",
      subtitle: "Event Coverage • Content Creation",
      description:
        "Participated in the HubSpot Academy Learner Correspondent program during INBOUND, creating content and interviews connected to the event community.",

      links: [
        {
          label: "HubSpot Academy Bulletin — Learner Correspondent Spotlight",
          url: "LINK_DO_BULLETIN",
        },
        {
          label: "LinkedIn Posts",
          url: "/linkedin-posts",
        },
        {
          label: "Event Coverage",
          url: "https://linkedin.com/",
        },
      ],
    },

    {
      title: "HubSpot Micro-Internship — FoodBank Project",
      subtitle: "Content Marketing • Nonprofit",
      description:
        "Completed the HubSpot Marketing AI Micro-Internship, developing marketing content and campaign materials for a nonprofit food bank initiative.",

      links: [
        {
          label: "Campaign Case Study",
          url: "https://www.notion.so/Final-Presentation-Marketing-AI-Micro-Internship-Spring-2025-1fa6cda697c780fdb7caf733f6d75ff2",
        },
        {
          label: "HubSpot Certificate",
          url: "https://app.hubspot.com/academy/achievements/xr1vpnny/en/1/luana-furtado/hubspot-marketing-ai-micro-internship-program",
        },
      ],
    },

    {
      title: "Calbright College — ASCC Vice President",
      subtitle: "Leadership • Community Engagement",
      description:
        "Supported student engagement and communication initiatives through student leadership and collaborative projects.",

      links: [
        {
          label: "Calbright Profile",
          url: "https://www.calbright.edu/student-life/students/luana/",
        },
        {
          label: "CRM Platform Administration Certificate",
          url: "/assets/CRMPlatformAdministration.pdf",
        },
      ],
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects</h2>

        <p className="section-intro">
          Selected work in content creation, community storytelling, and
          marketing.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
