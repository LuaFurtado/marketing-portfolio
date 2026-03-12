function LinkedInPosts() {
  const posts = [
    {
      title: "INBOUND Day 1",
      description:
        "My first day at INBOUND as a HubSpot Academy Learner Correspondent.",
      url: "https://www.linkedin.com/posts/luafurtado_inbound25correspondent-hubspotacademy-inbound25-activity-7369165009907609600-UvIM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD01KjEBo21sgx2-c7AVB-86yilRmFAqQ3w",
    },
    {
      title: "INBOUND Day 2",
      description:
        "Highlights and reflections from the second day of the event.",
      url: "https://www.linkedin.com/posts/luafurtado_inbound25-hubspotacademy-inbound25correspondent-activity-7369610393758945280-6cgh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD01KjEBo21sgx2-c7AVB-86yilRmFAqQ3w",
    },
    {
      title: "INBOUND Day 3",
      description:
        "Reflections from the final day of INBOUND and key sessions.",
      url: "https://www.linkedin.com/posts/luafurtado_inbound25-hubspotacademy-inbound25correspondent-activity-7369959936514207744-z639?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD01KjEBo21sgx2-c7AVB-86yilRmFAqQ3w",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <h1>LinkedIn Posts</h1>

        <p className="section-intro">
          Content created during my HubSpot Academy INBOUND Learner
          Correspondent experience.
        </p>

        <div className="linkedin-layout">
          <div className="linkedin-posts-column">
            {posts.map((post) => (
              <article key={post.title} className="project-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>

                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  View on LinkedIn
                </a>
              </article>
            ))}
          </div>

          <div className="linkedin-video-column">
            <div className="linkedin-video-card">

              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7371637306568601600?collapsed=1"
                frameBorder="0"
                allowFullScreen
                title="LinkedIn Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LinkedInPosts;