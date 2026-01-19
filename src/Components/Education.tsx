import React from 'react'

const education = [
    {
        degree: 'B.Sc. Software Engineering',
        institution: 'The Open University of Sri Lanka',
        year: '2023 - Present',
        details: 'Focused on software development, algorithms, and data structures.'
    },
    {
        degree: 'Advanced Level Education (Technology Stream)',
        institution: 'Walasmulla National School',
        year: '2018 - 2023',
        details: `'Studied in the Technology stream with a strong focus on ICT and technical subjects. 
        Built a solid foundation in computing, logical thinking, and problem-solving.'`
    },
    {
        degree: 'Ordinary Level Education',
        institution: 'Ritigahayaya Maha Vidyalaya',
        year: '2006 - 2017',
        details: 'Completed O/L with a focus on Science and Mathematics, laying the groundwork for future studies in technology and engineering.'
    }
]


export default function Education() {
  return (
    <section id='education' className='py-6 px-6 md:mt-20 pt-40'>
        <div className='mx-auto max-w-7xl px-6'>
            <div className="mb-12 scroll-animate">
                <p className="text-sm font-mono text-primary mb-4">
                    {'// Education'}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Learning &
                    <span className="text-primary"> Growth</span>
                </h2>
            </div>
            <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-primary scroll-animate"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-primary rounded-full border-4 border-secondary" />

              <div className="group">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="text-primary font-semibold mb-2">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-4">{edu.year}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {edu.details}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  )
}
