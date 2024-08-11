import About from './sections/about'
import Seo from './components/seo'
import Projects from './sections/projects'
import Skillset from './sections/skillset'
import Footer from './sections/footer'
import Hero from './sections/hero'
import ScrollButton from './components/scrollButton'
import Experiences from './sections/experiences'

function App() {

  return (
    <>
      <Seo/>
      {/* Website coming soon */}
      <Hero/>
      <About/>
      <Experiences/>
      <Projects/>
      <Skillset/>
      <Footer/>
      <ScrollButton/>
    </>
  )
}

export default App
