"use client";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-400"></div>
          <div className="h-px flex-1 bg-gradient-to-r from-cyan-400 to-transparent"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-6 py-16 border-b border-gray-700 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {"<Abu Baker Shad />"}
            </h3>
            <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center md:justify-end">
            {["home", "about", "projects", "services", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-400 hover:text-cyan-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="py-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Abu Baker Shad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
