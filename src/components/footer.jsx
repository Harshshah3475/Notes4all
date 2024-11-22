import React from 'react'

const footer = () => {
  return (
    <div className=''> 
      <footer className="bg-gray-800 h-20 py-3   text-gray-200 w-full">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Notes4all. All Rights Reserved.</p>
          <p className="mt-2">
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>{" "}
            |{" "}
            <a href="#privacy" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default footer
