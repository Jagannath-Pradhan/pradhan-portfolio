import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
