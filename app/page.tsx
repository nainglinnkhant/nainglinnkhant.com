import { About } from "./_components/about"
import { Contact } from "./_components/contact"
import { Experience } from "./_components/experience"
import { Landing } from "./_components/landing"
import { Projects } from "./_components/projects"
import { SiteNavigation } from "./_components/site-navigation"
import { Skills } from "./_components/skills"

export const revalidate = 18000

export default function Home() {
  return (
    <>
      <header>
        <SiteNavigation />
      </header>
      <main>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8">
        <p className="text-center font-semibold text-neutral-400 text-sm">
          Crafted by Naing Linn Khant &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}
