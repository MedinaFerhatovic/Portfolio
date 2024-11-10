import "./components/pages/about"
import AboutSection from "./components/pages/about"
import ContactSection from "./components/pages/contact"
import Education from "./components/pages/education"
import Experience from "./components/pages/experience"
import FirstPage from "./components/pages/firstPage"
import Projects from "./components/pages/projects"
import Skills from "./components/skills"

export default function Home() {
  return (
    <>
      <FirstPage />
      <AboutSection />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <ContactSection />
    </>
  )
}
