"use client";

import { motion } from "framer-motion";
import { HiOutlineCode } from "react-icons/hi";
import { LuBrainCircuit } from "react-icons/lu";
import { FaDatabase, FaLayerGroup } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <p className="text-gray-400 text-lg">INTRODUCTION</p>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-2">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-col-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-white/5 border border-white/10
            backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
          >
            <span className="text-xs tracking-wide text-cyan-400 border border-cyan-600 px-4 py-2 rounded-full">
              WHO I AM
            </span>
            <h3 className="text-3xl font-bold text-white mt-4 mb-4">
              Turning Ideas into{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Real, Functional Web Experiences
              </span>
            </h3>

            <div>
              <p className="mb-3 leading-relaxed text-gray-300 tracking-wider">
                I focus on building modern, scalable web applications using
                JavaScript and full-stack technologies. My work primarily
                revolves around{" "}
                <span className="text-gray-200 font-bold">
                  Next.js, React.js, and Node.js{" "}
                </span>{" "}
                allowing me to develop complete solutions that balance
                performance, usability, and clean architecture.
              </p>

              <p className="mb-3 leading-relaxed text-gray-300 tracking-wider">
                I have experience developing dynamic web applications,
                integrating{" "}
                <span className="text-gray-200 font-bold">
                  APIs, authentication systems, and database-driven backends.
                </span>{" "}
                I enjoy building responsive interfaces and connecting them with
                efficient server-side logic to deliver seamless user
                experiences.
              </p>

              <p className="mb-3 leading-relaxed text-gray-300 tracking-wider">
                My approach is practical and detail-oriented, focused on
                maintainable code, performance, and user-centric applications. I
                also explore{" "}
                <span className="text-gray-200 font-bold">AI integrations</span>{" "}
                and modern tools to enhance workflows and application
                capabilities.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 
            backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-3">
                <LuBrainCircuit className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Learning & Growth
              </h3>
              <p className="text-gray-400 text-sm tracking-wider">
                {/* className="mb-6 leading-relaxed text-gray-300 tracking-wider" */}
                Continuously learning new technologies, improving
                problem-solving skills through practice and projects, and
                building a understanding of AI concepts while exploring relevant
                tools and APIs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center p-6 rounded-2xl bg-white/5 border border-white/10  backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <h4 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                5+
              </h4>
              <p className="text-gray-400 text-xs tracking-widest">PROJECTS</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center items-center p-6 rounded-2xl bg-white/5 border border-white/10  backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <h4 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                1+
              </h4>
              <p className="text-gray-400 text-xs tracking-widest">YEARS</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10  backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-3">
                <HiOutlineCode className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Frontend Precision
              </h3>
              <p className="text-gray-400 text-sm tracking-wider">
                Building responsive and user-friendly interfaces using modern
                web technologies. Focused on clean design and improving user
                experience.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10  backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-3">
                <FaDatabase className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                Backend Powerhouse
              </h3>
              <p className="text-gray-400 text-sm tracking-wider">
                Knowledge of backend development, including working with APIs
                and databases. Continuously learning server-side concepts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10  backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-3">
                <FaLayerGroup className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white font-semibold mb-2">
                End-to-End Ownership
              </h3>
              <p className="text-gray-400 text-sm tracking-wider">
                Experience working on projects from design, development to
                deployment, focusing on learning complete application flow.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
