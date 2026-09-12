import { portfolioData } from './devData.js'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Experience from './components/ExperienceSection.jsx'
import Projects from './components/ProjectsSection.jsx'
import Skills from './components/SkillsSection.jsx'
import Footer from './components/Footer.jsx'
import Education from './components/EducationSection.jsx'


export default function App() {
    return (
        <div className="min-h-screen bg-canvas font-sans text-ink">
            <a
                href="#main"
                className="sr-only z-[100] rounded-none border border-ink bg-primary text-button-md text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:inline-flex focus:min-h-11 focus:items-center focus:px-5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            >
                Skip to content
            </a>
            <Header portfolioData={portfolioData} />
            <main id="main" tabIndex="-1" className="outline-none">
                <Hero portfolioData={portfolioData} />
                <Experience portfolioData={portfolioData} />
                <Projects portfolioData={portfolioData} />
                <Skills portfolioData={portfolioData} />
                <Education portfolioData={portfolioData} />
            </main>
            <Footer portfolioData={portfolioData} />
        </div>
    )
}
