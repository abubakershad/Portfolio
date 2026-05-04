"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600 transition duration-300"
        aria-label="Scroll to Top"
      >
        <FaArrowUp className="font-bold"/>
      </button>
    )
  );
}
