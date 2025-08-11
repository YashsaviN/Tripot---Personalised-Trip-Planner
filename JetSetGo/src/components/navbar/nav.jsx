import { Link } from "react-router-dom";
import PlaneLogo from './Screenshot_2025-07-29_235902-removebg-preview.png';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed w-full z-10 top-0 left-0">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                    <Link to="/" className="flex items-center space-x-3 font-semibold hover:text-blue-600 font-mono">
                        <img src={PlaneLogo} alt="Plane Logo" className="w-10 h-10 object-contain" />
                        <span>JetSetGo</span>
                    </Link>
                </div>
                <ul className="space-x-8 text-gray-700 flex">
                    <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                    <li><Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
