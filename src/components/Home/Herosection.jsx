import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';

function HeroSection() {
    return (
        <>
        
        <div className="no-scrollbar overflow-y-auto w-full bg-gray-50/50 border-t border-gray-100 py-16 px-6 sm:px-10 lg:px-16">
            <div className="w-full max-w-6xl mx-auto space-y-12">
                
                {/* Section Context Header */}
                <div className="text-center space-y-2 max-w-xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Two Essential Dashboards. One Fluid Interface.
                    </h2>
                    <p className="text-sm sm:text-base text-gray-400 font-medium">
                        Seamlessly transition between tasks without the cognitive overhead of multiple open tabs.
                    </p>
                </div>

                {/* Dashboard Previews Row Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    
                    {/* Feature 1 Layout Preview */}
                    <div className="bg-white border border-gray-100 rounded-[28px] p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:shadow-md transition-all group">
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-full bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21a.75.75 0 01-.75-.75V5.625L5.47 9.875a.75.75 0 11-1.04-1.08l5.5-5.25a.75.75 0 011.04 0l5.5 5.25a.75.75 0 11-1.04 1.08l-4.28-4.25v14.625a.75.75 0 01-.75.75z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Rapid Translator</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Instantly convert local text to global languages using optimized secure network integrations. Clean form factor minimizes latency.
                            </p>
                        </div>
                        <div className="pt-4">
                            <Link to="/Translator" className="inline-flex items-center space-x-2 text-sm font-semibold text-[#E53935] group-hover:underline">
                                <span>Open Translator</span>
                                <span className="text-xs">→</span>
                            </Link>
                        </div>
                    </div>

                    {/* Feature 2 Layout Preview */}
                    <div className="bg-white border border-gray-100 rounded-[28px] p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:shadow-md transition-all group">
                        <div className="space-y-3">
                            <div className="w-10 h-10 rounded-full bg-gray-900/5 flex items-center justify-center text-gray-900">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.02 5.912L9 18.75V21h-2.25v-2.25H4.5V16.5H2.25V13.5L8.088 7.688A6 6 0 0115.75 5.25z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Entropy Generator</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Produce cryptographically random strings inside your browser container. Complete client-side production guarantees no credential leaks.
                            </p>
                        </div>
                        <div className="pt-4">
                            <Link to="/Password_Generator" className="inline-flex items-center space-x-2 text-sm font-semibold text-gray-900 group-hover:underline">
                                <span>Generate Passwords</span>
                                <span className="text-xs">→</span>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
    );
}

export default HeroSection;