import { useEffect, useState } from 'react'
import heroImage from '../assets/myimage2.png'
import { FaGithub,FaLinkedin, FaFacebookSquare   } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



export default function Hero() {
  const text = "Hello! Welcome to my portfolio"
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index])
      index++
      if (index === text.length) clearInterval(interval)
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id='hero' className="min-h-screen flex items-center ">
      <div className="mt-40 md:mt-0 container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-sm mb-4 text-muted-foreground">
            // <span className="pl-2">{displayedText}</span>
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            I'm Dilshan, <br />
            <span className="text-primary">Software Engineer</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Crafting elegant solutions to complex problems.
            I specialize in building scalable web applications with modern technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects">
              <button className="bg-primary text-background px-6 py-3 rounded-md font-medium hover:scale-105 transition">
                View My Work
              </button>
            </a>

            <a href="#contact">
              <button className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-background hover:scale-105 transition">
                Download CV
              </button>
            </a>
          </div>
          {/* social media icons */}
            <div className="flex items-center gap-6 mt-10 justify-center md:justify-start">
                <a href=""
                className="btn-animate btn-animate-delay-1 w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all btn-glow">
                    <FaGithub size={20} className="text-muted-foreground hover:text-primary transition"/>
                </a>
                <a href=""
                className="btn-animate btn-animate-delay-1 w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all btn-glow">
                    <FaLinkedin size={20} className="text-muted-foreground hover:text-primary transition"/>
                </a>
                <a href=""
                className="btn-animate btn-animate-delay-1 w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all btn-glow">
                    <FaFacebookSquare size={20} className="text-muted-foreground hover:text-primary transition"/>
                </a>
                <a href="#contact"
                className="btn-animate btn-animate-delay-1 w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all btn-glow">
                    <IoMdMail size={20} className="text-muted-foreground hover:text-primary transition"/>
                </a>

            </div>
        </div>
        
        {/* RIGHT IMAGE */}
        <div className="h-[70vh] md:h-screen flex items-end justify-end">
          <img
            src={heroImage}
            alt="Dilshan"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}
