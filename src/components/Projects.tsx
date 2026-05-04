"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects as allProjects } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const [activeCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const [expandedProjects, setExpandedProjects] = useState<
    Record<number, boolean>
  >({});

  const toggleExpand = (id: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const first = filteredProjects[0];
  const rest = filteredProjects.slice(1);

  return (
    <section className="pb-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400" />
            <p className="text-gray-400 text-lg">MY WORK</p>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent" />
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-2">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* About text */}
        <div className="mb-6">
          <p className="text-gray-400 mt-2 text-lg max-w-4xl tracking-wide">
            These projects represent my hands-on experience in building
            real-world applications. Each one showcases my skills in frontend
            and full-stack development, along with my ability to solve problems
            using modern technologies. They reflect my continuous growth as a
            developer.
          </p>
        </div>

        {/* FEATURED PROJECT (like Experience first card) */}
        {first && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition mb-10"
          >
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Image */}
              <div className="lg:w-1/2 w-full">
                <Image
                  src={first.image}
                  alt={first.title}
                  width={800}
                  height={500}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl font-semibold mb-3">{first.title}</h3>

                {/* Description */}
                <div className="text-gray-300 leading-relaxed tracking-wide">
                  {expandedProjects[first.id] ? (
                    first.description.map((para, i) => (
                      <p key={`${first.id}-${i}`} className="mb-2">
                        {para}
                      </p>
                    ))
                  ) : (
                    <>
                      {first.description
                        .join(" ")
                        .split(" ")
                        .slice(0, 40)
                        .join(" ")}
                      <span className="ml-1">...</span>

                      <button
                        onClick={() => toggleExpand(first.id)}
                        className="ml-2 text-cyan-400 hover:underline"
                      >
                        Show More
                      </button>
                    </>
                  )}

                  {expandedProjects[first.id] && (
                    <button
                      onClick={() => toggleExpand(first.id)}
                      className="text-cyan-400 mt-2 hover:underline block"
                    >
                      Show Less
                    </button>
                  )}
                </div>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {first.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 border border-cyan-400 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-5">
                  {first.githubUrl && (
                    <Link
                      href={first.githubUrl}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm flex items-center gap-2"
                    >
                      <FaGithub /> Code
                    </Link>
                  )}

                  {first.liveUrl && (
                    <Link
                      href={first.liveUrl}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> Live
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="columns-1 md:columns-2 lg:columns-2 gap-8 space-y-8">
          {rest.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid mb-8 p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <div className="w-full h-52 overflow-hidden rounded-xl mb-4 bg-black/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover object-center hover:scale-105 transition duration-500"
                />
              </div>

              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

              <div className="text-gray-400 text-sm leading-relaxed tracking-wide">
                {expandedProjects[project.id] ? (
                  project.description.map((para, i) => (
                    <p key={`${first.id}-${i}`} className="mb-2">
                      {para}
                    </p>
                  ))
                ) : (
                  <>
                    {project.description
                      .join(" ")
                      .split(" ")
                      .slice(0, 28)
                      .join(" ")}

                    <span className="ml-1">...</span>

                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="ml-2 text-cyan-400 hover:underline"
                    >
                      Show More
                    </button>
                  </>
                )}

                {expandedProjects[project.id] && (
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="text-cyan-400 mt-2 hover:underline block"
                  >
                    Show Less
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 border border-cyan-400 text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm flex items-center gap-2"
                  >
                    <FaGithub /> Code
                  </Link>
                )}

                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
