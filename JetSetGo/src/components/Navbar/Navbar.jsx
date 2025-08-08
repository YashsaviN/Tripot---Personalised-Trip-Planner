import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full z-1 top-0 left-0">
            <div className="max-w-7x1 mx-auto px-6 py-4 flex justify-between item-center">
                <a href="#" className="font-semibold hover:text-blue-600 font-mono">
                    JetSetGo
                </a>
            </div>
            <ul className = "space-x-8 text-gray-700">
                <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            </ul>
        </nav>

    )
}

export default Navbar