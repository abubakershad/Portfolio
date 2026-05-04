import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Contact from "../components/Contact"
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-[#020617] text-white transition-colors duration-300 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills/>
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
