import React from 'react'

const navbar = () => {
    return (
        <div>
            <header className="bg-white shadow ">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <div className="text-2xl font-bold text-blue-600">Notes4all</div>
                    <nav className="space-x-4">
                        <a href="#home" className="text-gray-600 hover:text-blue-600">
                            Home
                        </a>
                        <a href="#about" className="text-gray-600 hover:text-blue-600">
                            About
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-blue-600">
                            Contact
                        </a>
                    </nav>
                </div>
            </header>

        </div>
    )
}

export default navbar
