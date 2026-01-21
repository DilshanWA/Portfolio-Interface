import { useState } from "react"
import ProjectModal from "./ProjectModal";

const projects = [
    {
        title: 'Quantify Pro - Invoice & Quote Generator',
        description: 'A web application that allows users to create and manage professional invoices and quotes with customizable templates and client management features.',
        images: ['/project_img/quantify.png'],
        technologys: ['React', 'Node.js', 'Express','Firebase'],
        link: 'https://github.com/DilshanWA/QuantifyPro.git',
        live: 'https://quantifypro.web.app/'
    },
    {
        title: 'CloudPDF - Online PDF Converter',
        description: 'A cloud-based service that enables users to convert various file formats to and from PDF, with options for merging, splitting, and compressing PDF documents.',
        images: [
            '/project_img/cloudpdf.png',
            '/project_img/cloudpdf2.png',
            '/project_img/cloudpdf3.png',
            '/project_img/cloudpdf4.png',
            '/project_img/cloudpdf5.png'
        ],
        technologys: ['Next.js', 'Python', 'Docker','AWS', 'JWT'],
        link: 'https://github.com/DilshanWA/CloudPDF-Frontend.git',
        live: 'https://cloud-pdf-pdf-converte.vercel.app'
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my projects, skills, and experience as a software engineer, built with modern web technologies for optimal performance and responsiveness.',
        images: [
            '/project_img/portfolio.png',
            '/project_img/portfolio2.png',
            '/project_img/portfolio3.png'
        ],
        technologys: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        link: 'https://github.com/DilshanWA/Portfolio-Interface.git',
        live: 'https://dilshanthathsara.me'
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my projects, skills, and experience as a software engineer, built with modern web technologies for optimal performance and responsiveness.',
        images: ['/project_img/portfolio.png'],
        technologys: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        link: 'https://github.com/DilshanWA/Portfolio-Interface.git',
        live: 'https://dilshanthathsara.me'
    }
  
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
                            <img src={project.images[0]} alt={project.title} className='w-full h-full object-cover' />
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
                <div className="flex justify-center mt-8 scroll-animate">
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
        {showProjectModal !== null && (
            <ProjectModal
                data={displayedProjects[showProjectModal]}
                isOpen={showProjectModal !== null}
                onClose={() => setShowProjectModal(null)}
            />
        )}
        
    </section>
  )
}
