"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { useState } from "react";
import Image from "next/image";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const [first, ...rest] = experiences;

  return (
    <section className=" pb-16 text-white">
      <div className="max-w-6xl gap-6 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <p className="text-gray-400 text-lg">WHAT I HAVE DONE SO FAR</p>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-2">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </motion.div>

        {first && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
          >
            <div className="flex flex-col lg:flex-row lg:gap-10 gap-6 items-start">
              <div className="flex flex-col gap-2 lg:w-1/3">
                <div 
                className="w-24 h-24 rounded-lg bg-white/10 flex items-center justify-center border border-white/10"
                >
                  <Image
                    src={first.icon}
                    alt={first.company}
                    width={64}
                    height={64}
                  />
                </div>

                <h3 className="text-2xl font-semibold">{first.role}</h3>

                <p className="text-gray-400">{first.company}</p>

                <p className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 border border-cyan-400 text-cyan-400  w-fit">
                  {first.duration}
                </p>
              </div>

              <div className="flex-1">
                <ul className="space-y-3 text-gray-300">
                  {(expandedId === first.id
                    ? first.description
                    : first.description.slice(0, 3)
                  ).map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-cyan-400">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {first.description.length > 3 && (
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === first.id ? null : first.id)
                    }
                    className="mt-4 text-cyan-400 text-sm hover:underline"
                  >
                    {expandedId === first.id ? "Show less" : "Show more"}
                  </button>
                )}

                <div className="flex flex-wrap gap-2 mt-5">
                  {first.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 border border-cyan-400 text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {rest.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 mb-8 backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
              >
                <p className="text-sm text-cyan-400 mb-2">{exp.duration}</p>
                <div className="flex gap-4 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                        <Image
                          src={exp.icon}
                          alt={exp.company}
                          width={28}
                          height={28}
                        />
                      </div>

                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold     leading-tight">
                          {exp.role}
                        </h3>

                        <p className="text-gray-400 text-sm">{exp.company}</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-gray-300 text-sm    mt-3">
                      {(isExpanded
                        ? exp.description
                        : exp.description.slice(0, 2)
                      ).map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-cyan-400 mt-1 text-xs">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    {exp.description.length > 2 && (
                      <button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : exp.id)
                        }
                        className="mt-3 text-cyan-400 text-sm flex items-center gap-1 hover:underline"
                      >
                        {isExpanded ? "Show less" : "Show more"}
                      </button>
                    )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-cyan-400/10 border border-cyan-400 text-cyan-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
