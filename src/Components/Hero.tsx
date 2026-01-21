import heroImage from '../assets/myimage2.png'
import { FaGithub,FaLinkedin, FaFacebookSquare   } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsMedium } from "react-icons/bs";
import { TypeAnimation } from 'react-type-animation';


export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-center relative bg-cover "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67), rgb(10,10,10)), url('/background_image.png')`,
      }}
    >
      <div 
        className="mt-40 md:mt-20  lg:mt-10 container mx-auto max-w-7xl px-6 grid grid-cols-1 
        md:grid-cols-2 gap-10 items-center  animate-fadeInUp scroll-animate">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-[10px] pl-1 mb-4 text-muted-foreground">
            <span className="text-primary tracking-[.2em]">
              <TypeAnimation
                sequence={['HELLO ! WELCOME TO MY PORTFOLIO', 2000]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            I'm Dilshan, <br />
            <span className="text-primary">
                  Software Engineer
              </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Crafting elegant solutions to complex problems.
            I specialize in building scalable web applications with modern technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects">
              <button className="bg-primary text-background px-6 py-3 rounded-md font-medium hover:scale-105 transition">
                View My Work
              </button>
            </a>

            <a href="/my_cv.pdf" download={"Dilshan_CV.pdf"} target="_blank" rel="noopener noreferrer">
              <button className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-background hover:scale-105 transition">
                Download CV
              </button>
            </a>
          </div>
          {/* social media icons */}
            <div className="flex items-center gap-6 mt-10 justify-center md:justify-start">
                <a href="https://github.com/DilshanWA" target="_blank" rel="noopener noreferrer"
                className="btn-animate btn-animate-delay-1 w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all btn-glow">
                    <FaGithub size={20} className="text-muted-foreground hover:text-primary transition"/>
                </a>
                <a href="https://www.linkedin.com/in/dilshan-madusanka" target='_blank'
                className="btn-animate btn-animate-delay-1 w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all btn-glow">
                    <FaLinkedin size={20} className="text-muted-foreground hover:text-primary transition"/>
                </a>
                <a href="https://medium.com/@dilshan_tm" target="_blank"
                className="btn-animate btn-animate-delay-1 w-10 h-10 border border-border rounded-lg flex items-center justify-center hover:border-primary hover:text-primary transition-all btn-glow">
                    <BsMedium size={20} className="text-muted-foreground hover:text-primary transition"/>
                </a>
                <a href="https://web.facebook.com/dilshan.thathsara.92" target="_blank"
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
