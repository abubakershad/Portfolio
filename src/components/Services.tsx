"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import {
  FaCode,
  FaBrain,
  FaReact,
  FaCloud,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FaCode,
  FaBrain,
  FaReact,
  FaCloud,
  FaPaintBrush,
  FaServer,
};

export default function Services() {
  return (
    <section id="services" className="pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <p className="text-gray-400 text-lg">WHAT I BRING TO THE TABLE</p>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-2">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || FaCode;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="p-10 rounded-2xl bg-white/5 border border-white/10 text-center cursor-pointer backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
              >
                <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 text-white text-3xl shadow-lg">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
