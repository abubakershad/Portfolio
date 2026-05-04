"use client";

import { useState, useEffect } from "react";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "projects", "services", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }

      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      const progress = height > 0 ? (scrollTop / height) * 100 : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLink = (id: string, label: string) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`cursor-pointer font-medium transition relative ${
        activeSection === id
          ? "text-cyan-400"
          : "text-gray-300 hover:text-cyan-400"
      }`}
    >
      {label}

      {activeSection === id && (
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500" />
      )}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-white/5 backdrop-blur-md shadow-lg py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {"<Abu Baker Shad />"}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLink("home", "Home")}
          {navLink("about", "About")}
          {navLink("projects", "Works")}
          {navLink("services", "Services")}
          {navLink("contact", "Contact")}

          <Link
            href="/experience/AbuBakerShad.pdf"
            download
            className="px-4 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold hover:opacity-70 transition w-full sm:w-auto max-w-[300px] flex items-center justify-center gap-2"
          >
            <FiDownload size={18} />
            Resume
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] z-[1001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

        <div
          className={`fixed top-0 right-0 h-screen w-[70%] max-w-[300px] bg-gray-900 flex flex-col justify-center items-center gap-8 transition-all duration-300 shadow-2xl md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navLink("home", "Home")}
          {navLink("about", "About")}
          {navLink("projects", "Works")}
          {navLink("services", "Services")}
          {navLink("contact", "Contact")}

          <Link
            href="/experience/AbuBakerShad.pdf"
            download
            className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold hover:opacity-70 transition w-full sm:w-auto max-w-[300px]"
          >
            Resume
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
        <div
          className="h-full 
          // bg-gradient-to-r from-cyan-400 to-purple-500
           transition-all duration-100"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>
    </nav>
  );
}
