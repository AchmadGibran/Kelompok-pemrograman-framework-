import FloatingNav from "../components/layout/FloatingNav";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import Education from "../sections/Education";
import TechStack from "../sections/TechStack";
import Projects from "../sections/Projects";
import Highlights from "../sections/Highlights";
import Contact from "../sections/Contact";

export default function Page() {
  return (
    <>
      <FloatingNav />
      <main>
        <Hero />
        <Education />
        <TechStack />
        <Projects />
        <Highlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
