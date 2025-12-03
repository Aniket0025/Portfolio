import React from "react"
import CustomCursor from "./components/CustomCursor.jsx"
import IntroAnimation from "./components/IntroAnimation.jsx"
import Navbar from "./components/Navbar"
import About from "./sections/About"
import Achievement from "./sections/Achievement.jsx"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Home from "./sections/Home"
import Project from "./sections/Project"
import Skills from "./sections/Skills"
import Testimonials from "./sections/Testimonials"


function App() {

  const [introDone, setIntroDone] = React.useState(false);

  return (

    <>

    {!introDone && <IntroAnimation onFinish={()=> setIntroDone(true)}/>}    

      {introDone && (

    <div className="relative gradient text-white">
      <CustomCursor/>
    {/* <ParticlesBackground/> */}

      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Achievement/>
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>

    )}


    </>
  )
}

export default App
