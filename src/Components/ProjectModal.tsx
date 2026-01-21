import  { useEffect, useState } from 'react'
import { PiGithubLogoBold } from "react-icons/pi";
import { LuRadio } from "react-icons/lu";

interface ProjectModalProps {
    data: {
        title: string;
        description: string;
        technologys: string[];
        link: string;
        images: string[];
        live: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ data: { title, description, technologys, link, images, live }, isOpen, onClose }: ProjectModalProps) {

  const [currentImage, setCurrentImage] = useState(0);
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

     useEffect(() => {
       if (isOpen) {
         document.body.style.overflow = 'hidden'
       } else {
         document.body.style.overflow = ''
       }
       return () => {
         document.body.style.overflow = ''
       }
     }, [isOpen])
   
     if (!isOpen) return null 

  return (
    <div className='fixed inset-0 justify-center flex items-center z-50 p-4 bg-black/50'>
        <div className='bg-background rounded-lg max-w-xl w-full animate-scaleIn'>
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:-top-10 md:-right-10 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors z-10"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <div className=''>
                        <div className='relative'>
                            <img src={images[currentImage]} alt={title} />
                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors z-10"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">     
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors z-10"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="flex justify-center gap-2 mt-4">
                        {images.map((_, index) => (
                            <button
                            key={index}
                            onClick={() => setCurrentImage(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentImage
                                ? "bg-primary"
                                : "bg-gray-400"
                            }`}
                            />
                        ))}
                        </div>
                        <div className="p-6">
                             <h2 className="mb-2 text-primary font-bold text-2xl mt-4">
                            {title}
                        </h2>
                        <p className="text-md text-muted-foreground">
                            {description}
                        </p>
                        <div className='mt-4 gap-2'>
                            <p>Technologies Used: </p> 
                            <h3 className='font-bold text-primary mt-5'>
                                {technologys.map((tech, idx) => (
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
                                href={link}
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
                                href={live}
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
        </div>
    </div>
  )
}
