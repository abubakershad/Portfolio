"use client";

import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPhp,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostman,
  SiCplusplus,
  SiReplit,
  SiDrizzle,
  SiSupabase,
  SiSanity,
} from "react-icons/si";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  icon: ReactNode;
};

const skillsTop: Skill[] = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-800" /> },
  { name: "C++", icon: <SiCplusplus className="text-indigo-600" /> },
];

const skillsBottom: Skill[] = [
  { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "WordPress", icon: <FaWordpress className="text-blue-500" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "Replit", icon: <SiReplit className="text-yellow-300" /> },
  { name: "Drizzle", icon: <SiDrizzle className="text-purple-400" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
  { name: "Sanity", icon: <SiSanity className="text-red-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
];

const Marquee = ({
  direction = "left",
  skills,
}: {
  direction?: "left" | "right";
  skills: Skill[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    let animationFrameId: number;

    const scroll = () => {
      if (container) {
        if (direction === "left") {
          container.scrollLeft += 1;
          if (container.scrollLeft >= container.scrollWidth / 2)
            container.scrollLeft = 0;
        } else {
          container.scrollLeft -= 1;
          if (container.scrollLeft <= 0)
            container.scrollLeft = container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap w-full py-4">
      <div className="inline-flex gap-6">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center
              w-24 h-24 rounded-xl
              bg-white/5 border border-white/10
              backdrop-blur-md
              hover:scale-105 hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]
              transition text-white"
          >
            <div className="text-3xl mb-1">{skill.icon}</div>
            <div className="text-sm font-medium">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function ScrollingSkills() {
  return (
    <section id="skills" className="pb-16 relative">
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-[100px] top-[10%] left-[10%] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-400/30 rounded-full blur-[100px] bottom-[20%] right-[10%] animate-pulse delay-1000"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-400/30 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-2000"></div>
      </div> */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[250px] h-[250px] bg-cyan-300/20 rounded-full blur-[80px] top-[10%] left-[10%] animate-pulse"></div>
        <div className="absolute w-[200px] h-[200px] bg-purple-400/20 rounded-full blur-[80px] bottom-[20%] right-[10%] animate-pulse delay-1000"></div>
        <div className="absolute w-[160px] h-[160px] bg-pink-400/20 rounded-full blur-[70px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-2000"></div>
      </div>

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
            <p className="text-gray-400 text-lg">AT I EXCEL AT</p>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-2">
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-white/5 border border-white/10
                  backdrop-blur-md p-6 pb-18"
        > */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl p-8 pb-18 bg-white/5 border border-white/10
            backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition"
        >
          <Marquee direction="right" skills={skillsTop} />
          <Marquee direction="left" skills={skillsBottom} />

          {/* ❌ misleading (no interaction logic implemented) */}
          {/* <p className="text-gray-400 text-xs text-center">
                    Hover or click to interact
                  </p> */}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-gray-400 text-xs">
                Auto-scrolling skills showcase
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef } from "react";
// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPhp, FaWordpress } from "react-icons/fa";
// import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMysql, SiPostman, SiCplusplus, SiReplit, SiDrizzle, SiSupabase, SiSanity } from "react-icons/si";

// const skillsTop = [
//   { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
//   { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
//   { name: "React", icon: <FaReact className="text-cyan-400" /> },
//   { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
//   { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
//   { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
//   { name: "MySQL", icon: <SiMysql className="text-blue-800" /> },
//   { name: "C++", icon: <SiCplusplus className="text-indigo-600" /> },
// ];

// const skillsBottom = [
//   { name: "GitHub", icon: <FaGithub className="text-gray-200" /> },
//   { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
//   { name: "WordPress", icon: <FaWordpress className="text-blue-500" /> },
//   { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
//   { name: "Replit", icon: <SiReplit className="text-yellow-300" /> },
//   { name: "Drizzle", icon: <SiDrizzle className="text-purple-400" /> },
//   { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
//   { name: "Sanity", icon: <SiSanity className="text-red-500" /> },
//   { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
//   { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
// ];

// const Marquee = ({ direction = "left", skills }: { direction?: "left" | "right"; skills: any[] }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = ref.current;
//     let animationFrameId: number;

//     const scroll = () => {
//       if (container) {
//         if (direction === "left") {
//           container.scrollLeft += 1;
//           if (container.scrollLeft >= container.scrollWidth / 2) container.scrollLeft = 0;
//         } else {
//           container.scrollLeft -= 1;
//           if (container.scrollLeft <= 0) container.scrollLeft = container.scrollWidth / 2;
//         }
//       }
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     scroll();
//     return () => cancelAnimationFrame(animationFrameId);
//   }, [direction]);

//   return (
//     <div ref={ref} className="overflow-hidden whitespace-nowrap w-full">
//       <div className="inline-flex gap-6 animate-none">
//         {[...skills, ...skills].map((skill, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center w-24 h-24 justify-center rounded-lg bg-gray-800 shadow hover:scale-105 transition text-white"
//           >
//             <div className="text-3xl mb-1">{skill.icon}</div>
//             <div className="text-sm font-medium">{skill.name}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default function ScrollingSkills() {
//   return (
//     <section id="skills" className="py-20 bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Skills</h2>

//         <div className="space-y-10">
//           <Marquee direction="right" skills={skillsTop} />
//           <Marquee direction="left" skills={skillsBottom} />
//         </div>
//       </div>
//     </section>
//   );
// }
