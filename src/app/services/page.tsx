import { FaCode, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { SiWebcomponentsdotorg, SiAntdesign } from "react-icons/si";

const services = [
  {
    title: "Personal Portfolio Website",
    description: "Beautiful and modern personal portfolio to showcase your work and attract clients.",
    icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
  },
  {
    title: "Business Website",
    description: "Responsive business sites to help your business grow and be present online.",
    icon: <FaMobileAlt className="text-green-500 text-4xl" />,
  },
  {
    title: "Custom UI Development",
    description: "Pixel-perfect custom UI components using Tailwind CSS and reusable design.",
    icon: <SiAntdesign className="text-pink-500 text-4xl" />,
  },
  {
    title: "Frontend Integration",
    description: "Connect frontend with APIs and integrate all logic using React & Next.js.",
    icon: <SiWebcomponentsdotorg className="text-yellow-400 text-4xl" />,
  },
  {
    title: "Performance Optimization",
    description: "Speed optimization using lazy loading, dynamic imports, and SEO best practices.",
    icon: <FaCode className="text-purple-500 text-4xl" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">My Services</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
