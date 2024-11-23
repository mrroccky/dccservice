import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* 404 Error */}
      <div className="mb-4">
        <img
          src="/dccimg/logo.png" // Replace with an actual 404 illustration link
          alt="404 Illustration"
          className="w-20 h-auto"
        />
      </div>
      <h1 className="text-9xl font-bold text-red-400 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist. But don't worry, you can go back to the Home page.
      </p>

      {/* Redirect Button */}
      <a
        href="/" // Normal link to Home
        className="bg-green-600 hover:bg-green-900 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
      >
        Take Me Home
      </a>

      {/* Cool Illustration */}
     
    </div>
  )
}


  