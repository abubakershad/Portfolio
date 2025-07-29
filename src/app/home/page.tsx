import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="text-7xl font-bold mb-4 text-blue-600 mt-10 md:mt-10">
        Hi, I&apos;m Abu Baker
      </div>

      <div className="text-3xl text-gray-300 mb-4">
        Frontend Web Developer
      </div>

      <div className="text-lg text-gray-400 mb-8 max-w-2xl">
        A passionate Frontend Developer with strong expertise in modern web technologies.
        I specialize in building responsive, fast, and accessible user interfaces.
        My core stack includes React.js, Next.js, Tailwind CSS, and TypeScript.
        I create full&ndash;stack web solutions with a focus on clean code and performance.
        Dedicated to delivering smooth, user&ndash;friendly digital experiences.
      </div>

      <Link
        href="/experience/Abu Baker Shad.pdf" download
        className="font-medium border-blue-600 bg-blue-600 text-gray-300 border-2 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-blue-600 shadow-md transition flex items-center"
      >
        Download CV
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5 ml-2">
          <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z"></path>
          <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z"></path>
        </svg>
      </Link>

    </section >
  );
}
