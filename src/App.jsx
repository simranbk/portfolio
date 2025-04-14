import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
// import { ProjectCard } from './components/ProjectCard'
import { Contact } from './components/Contact'
import {Footer} from './components/Footer'
import 'bootstrap-icons/font/bootstrap-icons.css';



import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      {/* <ProjectCard/> */}
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
