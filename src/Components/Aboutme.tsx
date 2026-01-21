const skills = [
    'React & Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
    'OOP & Data Structures',
    'REST APIs',
    'Express.js',
    'Docker',
    'Python',
    'AWS',
    'Git & GitHub',
    'Agile Methodologies',  

  ]

export default function Aboutme() {
  return (
    <section id="aboutme" className='container flex mx-auto max-w-7xl px-6 text-center md:text-left  pt-40'>
      <div className='w-full' >
         <div className="mb-12 scroll-animate">
          <p className="text-sm font-mono text-primary mb-4">
            {'// About Me'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Creative Developer,<br />
            <span className="text-primary">Problem Solver</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6 scroll-animate scroll-animate-delay-1 sm:text-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated undergraduate and versatile full-stack developer with hands-on experience spanning web and mobile applications. Proficient in modern JavaScript frameworks like React and Next, as well as backend technologies including Python, Java, and Express.js, I build scalable and elegant solutions that prioritize user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Driven by a passion for innovation, I actively pursue growth in emerging fields such as artificial intelligence and machine learning, integrating these cutting-edge technologies into my projects. Beyond coding, I contribute to open-source communities and craft technical articles to share knowledge and refine my expertise.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Committed to continuous learning and creative problem-solving, I thrive on exploring new technologies and transforming complex challenges into impactful software solutions.
            </p>
          </div>

          <div className="space-y-6 scroll-animate scroll-animate-delay-2">
            <h3 className="text-xl font-semibold">Core Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
                >
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 scroll-animate scroll-animate-delay-3 ">
          <div className="border-l-2 border-primary pl-6 py-4">
            <p className="text-3xl font-bold text-primary mb-2">5+</p>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          {/*  
          <div className="border-l-2 border-primary pl-6 py-4">
            <p className="text-3xl font-bold text-primary mb-2">30+</p>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div className="border-l-2 border-primary pl-6 py-4">
            <p className="text-3xl font-bold text-primary mb-2">5+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
          */}
          
          <div className="border-l-2 border-primary pl-6 py-4">
            <p className="text-3xl font-bold text-primary mb-2">100%</p>
            <p className="text-sm text-muted-foreground">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  )
}
