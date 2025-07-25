"use client";

import Link from "next/link";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navLinks = ["About", "Skills", "Services", "Projects", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // sm breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-gray-900 fixed top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <FaCode className="text-2xl text-blue-600" />
        <span className="text-xl font-bold tracking-wide text-white">Abu Bakr Shad</span>
      </div>

      {/* Center nav links (desktop only) */}
      <div className="hidden md:flex space-x-8 text-gray-200 font-medium">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-blue-600 transition"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right side: Burger + Let’s Connect */}
      <div className="flex items-center space-x-4">
        {/* Let’s Connect (hidden on very small screens) */}
        {!isSmallScreen && (
          <Link
            href="https://linkedin.com/in/abu-bakr-shad" target="_blank"
            className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-blue-600 hover:text-white transition duration-300 hidden sm:block"
          >
            Let’s Connect
          </Link>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] right-6 bg-gray-800 rounded-md shadow-lg py-4 px-6 flex flex-col space-y-4 text-white text-sm sm:text-base md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400 transition"
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
