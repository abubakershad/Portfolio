const projects = [
  {
    title: "Next.js Portfolio",
    description: "A sleek developer portfolio built using Next.js, Tailwind CSS, and Framer Motion.",
  },
  {
    title: "Landing Page UI",
    description: "Modern landing page with animations and responsive design using React and Tailwind.",
  },
  {
    title: "E-Commerce Frontend",
    description: "Frontend UI for an e-commerce app with cart, product listing, and search functionality.",
  },
  {
    title: "Business Site UI",
    description: "Professional business site layout tailored for small enterprises and startups.",
  },
  {
    title: "Dashboard Layout",
    description: "Fully responsive dashboard with cards, charts, and user management sections.",
  },
  {
    title: "Authentication UI",
    description: "Login/Register UI with form validation, dark mode, and error handling.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Projects</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all text-left"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
