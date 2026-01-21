import  { useEffect } from 'react';

interface LoadingProps {
  isLoading: boolean;
  onClose?: () => void;
}

export default function Loading({ isLoading, onClose }: LoadingProps) {
  
  // Auto close success message after 25 seconds when not loading
  useEffect(() => {
    if (!isLoading && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isLoading, onClose]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 z-50 space-y-4 p-4 text-center">

      <div className='w-full max-w-sm bg-card border border-border rounded-lg p-6 flex flex-col items-center space-y-4'>
         
      {isLoading ? (
        <>
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p>Sending Your Message...</p>
        </>
      ) : (
        <>
          <div className="w-16 h-16 border-4 border-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p>Thank You for Your Message!</p>
          <p>I'll get back to you soon.</p>
          {onClose && (
            <button
              onClick={onClose}
              className="text-primary hover:text-primary/80 transition"
            >
              Close
            </button>
          )}
        </>
      )}
      </div>
    </div>
  );
}
