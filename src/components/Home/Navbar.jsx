import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // High-contrast clean link style with the theme's signature hover transition
    const getLinkClasses = (path) => {
        const isActive = location.pathname === path;
        return `transition-all duration-200 text-sm font-medium tracking-tight px-4 py-2 rounded-full ${
            isActive 
                ? "bg-[#E53935] text-white shadow-sm" 
                : "text-gray-600 hover:text-black hover:bg-gray-100"
        }`;
    };

    return (
        <>
            <div className="fixed z-50 top-0 left-0 w-full flex justify-between items-center bg-white px-6 sm:px-10 py-4 border-b border-gray-300 backdrop-blur-md bg-white/90">
                {/* Brand Logo Layout */}
                <Link to='/' className="flex items-center space-x-1.5 cursor-pointer">
                    <span className="text-xl font-bold tracking-tight text-[#E53935]">Translator</span>
                </Link>

                {/* Desktop Menu - Pill Shaped Active Indicators */}
                <ul className="hidden sm:flex items-center gap-2">
                    <li><Link to='/' className={getLinkClasses('/')}>Home</Link></li>
                    <li><Link to='/Translator' className={getLinkClasses('/Translator')}>Translator</Link></li>
                    <li><Link to='/Password_Generator' className={getLinkClasses('/Password_Generator')}>Password Generator</Link></li>
                    <li><Link to='/About' className={getLinkClasses('/About')}>About Me</Link></li>
                </ul>

                {/* Mobile Menu Toggle button */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
                >
                    <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ease-in-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block w-5 h-0.5 bg-gray-900 transition-all duration-200 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
            </div>

            {/* Mobile Dropdown View Overlay */}
            <ul className={`sm:hidden fixed z-40 top-[65px] left-0 w-full bg-white flex flex-col items-center gap-4 text-base border-b border-gray-100 overflow-hidden transition-all duration-200 ease-in-out shadow-lg ${isOpen ? "max-h-80 py-6 opacity-100" : "max-h-0 py-0 opacity-0"}`}>
                <Link to='/' onClick={() => setIsOpen(false)} className="w-11/12 text-center"><li className="py-2 rounded-xl text-gray-700 hover:bg-gray-50">Home</li></Link>
                <Link to='/Translator' onClick={() => setIsOpen(false)} className="w-11/12 text-center"><li className="py-2 rounded-xl text-gray-700 hover:bg-gray-50">Translator</li></Link>
                <Link to='/Password_Generator' onClick={() => setIsOpen(false)} className="w-11/12 text-center"><li className="py-2 rounded-xl text-gray-700 hover:bg-gray-50">Password Generator</li></Link>
                <Link to='/About' onClick={() => setIsOpen(false)} className="w-11/12 text-center"><li className="py-2 rounded-xl text-gray-700 hover:bg-gray-50">About Us</li></Link>
            </ul>
        </>
    );
}

export default Navbar;