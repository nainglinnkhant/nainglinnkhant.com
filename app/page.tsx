import { Landing } from "./_components/landing"
import { SiteNavigation } from "./_components/site-navigation"

export default function Home() {
  return (
    <>
      <header>
        <SiteNavigation />
      </header>
      <main className="bg-[#111010]">
        <Landing />
      </main>
    </>
  )
}
