// components/ProjectsSection.tsx
const projects = [
    {
      title: "Education Support",
      description:
        "Providing books, computers, solar lamps, and learning tools for students.",
    },
    {
      title: "Women Empowerment",
      description:
        "Microloans and soap-making programs for women entrepreneurs.",
    },
    {
      title: "Farmer Assistance",
      description:
        "Helping farmers access seeds, fertilizer, machinery, and training.",
    },
    {
      title: "Organic Farming",
      description:
        "Promoting biodiversity, composting, and sustainable agriculture.",
    },
  ];
  
  export default function ProjectsSection() {
    return (
      <section
        id="projects"
        className="section-padding"
      >
        <div className="container-width">
          <div className="text-center">
            <p className="uppercase tracking-widest text-green-700 font-semibold">
              Projects
            </p>
  
            <h2 className="text-4xl font-bold mt-4">
              Creating Sustainable Impact
            </h2>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>
  
                <p className="mt-4 text-gray-600 leading-7">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }