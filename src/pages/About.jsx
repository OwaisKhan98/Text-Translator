import React from 'react';
import Navbar from '../components/Home/Navbar';
import { Languages, KeyRound, Sparkles, LayoutGrid } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function About() {

    useGSAP(() => {
            gsap.from(".pageanimation",{
                opacity: 0,
                duration: 0.7, })
});
        
    return (
        <>
        <div className="w-full h-screen pageanimation">
            <Navbar />
            <div className="w-full min-h-screen bg-white">
                
                {/* --- Section 1: About the Website (Hero Layout Style) --- */}
                <div className="no-scrollbar overflow-y-auto w-full min-h-[60vh] flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-28 pb-16">
                    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Left Column: Platform Typography */}
                        <div className="lg:col-span-7 space-y-6 text-left">
                            <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-500">
                                <span className="w-2 h-2 rounded-full bg-[#E53935]"></span>
                                <span>The Platform</span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                                Smart components.<br />
                                <span className="text-[#E53935]">Clean workflows.</span>
                            </h1>
                            
                            <p className="text-gray-500 text-base sm:text-lg max-w-xl font-medium leading-relaxed">
                                This website serves as a high-performance web suite engineered to simplify common digital tasks. By providing immediate access to lightweight, single-purpose tools, the platform eliminates the need for heavy software or multiple scattered tabs.
                            </p>
                        </div>

                        {/* Right Column: Platform Abstract Card */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <div className="w-full max-w-[340px] aspect-square bg-gray-50 border border-gray-100 rounded-[40px] flex flex-col justify-center p-8 space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#E53935] flex items-center justify-center text-white shadow-sm">
                                    <LayoutGrid className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">The Ecosystem</h3>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                                    A serverless-first approach to daily tools, ensuring your configurations remain fast, responsive, and completely fluid.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- Section 2: About the Tools (Feature Grid Style) --- */}
                <div className="w-full bg-gray-50/50 border-t border-gray-100 py-20 px-6 sm:px-10 lg:px-16">
                    <div className="w-full max-w-6xl mx-auto space-y-12">
                        
                        {/* Section Context Header */}
                        <div className="text-left lg:text-center space-y-2 max-w-xl lg:mx-auto">
                            <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#E53935] lg:justify-center w-full">
                                <Sparkles className="w-4 h-4" />
                                <span>Core Architecture</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                                Inside the Core Toolkit
                            </h2>
                            <p className="text-sm sm:text-base text-gray-400 font-medium">
                                A brief breakdown of how these utility frameworks function under the hood.
                            </p>
                        </div>

                        {/* Dashboard Previews Row Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            
                            {/* Translator Block */}
                            <div className="bg-white border border-gray-100 rounded-[28px] p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:shadow-sm transition-all">
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-full bg-[#E53935]/10 flex items-center justify-center text-[#E53935]">
                                        <Languages className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">Rapid Translator</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                        Instantly converts source text into multiple global languages. Engineered using streamlined API structures to deliver clean, fast results with zero processing latency or system bloat.
                                    </p>
                                </div>
                            </div>

                            {/* Password Generator Block */}
                            <div className="bg-white border border-gray-100 rounded-[28px] p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:shadow-sm transition-all">
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-900/5 flex items-center justify-center text-gray-900">
                                        <KeyRound className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 tracking-tight">Entropy Generator</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                                        Creates high-entropy, secure credentials. Because the mathematical generation logic compiles strictly within your browser sandbox, your keys are fully private and never touch a network.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Flat Quality Pillars Footer Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-3xl mx-auto">
                            <div className="bg-white border border-gray-100 p-4 rounded-2xl text-center space-y-0.5">
                                <div className="text-xs font-bold uppercase tracking-wider text-[#E53935]">Minimal</div>
                                <div className="text-xs text-gray-400 font-medium">Zero distractions</div>
                            </div>
                            <div className="bg-white border border-gray-100 p-4 rounded-2xl text-center space-y-0.5">
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-900">Secure</div>
                                <div className="text-xs text-gray-400 font-medium">Client-side logic</div>
                            </div>
                            <div className="bg-white border border-gray-100 p-4 rounded-2xl text-center space-y-0.5">
                                <div className="text-xs font-bold uppercase tracking-wider text-gray-900">Instant</div>
                                <div className="text-xs text-gray-400 font-medium">Optimized speeds</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            </div>
        </>
    );
}

export default About;