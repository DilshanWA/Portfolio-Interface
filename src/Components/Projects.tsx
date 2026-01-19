import React from 'react'


const projects = [
    {
        title: 'Quantify Pro - Invoice & Quote Generator',
        description: 'A web application that allows users to create and manage professional invoices and quotes with customizable templates and client management features.',
        image: '/project1.png',
        link: '#'
    },
    {
        title: 'CloudPDF - Online PDF Converter',
        description: 'A cloud-based service that enables users to convert various file formats to and from PDF, with options for merging, splitting, and compressing PDF documents.',
        image: '/project2.png',
        link: '#'
    },
    {
        title: 'Fixmo - Service Marketplace Mobile App',
        description: 'A mobile application that connects users with local service providers for tasks such as home repairs, cleaning, and maintenance, featuring real-time booking and reviews.',
        image: '/project3.png',
        link: '#'
    },
]

export default function Projects() {
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
                {projects.map((project, index)=>(
                    <div key={index} className='bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer flex flex-col h-full'>
                        {/* IMAGE */}
                        <div className='w-full h-40 overflow-hidden rounded-md mb-4'>
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
        </div>
    </section>
  )
}
