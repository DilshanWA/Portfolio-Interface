import { useState } from "react"

const projects = [
    {
        title: 'Quantify Pro - Invoice & Quote Generator',
        description: 'A web application that allows users to create and manage professional invoices and quotes with customizable templates and client management features.',
        image: '/project_img/quantify.png',
        link: '#'
    },
    {
        title: 'CloudPDF - Online PDF Converter',
        description: 'A cloud-based service that enables users to convert various file formats to and from PDF, with options for merging, splitting, and compressing PDF documents.',
        image: '/project_img/cloudpdf.png',
        link: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website showcasing my projects, skills, and experience as a software engineer, built with modern web technologies for optimal performance and responsiveness.',
        image: '/project_img/portfolio.png',
        link: '#'
    },
  
]

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

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
                    <div key={index} className='bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors cursor-pointer flex flex-col h-full'>
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
    </section>
  )
}
