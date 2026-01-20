import { useState } from "react"
import Modal from "./ModalBox"
import { PiGithubLogoBold } from "react-icons/pi";
import { LuRadio } from "react-icons/lu";

const projects = [
    {
        title: 'Quantify Pro - Invoice & Quote Generator',
        description: 'A web application that allows users to create and manage professional invoices and quotes with customizable templates and client management features.',
        image: '/project_img/quantify.png',
        technologys: ['React', 'Node.js', 'Express','Firebase'],
        link: 'https://github.com/DilshanWA/QuantifyPro.git',
        live: 'https://quantifypro.web.app/'
    },
    {
        title: 'CloudPDF - Online PDF Converter',
        description: 'A cloud-based service that enables users to convert various file formats to and from PDF, with options for merging, splitting, and compressing PDF documents.',
        image: '/project_img/cloudpdf.png',
        technologys: ['Next.js', 'Python', 'Docker','AWS', 'JWT'],
        link: 'https://github.com/DilshanWA/CloudPDF-Frontend.git',
        live: 'https://cloud-pdf-pdf-converte.vercel.app'
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my projects, skills, and experience as a software engineer, built with modern web technologies for optimal performance and responsiveness.',
        image: '/project_img/portfolio.png',
        technologys: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        link: 'https://github.com/DilshanWA/Portfolio-Interface.git',
        live: 'https://dilshanthathsara.me'
    },
  
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const [showProjectModal, setShowProjectModal] = useState<number | null>(null)

  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id='projects' className='py-5 px-4 md:mt-0 pt-40'>
        <div className='mx-auto max-w-7xl px-6'>
            <div className="mb-12 scroll-animate">
                <p className="text-sm font-mono text-primary mb-4">
                    {'// Projects'}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    My Recent
                    <span className="text-primary"> Works</span>
                </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate'>
                {/* Project cards will go here in the future */}
                {displayedProjects.map((project, index)=>(
                    <div key={index} 
                      className='bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer flex flex-col h-full'
                      onClick= {() => setShowProjectModal(index)}
                      >
                        {/* IMAGE */}
                        <div className='w-full h-50 overflow-hidden rounded-md mb-4'>
                            <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
                        </div>
                        {/* TITLE */}
                        <h3 className='text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2'>
                            {project.title}
                        </h3>
                        {/* DESCRIPTION */}
                        <p className='text-sm text-muted-foreground flex-grow'>
                            {project.description}
                        </p>
                        {/* LINK */}
                        <div className='mt-4'>
                            <a href={project.link} className='text-primary hover:underline'>
                                View Project →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            {/* VIEW MORE BUTTON */}
            {projects.length>3 &&(
                <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-3 rounded-md  text-primary hover:bg-primary-dark transition"
              >
                {showAll ? 'View Less' : 'View More'}
              </button>
            </div>
            )}
        </div>
        {/* PROJECT MODAL */}
        <Modal
            isOpen={showProjectModal !== null}
            onClose={() => setShowProjectModal(null)}
            >
                {showProjectModal !== null && (
                    <div className=''>
                        <div>
                            <img src={projects[showProjectModal].image} alt={projects[showProjectModal].title} />
                            <button
                                onClick={() => setShowProjectModal(null)}
                                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors z-10"
                                >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-6">
                             <h2 className="mb-2 text-primary font-bold text-2xl mt-4">
                            {projects[showProjectModal].title}
                        </h2>
                        <p className="text-md text-muted-foreground">
                            {projects[showProjectModal].description}
                        </p>
                        <div className='mt-4 gap-2'>
                            <p>Technologies Used: </p> 
                            <h3 className='font-bold text-primary mt-5'>
                                {projects[showProjectModal].technologys.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 text-sm font-semibold rounded-full 
                                                    bg-primary/10 text-primary border border-primary/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </h3>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-5 gap-4">
                            <a
                                href={projects[showProjectModal].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2
                                        w-full sm:w-1/2
                                        bg-primary text-background px-6 py-3 rounded-md
                                        font-medium transition hover:scale-105"
                            >
                                <PiGithubLogoBold size={20} />
                                View on GitHub
                            </a>
                            <a
                                href={projects[showProjectModal].live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2
                                        w-full sm:w-1/2
                                        bg-transparent text-primary border border-primary
                                        px-6 py-3 rounded-md font-medium
                                        transition hover:scale-105"
                            >
                                <LuRadio size={20} />
                                Live Demo
                            </a>
                            </div>

                        </div>
                    </div>
                )}

        </Modal>
        
    </section>
  )
}
