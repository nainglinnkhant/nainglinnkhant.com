import { About } from "./_components/about"
import { Experience } from "./_components/experience"
import { Landing } from "./_components/landing"
import { Projects } from "./_components/projects"
import { SiteNavigation } from "./_components/site-navigation"

export default function Home() {
  return (
    <>
      <header>
        <SiteNavigation />
      </header>
      <main className="bg-neutral-950">
        <Landing />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  )
}
