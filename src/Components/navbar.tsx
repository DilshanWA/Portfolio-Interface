import React from 'react'


const NavItems = [
    { name: 'Home', id: '#home' },
    { name: 'About', id: '#aboutme' },
    { name: 'Projects', id: '#projects' },
    { name: 'Education', id: '#education' },
    { name: 'Certification', id: '#certification' },
    { name: 'Contact', id: '#contact' },
]


export default function Navbar() {
 const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className='fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 mb-8 border-b border-border'>
        <nav className='max-w-7xl mx-auto py-4 px-6 flex justify-between items-center '>
            <div >
                <a href="/">
                    <h1 className='text-lg font-bold'>
                    Dilshasn
                    <span className='text-primary'>TM.</span>
                </h1>
                </a>
            </div>
            <div className='hidden md:flex items-center gap-10'>
                {NavItems.map((item, index)=>(
                    <a
                    href={item.id}
                    key={index}
                    className="
                        relative
                        text-sm font-medium text-muted-foreground
                        border-b-2 border-transparent
                        hover:text-primary
                        hover:border-primary
                        transition-all duration-300 ease-in-out
                    "
                    >
                    {item.name}
                    </a>
                ))}
            </div>
            <button className='md:hidden flex flex-col gap-1 relative w-8 h-8 justify-center' 
                onClick={() =>setIsMenuOpen(!isMenuOpen)}>
                <span
                    className={`w-6 h-0.5 bg-foreground transition-all ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                />
                <span
                    className={`w-6 h-0.5 bg-foreground transition-all ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <span
                    className={`w-6 h-0.5 bg-foreground transition-all ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                />
            </button>
            {/* Mobile menu */}
            {isMenuOpen && (
              <div className='absolute top-16 left-0 right-0 w-full bg-background border-b border-border md:hidden'>
                <div className='flex flex-col items-center gap-6 py-4'>
                    {NavItems.map((item, index)=>(
                        <a
                        href={item.id}
                        key={index}
                        className="
                            relative
                            text-sm font-medium text-muted-foreground
                            border-b-2 border-transparent
                            hover:text-primary
                            hover:border-primary
                            transition-all duration-300 ease-in-out
                        "
                        >
                        {item.name}
                        </a>
                    ))}
                </div>
              </div>
            )}
        </nav>
    </div>
  )
}
