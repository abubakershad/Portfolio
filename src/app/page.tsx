import Navbar from "../components/Navbar";
import Hero from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white transition-colors duration-300 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
