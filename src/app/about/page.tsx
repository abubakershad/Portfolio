export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-20 bg-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-10  text-blue-600 inline-block">
        About Me
      </h2>

      <div className="max-w-5xl text-lg leading-relaxed space-y-6">
        <p>
          I&apos;m <span className="font-semibold text-blue-500">Abu Bakr Shad</span> &mdash; a self-driven Full Stack Web Developer focused on building fast,
          beautiful, and scalable digital experiences that blend elegant design with real-&ndash;world functionality.
          For me, development isn&rsquo;t just about writing code &mdash; it&rsquo;s about crafting solutions that solve problems,
          deliver business value, and connect users with products they love.
        </p>

        <p>
          My core stack includes <span className="text-blue-400">React.js</span> for building rich, reusable components;
          <span className="text-blue-400"> Next.js</span> for high-performance SSR and SEO&ndash;optimized apps;
          <span className="text-blue-400"> Tailwind CSS</span> for scalable, responsive design systems; and
          <span className="text-blue-400"> TypeScript</span> for writing safe, predictable, and maintainable code.
          These aren&rsquo;t just tools I&rsquo;ve learned &mdash; they&rsquo;re part of my workflow, mindset, and professional identity.
        </p>

        <p>
          I started this journey with pure curiosity, building simple websites, and evolved through real-world projects,
          client work, and countless hours of refining my craft. Today, I treat every project like a product &mdash; not just a webpage.
          I think in terms of user journeys, business goals, and long&ndash;term sustainability. I believe in balancing technical precision
          with visual harmony, creating experiences that are both high&ndash;performing and visually stunning.
        </p>

        <p>
          I bring <span className="text-blue-400">Framer Motion</span> into my stack to add life to interfaces through smooth animations
          that enhance the user&#39;s experience without slowing down the performance. I work with APIs, handle form logic,
          and integrate dynamic content to make static pages interactive. My code is always optimized for accessibility,
          responsiveness, and SEO to ensure it works for everyone, everywhere.
        </p>

        <p>
          Whether it&rsquo;s deploying on <span className="text-blue-400">Vercel</span> for blazing&ndash;fast performance,
          managing code with <span className="text-blue-400">Git & GitHub</span>, or collaborating with designers and clients &mdash;
          I bring structure, speed, and clarity to the development process.
        </p>

        <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">What I Deliver</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Pixel&ndash;perfect, responsive user interfaces with Tailwind CSS</li>
          <li>High&ndash;performance apps using Next.js, React.js & TypeScript</li>
          <li>Clean, scalable, and maintainable code architecture</li>
          <li>Modern UI/UX thinking with accessibility and SEO in mind</li>
          <li>API integration, form handling, and smart state management</li>
          <li>Collaborative development workflows using Git & GitHub</li>
          <li>Instant deployments and preview environments using Vercel</li>
        </ul>

        <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">Beyond Code</h3>
        <p>
          I approach each project with a collaborative spirit. I listen carefully, think deeply, and iterate quickly.
          I align design with logic, creativity with structure, and user needs with business outcomes.
          Whether you&#39;re a designer looking for seamless handoff, a startup founder needing MVP speed,
          or an agency demanding high-quality builds &ndash; I bring clarity, energy, and ownership to every collaboration.
        </p>

        <h3 className="text-2xl font-bold text-blue-600 mt-10 mb-4">Let&rsquo;s Engineer the Future</h3>
        <p>
          I&rsquo;m constantly growing &mdash; not just as a developer, but as a problem&ndash;solver.
          I want to build software that helps brands scale, makes products accessible, and turns ideas into reality.
          If you&#39;re looking for a developer who blends creative energy with technical precision &mdash;
          let&rsquo;s build something remarkable together.
        </p>

        <p className="text-blue-500 font-semibold text-xl mt-6">
          Let&rsquo;s not just build &ndash; let&rsquo;s innovate, iterate, and inspire.
        </p>
      </div>
    </section>
  );
}