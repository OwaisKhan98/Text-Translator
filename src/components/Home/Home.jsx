import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './Herosection.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Illuster from '../../assets/illuster.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function Hero() {
        useGSAP(() => {
            gsap.from(".illustator",{
                x: 100,
                duration:1,
                opacity: 0,
            })
            gsap.from(".leftside",{
                x: -100,
                duration:1,
                opacity: 0,
            })
        })
    return (
        <>
        <div className="no-scrollbar ovetrflow-y-scroll w-full min-h-[100vh] bg-white flex items-center justify-center px-6 sm:px-10 lg:px-16 pt-24 pb-12">
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <Navbar />
                {/* Left Side: Impact Typography & Pill Call-to-Actions */}
                <div className="lg:col-span-7 space-y-6 text-left leftside">
                    <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-500">
                        <span className="w-2 h-2 rounded-full bg-[#E53935]"></span>
                        <span>All-In-One Toolkit</span>
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                        Smart utilities. <br />
                        <span className="text-[#E53935]">Zero friction.</span>
                    </h1>
                    
                    <p className="text-gray-500 text-base sm:text-lg max-w-lg font-medium leading-relaxed">
                        Experience lightning-fast translation tools and instantly secure credential generation. Minimalist utilities engineered entirely to drop directly into your daily routine.
                    </p>

                    {/* Integrated Pill CTA Group */}
                    <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md">
                        <Link 
                            to="/Translator" 
                            className="bg-[#E53935] text-white text-center font-medium px-8 py-3.5 rounded-full hover:bg-red-600 transition-all shadow-sm tracking-tight text-sm sm:text-base"
                        >
                            Try Translator
                        </Link>
                        <Link 
                            to="/Password_Generator" 
                            className="bg-gray-100 text-gray-800 text-center font-medium px-8 py-3.5 rounded-full hover:bg-gray-200 transition-all tracking-tight text-sm sm:text-base"
                        >
                            Password Gen
                        </Link>
                    </div>
                </div>

                {/* Right Side: Flat Art Vector Illustration matching image_338fe5.png */}
                <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fadeIn">
                    <div className="w-full lg:max-w-[550px] lg:absolute lg:top-26 md:max-w-[400px] md:mr-10 md:aspect-square flex items-center justify-center rounded-[40px] p-4">
                        <img src={Illuster} alt="illuster" className='ml-11 illustator animate-float'/>
                    </div>
                </div>
            </div>
        </div>
         <Footer />
        </>       
    );
}

export default Hero;