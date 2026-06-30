import React from 'react';

function Footer() {
    return (
        <footer className="no-scrollbar ovetrflow-y-auto w-full bg-[#1D2641] border-t-1 border-t-gray-300 py-5 px-6 sm:px-10 lg:px-16 mt-auto">
            <div className="w-full mt-3 max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Brand Identifier */}
                <div className="flex items-center space-x-1.5">
                    <span className="text-sm font-bold tracking-tight text-gray-400">Owais Khan</span>
                    
                </div>

                {/* Minimalist Navigation Links */}
                <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-[#E53935] transition-colors duration-200">Privacy</a>
                    <a href="#" className="hover:text-[#E53935] transition-colors duration-200">Terms</a>
                    <a href="#" className="hover:text-[#E53935] transition-colors duration-200">Support</a>
                </div>

                {/* Micro Copyright String */}
                <p className="text-xs font-medium text-gray-400 tracking-tight">
                    &copy; {new Date().getFullYear()} Tools. All rights reserved.
                </p>
                
            </div>
        </footer>
    );
}

export default Footer;