import React from 'react'
import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa"
import { IoMdMail, IoIosCall } from "react-icons/io"
import Loading from './Loading'


export default function Contact() {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [showLoading, setShowLoading] = React.useState(false);

    const handleClose = () =>{
        setShowLoading(false);
    }


    const handleFormSubmit = async (e:React.FormEvent)=>{
        setIsLoading(true);
        setShowLoading(true);
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:5000/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, message }),
            });
            if(res.ok){
                setIsLoading(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }

        }catch(err){
            console.error("Error sending message:", err);
        }
    }

  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-cover bg-center mt-20"
      style={{
        backgroundImage: "url('/background_image.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-white">

        {/* SECTION HEADER */}
        <div className="mb-16 scroll-animate">
          <p className="text-sm font-mono text-primary mb-4">
            {'// Contact Me'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-primary">Touch</span>
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <form 
          className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 space-y-6 scroll-animate"
          onSubmit={handleFormSubmit}          
          >

            {/* NAME & EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="bg-transparent border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition"
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="bg-transparent border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Project discussion"
                className="bg-transparent border border-white/20 rounded-md px-4 py-2 focus:outline-none focus:border-primary transition"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-medium">Message</label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
                className="bg-transparent border border-white/20 rounded-md px-4 py-2 resize-none focus:outline-none focus:border-primary transition"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-primary text-black px-6 py-3 rounded-md font-medium hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

          {/* CONTACT INFO */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 space-y-6 scroll-animate">
            <h3 className="text-2xl font-bold">
              Let’s build something <span className="text-primary">great</span>
            </h3>

            <p className="text-white/70 max-w-md">
              I’m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 text-sm">
                <div className="flex items-center gap-4">
                    <div className="p-1 bg-white rounded-full text-black">
                    <IoMdMail size={20} />
                    </div>
                    <span>dilshan.personal12@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-1 bg-white rounded-full text-black">
                    <IoIosCall size={20} />
                    </div>
                    <span>+94 76 1606 311</span>
                </div>

                <a
                    href="https://www.linkedin.com/in/dilshan-madusanka"
                    target="_blank"
                    className="flex items-center gap-4 hover:text-primary transition"
                >
                    <div className="p-1 bg-white rounded-full text-black">
                    <FaLinkedin size={20} />
                    </div>
                    <span>linkedin.com/in/dilshan-madusanka</span>
                </a>

                <a
                    href="https://github.com/DilshanWA"
                    target="_blank"
                    className="flex items-center gap-4 hover:text-primary transition"
                >
                    <div className="p-1 bg-white rounded-full text-black">
                    <FaGithub size={20} />
                    </div>
                    <span>github.com/DilshanWA</span>
                </a>

                <a
                    href="https://web.facebook.com/dilshan.thathsara.92"
                    target="_blank"
                    className="flex items-center gap-4 hover:text-primary transition"
                >
                    <div className="p-1 bg-white rounded-full text-black">
                    <FaFacebookSquare size={20} />
                    </div>
                    <span>facebook.com/dilshan.thathsara</span>
                </a>
                <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-foreground">Current Status</h3>
                <p className="text-pretty text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                    </span>
                    Available for internship opportunities
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
        {showLoading && <Loading isLoading={isLoading} onClose={handleClose} />}
    </section>
  )
}
