"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const titles = [
  "Frontend Developer",
  "Next.js Expert",
  "Full Stack Developer",
  "UI/UX Designer",
  "React & Next.js Pro",
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-18 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/30 rounded-full blur-[100px] top-[10%] left-[10%] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500/30 rounded-full blur-[100px] bottom-[20%] right-[10%] animate-pulse delay-1000"></div>
        <div className="absolute w-[300px] h-[300px] bg-pink-500/30 rounded-full blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mt-[7%] text-[clamp(3rem,8vw,5rem)] font-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Abu Baker
            </span>
          </motion.h1>

          <div className="h-[40px] flex items-center justify-center mb-8 perspective-[1000px] relative">
            <motion.h2
              key={currentTitleIndex}
              className="absolute text-[clamp(1.7rem,4.2vw,2.7rem)] font-bold text-cyan-400"
              initial={{ opacity: 0, y: 20, rotateX: 90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: -90 }}
              transition={{ duration: 0.5 }}
            >
              {titles[currentTitleIndex]}
            </motion.h2>
          </div>

          <motion.p
            className="text-lg tracking-wide leading-relaxed text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Welcome to the digital realm where innovative software engineering
            meets cutting-edge web development. As a seasoned Full Stack
            Developer and Next.js expert, I bring your ideas to life with
            precision, creativity, and a touch of generative AI magic. Let&apos;s
            build something extraordinary together!
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center flex-wrap mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/experience/AbuBakerShad.pdf"
              download
              className="px-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold hover:opacity-70 transition sm:w-auto max-w-[300px] flex items-center justify-center gap-2"
            >
              <FiDownload size={18} />
              Download CV
            </Link>

            <button
              onClick={scrollToContact}
              className="px-4 py-3 rounded-full border border-gray-600 font-bold bg-gray-800 hover:bg-gray-700 hover:transition sm:w-auto max-w-[300px]"
            >
              Get In Touch
            </button>
          </motion.div>

          <div className="absolute left-1/2 bottom-21 -translate-x-1/2 flex flex-col items-center animate-bounce">
            <div className="w-[30px] h-[50px] border-2 border-cyan-400 rounded-2xl flex justify-center pt-2">
              <div className="w-[4px] h-[10px] bg-cyan-400 rounded animate-[scroll_2s_ease-in-out_infinite]" />
            </div>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">
              Scroll Down
            </p>
          </div>

          <motion.div
            className="flex gap-6 justify-center mt-36"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link
              href="https://github.com/abubakershad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abu-baker-shad/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://wa.me/923214033991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[50px] h-[50px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="mailto:abubakershad111@gmail.com"
              className="w-[50px] h-[50px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl text-gray-300 hover:bg-cyan-400 hover:text-black hover:-translate-y-1 transition"
            >
              <FaEnvelope />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
