import  { useState,useEffect } from 'react'
import CertificateModal from './CertificateModal'

const certification = [
  {
    title: 'Software Architecture Certification',
    issuer: 'LinkedIn Learning',
    year: '2025',
    details: 'Learned principles and best practices for designing robust software architectures.',
    image: '/softwarearchitecture.jpg'
  },
  {
    title: 'Python Basics Certification',
    issuer: 'Hackerrank',
    year: '2023',
    details: 'Demonstrated proficiency in fundamental Python programming concepts and problem-solving skills.',
    image: '/python_basics.png'
  },
  {
    title: 'Python Data Structures Certification',
    issuer: 'SoloLearn',
    year: '2026',
    details: 'Gained knowledge of various data structures in Python and their applications in solving complex problems.',
    image: '/Python_datastructure.jpg'
  },
  {
    title: 'Maximize Productivity With AI Tools',
    issuer: 'Google',
    year: '2025',
    details: 'Acquired foundational IT support skills including troubleshooting, customer service, and networking.',
    image: '/cousera_ai.jpg'
  },
  {
    title: 'Scrum Master Certification',
    issuer: 'Scrum Alliance',
    year: '2021',
    details: 'Gained knowledge in Agile methodologies and Scrum framework for effective project management.',
    image: '/softwarearchitecture.jpg'  // Update path accordingly
  },
  {
    title: 'Data Science Professional Certificate',
    issuer: 'IBM',
    year: '2022',
    details: 'Learned data analysis, visualization, and machine learning techniques using Python and related tools.',
    image: '/softwarearchitecture.jpg'  // Update path accordingly
  }
]

function Certification() {
  const [showAll, setShowAll] = useState(false)
  const [showCertificateModal, setShowCertificateModal] = useState<number | null>(null)

  
  useEffect(() => {
    if (showCertificateModal !== null) {
      // Disable scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Enable scroll
      document.body.style.overflow = ''
    }

    // Cleanup on unmount or modal close
    return () => {
      document.body.style.overflow = ''
    }
  }, [showCertificateModal])

  // Show only first 4 items initially
  const displayedCerts = showAll ? certification : certification.slice(0, 4)

  return (
    <section id='certification' className='py-6 px-6 md:mt-0 pt-40'>
      <div className='mx-auto max-w-7xl px-6'>
        <div>
          <div className="mb-12 scroll-animate">
            <p className="text-sm font-mono text-primary mb-4">
              {'// Certification'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional
              <span className="text-primary"> Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 scroll-animate" >
            {displayedCerts.map((cert, index) => (
              <div
                key={index}
                onClick={() => setShowCertificateModal(index)}
                className="group cursor-pointer h-full"
              >
                <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary transition-colors flex flex-col">

                  {/* IMAGE */}
                  <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* SPACER */}
                  <div className="flex-grow" />

                  {/* FOOTER */}
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* VIEW MORE BUTTON */}
          {certification.length > 4 && (
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
      </div>
      {/* Modal box */}

      <CertificateModal
        isOpen={showCertificateModal !== null}
        onClose={() => setShowCertificateModal(null)}
      >
        {showCertificateModal !== null && (
          <div className=''>
              <div>
                <img src={certification[showCertificateModal].image} alt={certification[showCertificateModal].title} 
                className='w-full h-65 object-cover rounded-md'
                />
                <button
                    onClick={() => setShowCertificateModal(null)}
                    className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors z-10"
                >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                </button>
              </div>
              <div className='p-6'>
                <h2 className="mb-2 text-primary font-bold text-2xl">
                  {certification[showCertificateModal].title}
                </h2>
                <div className='flex gap-2'>
                  <p>Issued By: </p> <h3 className='font-bold text-primary'>{certification[showCertificateModal].issuer}</h3>
                </div>
                <div className="mt-4 flex gap-4 border border-border rounded-lg">
                  <div className='p-4 w-1/2 border-r border-border'>
                    <p>Credential ID</p>
                    <p className='font-mono text-sm text-primary'>1234567890</p>
                  </div>
                  <div className='p-4 w-1/2'>
                    <p>Issued Year</p>
                    <p className='font-mono text-sm text-primary'>{certification[showCertificateModal].year}</p>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row gap-4 space-y-1 mt-6'>
                  <a href=''
                    className='py-3 w-full text-center font-bold px-6 bg-primary text-background rounded-md '>
                    View Certificate
                  </a>
                  <button  className='py-3 w-full text-center font-bold px-6 bg-transparent text-primary border border-primary rounded-md'
                    onClick = {() => setShowCertificateModal(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
          </div>
        )}
      </CertificateModal>
    </section>
  )
}

export default Certification
