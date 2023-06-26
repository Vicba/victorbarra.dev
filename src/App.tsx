import About from './components/about'
import Seo from './components/seo'
import Projects from './components/projects'
import Skillset from './components/skillset'
import Footer from './components/footer'
import Hero from './components/hero'

function App() {

  return (
    <>
      <Seo/>
      {/* Website coming soon */}
      <Hero/>
      <About/>
      <Projects/>
      <Skillset/>
      <Footer/>
    </>
  )
}

export default App
