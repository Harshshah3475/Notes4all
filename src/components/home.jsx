import React from 'react'
import Footer from './footer'
import { NavLink } from 'react-router-dom'

const home = () => {
    return (
        <div>
            <>
                <div className="min-h-fit bg-gray-50">
                    {/* Header */}


                    {/* Hero Section */}
                    <main className="container mx-auto px-6 py-6 text-center">
                        <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
                            Find Your College Notes
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Get the best quality notes made by your seniors!
                        </p>

                    </main>

                    {/* Categories Section */}
                    <section className="bg-white py-28">
                        <div className="container mx-auto px-6">
                            <h2 className="text-3xl font-bold text-gray-800 text-center ">
                                Explore Categories
                            </h2>

                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                <NavLink to='/science'>
                                    <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            Science Notes
                                        </h3>
                                        <p className="mt-2 text-gray-600">
                                            Physics, Chemistry, Biology, and more.
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink to='/engineering'>
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Engineering Notes
                                    </h3>
                                    <p className="mt-2 text-gray-600">
                                        Civil, Mechanical, Computer Science, and more.
                                    </p>
                                </div>
                                </NavLink>
                                <NavLink to='/humanities'>
                                <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        Arts & Humanities
                                    </h3>
                                    <p className="mt-2 text-gray-600">History, Literature, and more.</p>
                                </div>
                                </NavLink>
                                
                            </div>
                        </div>
                    </section>
                    <Footer />


                </div>

            </>


        </div>
    )
}

export default home
