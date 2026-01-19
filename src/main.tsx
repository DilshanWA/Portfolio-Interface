import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Components/navbar'
import Hero from './Components/Hero'
import Aboutme from './Components/Aboutme'
import Education from './Components/Education'
import Certification from './Components/Certification'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Aboutme />
    <Projects />
    <Education />
    <Certification />
    <Contact />
    <Footer />
  </StrictMode>,
)
