import Navbar from "./components/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Project from "./sections/Project"
import Skills from "./sections/Skills"
import Testimonials from "./sections/Testimonials"

function App() {

  return (
    <div className="relative gradient text-white">

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
