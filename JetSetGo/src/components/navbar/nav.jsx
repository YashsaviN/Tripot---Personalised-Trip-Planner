import React from 'react'
import PlaneLogo from './Screenshot_2025-07-29_235902-removebg-preview.png'

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full z-1 top-0 left-0">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                    <a href="#" className="flex items-center space-x-3 font-semibold hover:text-blue-600 font-mono">
                        <img src={PlaneLogo} alt="Plane Logo" className="w-10 h-10 object-contain" />
                        <span>JetSetGo</span>
                    </a>
                </div>
                <ul className="space-x-8 text-gray-700">
                    <li><a href="#home" className="hover:text-blue-600">Home</a></li>
                    <li><a href="#trip" className="hover:text-blue-600">Dashboard</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar