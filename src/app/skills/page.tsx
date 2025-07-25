"use client";

import { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaPhp, FaWordpress } from "react-icons/fa";
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
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
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
          if (container.scrollLeft >= container.scrollWidth / 2) container.scrollLeft = 0;
        } else {
          container.scrollLeft -= 1;
          if (container.scrollLeft <= 0) container.scrollLeft = container.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  return (
    <div ref={ref} className="overflow-hidden whitespace-nowrap w-full">
      <div className="inline-flex gap-6 animate-none">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-24 h-24 justify-center rounded-lg bg-gray-800 shadow hover:scale-105 transition text-white"
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
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">Skills</h2>

        <div className="space-y-10">
          <Marquee direction="right" skills={skillsTop} />
          <Marquee direction="left" skills={skillsBottom} />
        </div>
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
