import About from '@/components/about'
import Contact from '@/components/contact'
import Experience from '@/components/experiences'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import SectionDivider from '@/components/section-divider'
import Skils from '@/components/skills'


export default function Home() {
 return (
  <main className="flex flex-col items-center px-4">
        <Intro/>
        <SectionDivider/>
        <About/>
        <Projects/>
        <Skils/>
        <Experience/>
        <Contact/>
  </main>
 )
}
